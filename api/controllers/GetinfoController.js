/**
 * GetinfoController
 *
 * @description :: Server-side logic for managing getinfoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	saveUrl: function(req,res){
		// save url from C# & node.js
		var source = req.body;

		if ( source.urls.length > 0 ){
			for( var i = 0 ; i < source.urls.length ; i ++){
				UrlimgSrv.save({url:source.urls[i]});
			}
			return res.json({ success: true});
		}else{
			return res.json({ success: false});
		}
	},
	getHistroy: function(req,res){
		// get url to front-end view
		UrlimgSrv.get().exec(function findData(err,found){
			console.log(found.length);
			return res.view('showurl' ,{
				histroy : found
			});
		});
	}
};

