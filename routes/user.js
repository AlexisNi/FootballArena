var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User=require('../models/user');
var jwt=require('jsonwebtoken');
var Statistics=require('../models/statistics');

router.use('/find',function (req,res,next) {
    User.findByToken(req.query.token).then(function (user) {
        if (!user){
            return Promise.reject();



        }

        next();
    }).catch(function (e) {
        return res.status(401).json({
            title:'Not Authenticated',
            message:'Please Login',
            status:'401'
        });

    });


});
router.post('/', function (req, res, next) {
    console.log('Post received! On user');
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title:'Error',
                message:'An error has occured....',
                status:'500'
            });

        }
        var statistics=new Statistics({user:result._id});
        statistics.save();

        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.get('/',function (req,res,next) {
    var decoded=jwt.decode(req.query.token);
    console.log(decoded.user._id);
    User.findOne({_id:decoded.user._id},'lastName',function (err,user) {
        if (err) {
            return res.status(500).json({
                title:'Error',
                message:'An error has occured....',
                status:'500'
            });
        }

        if(!user){
            return res.status(404).json({
                title:'Not Found',
                Message:'User not in the list',
                status:'401'
            });
        }


        res.status(200).json({
            message:'User Found',
            obj:user
        });


    });


});



router.post('/signin',function (req,res,next) {
    User.findOne({email:req.body.email},function (err,user) {
        if (err) {
            return res.status(500).json({
                title:'Error',
                message:'An error has occured....',
                status:'500'
            });
        }
        if(!user){
            return res.status(401).json({
                title:'Login failed',
                message:'Invalid Login Credentials',
                status:'401'
            });
        }

        if (!bcrypt.compareSync(req.body.password,user.password)){
            return res.status(401).json({
                title:'Login failed',
                Message:'Invalid Login Credentials',
                status:'401'
            });
        }
        var token=jwt.sign({user:user},'secret'/*,{expiresIn:720000000000000000000}*/);
        var access='auth';
        var tokens={access:access,token:token}
        user.tokens.push(tokens);
        user.save();
        res.status(200).json({
            message:'Succefully logged in',
            userId:user._id,
            token:token
        });


    });
});

router.post('/find',function (req,res,next) {
    console.log(req.body);

    User.findOne({lastName:req.body.lastName},function (err,user) {
        if (err) {
            return res.status(500).json({
                title:'Error',
                message:'An error has occured....',
                status:'500'
            });
        }
        if(!user){
            return res.status(400).json({
                title:'No results',
                Message:'User Not Found',
                status:'400'
            });
        }
        res.status(200).json({
            message:'User Found',
            lastName:user.lastName,
            inviteId:user._id
        });


    });
});

router.post('/checkUserName',function (req,res,next) {
    console.log('Check UserName Here');
   User.findOne({lastName:req.body.lastName},function (err,user) {
       if(err){
           return res.status(500).json({
               title:'Error',
               message:'An error has occured....',
               status:'500'
           });
       }
       if(user){
              return res.status(200).json({
               title: 'User Name Not Available',
               available: false
           });
       }

       return res.status(200).json({
           title: 'User Name is Available',
           available: true
       });
   })
});



module.exports=router;

