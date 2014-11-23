/**
 * UrlController
 *
 * @description :: Server-side logic for managing getinfoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

const PAGES = 42;

module.exports = {
    new: function(req, res) {
        // save url from C# & node.js
        var source = req.body;


        if (source.urls.length < 0) {
            return res.json({
                success: false
            });
        }

        var sourceImg = UrlimgSrv.arrayToObj(source.urls),
            data = [];

        async.eachSeries(sourceImg, function( url, callback){
            ShortSrv.shorten(url).on('complete', function(result, response){
                if (typeof(result.data.url) != 'undefined') {
                    data.push({
                        url: result.data.url
                    });
                }
                callback();
            });
        }, function(){
            UrlimgSrv.save(data).exec(function createData(err, created) {
                if (err) {
                    console.log('save error');
                    return res.json({
                        success: false
                    });
                }
                if (created) {
                    console.log('save success');
                    return res.json({
                        success: true
                    });
                }
            });
        });
    },
    show: function(req, res) {
        //get first 20 image
        var myQuery = UrlimgSrv.get();
        myQuery.limit(PAGES);
        myQuery.exec(function findData(err, found) {
            return res.view('showurl', {
                histroy: found
            });
        });
    },
    page: function(req, res) {
        var pageId = req.params.id,
            myQuery = UrlimgSrv.get();

        myQuery.limit(pageId*PAGES);

        myQuery.exec(function callBack(err,results){
            if (err) return res.serverError(err);
            return res.json({historys: results});
        });
    }
};