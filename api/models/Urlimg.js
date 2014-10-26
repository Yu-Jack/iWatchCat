/**
* Urlimg.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	connection: 'mysql',

	tableName: 'url_img',

	schema: true,

	attributes: {

		id:{
			type:'integer',
			size:10,
			autoIncrement: true,
			primaryKey:true
		},
		url:{
			type:'string',
			size:255
		}
	}
};

