var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var random =require('mongoose-random');
var deepPopulate = require('mongoose-deep-populate')(mongoose);


var schema = new Schema({
    question:{type: String},
    optionA: {type: String},
    optionB: {type: String},
    optionC: {type: String},
    optionD: {type: String},
    answer: {type: String},
    isPlayed:{type:Boolean,default:false}
});

schema.plugin(deepPopulate );

schema.plugin(random,{path:'r'});
module.exports = mongoose.model('Question', schema);