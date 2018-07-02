var mongoose = require('mongoose');

// athlete schema
var sportsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

var Sports = module.exports = mongoose.model('Sports', sportsSchema);

//get sports
module.exports.getSports = function(callback, limit){
    Sports.find(callback).limit(limit);
}
//add sports
module.exports.addSports = function(sports, callback){
    Sports.create(sports, callback);
}