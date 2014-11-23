module.exports.arrayToObj = function(data) {
    var res = [];

    for (var i = 0; i < data.length; i++) {
        res.push({
            url: data[i]
        });
    }

    return res;
};

module.exports.save = function(msg) {
    return Urlimg.create(msg);
};

module.exports.get = function() {
    return Urlimg.find();
};