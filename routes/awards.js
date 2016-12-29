var express = require('express');
var router = express.Router();
var ArenaQuestions=require('../models/ArenaQuestion');
var Awards=require('../models/awards');
var Statistics=require('../models/statistics');


router.post('/', function (req,res,next) {
    console.log('Router Awards Work');
    console.log(req.body.arenaId);
    var arenaId=req.body.arenaId;
    var userId=req.body.userId;
    Statistics.findOne({user:userId}).exec(function (err,result) {
        if (!result){
            var statistics=new Statistics({user:userId});
            statistics.save();

            res.status(200).json({
                message:'success',
            });

        }if(err){
            res.status(200).json({
                message:'Fail',
            });
        }
    });
    Awards.findOne().where({arenaId:arenaId})
        .exec(function (err,result) {
            if(result.awards.winner.userId==userId){
               Statistics.findOne({user:userId}).exec(function (err,statistics) {
                   statistics.currentExp=statistics.currentExp+result.awards.winner.experience;
                   statistics.wins=statistics.wins+1;

                   statistics.save();
                   console.log(statistics);

               });


                }

        });

    res.status(200).json({
        message:'succecss',
    });



});

module.exports=router;
