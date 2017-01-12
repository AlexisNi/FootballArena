var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var validator=require('validator');
var jwt=require('jsonwebtoken');




var schema = new Schema({
    firstName: {
                type: String,
                required: true
    },

    lastName: {
        type: String,
        required: true
                },

    password: {
        type: String,
        required: true
        },

    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        validate:{
            validator:validator.isEmail,
            message:'Email not valid'
        }

        },

    arenas:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Arena'
        }
    ],

    tokens:[{
            access:{
                type:String,
                required:true

            },
        token:{
            type:String,
            required:true

        }
    }]





});
schema.statics.findByToken=function (token) {
  var User= this;
  var decoded;
    try{
       decoded= jwt.verify(token,'secret');
    }catch (e){
       return Promise.reject();


    }
    return User.findOne({
        _id:decoded.user._id,
        'tokens.token':token,
        'tokens.access':'auth'
    });
};

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);