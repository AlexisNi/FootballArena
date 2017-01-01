var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    arenaId:String,
  /*  winner:{userId:String,points:Number,experience:Number},
    loser:{userId:String,points:Number,experience:Number}*/
    awards:{winner:{userId:String,points:Number,experience:Number},loser:{userId:String,points:Number,experience:Number},draw:{userId:String,points:Number,experience:Number}}
});

module.exports = mongoose.model('Awards', schema);