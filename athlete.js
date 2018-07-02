var mongoose = require('mongoose');

// athlete schema
var athleteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
  dob: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    association: {
        type: String
    },
    team: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    sports: {
        type: Array,
        required: true
    },
    about: {
        type: String
    },
    interests: {
        type: String
    },
    charities: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    snapchat: {
        type: String
    },
    linkedin: {
        type: String
    },
    twitch: {
        type: String
    },
    pets: {
        type: String,
        enum: ["Yes", "No"]
    },
    Drink_alcohol: {
        type: String,
        enum: ["Yes", "No"]
    },
    married: {
        type: String,
        enum: ["Yes", "No"]
    },

});

var Athlete = module.exports = mongoose.model('Athlete', athleteSchema);

//get athlete
module.exports.getAthlete = function(callback, limit){
    Athlete.find(callback).limit(limit);
}
/*
module.exports.getAthleteById = function(id, callback){
    Athlete.findById(id, callback);
}*/

//Add athlete
module.exports.addAthlete = function(athlete, callback){
    Athlete.create(athlete, callback);    
}