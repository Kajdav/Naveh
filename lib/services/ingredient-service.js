var promise = require('bluebird'),
	Ingredient = require('../models/ingredient');

promise.promisifyAll(Ingredient);
promise.promisifyAll(Ingredient.prototype);

module.exports.getAll = function(){
	return Ingredient.findAsync();
};
module.exports.getOne = function(req){
	return Ingredient.findOne({name: req.params.name}).populate('products').exec(function(err, data){
		return data;
	})
}
module.exports.post = function(req){
	var ingredient = new Ingredient(req.body);
	return ingredient.saveAsync();
};

module.exports.put = function(req, change){
	return Ingredient.findOneAndUpdateAsync({name: req.params.name}, change);
};

module.exports.delete = function(req){
	return Ingredient.removeAsync({_id: req.params.id});
};

// Ingredient.find().populate('products').exec(function(err, data){
// 		console.log(data);
// });