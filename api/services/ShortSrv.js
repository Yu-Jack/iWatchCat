module.exports.shorten = function(data) {

  var config = sails.config.bitly_shortener,
      api_key = config.api_key,
      login = config.login,
      url = config.url;

    return sails.restler.get( url+"?login="+login+"&apiKey="+api_key+"&longUrl="+data.url);

};
