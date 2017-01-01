var Statistics=require('../models/statistics');
module.exports=function (io,connectedUserList) {
    io.on('getStats',function (req) {
        console.log('Get Stats Works!');
        Statistics.findOne({user:req.userId}).exec(function (err,result) {
            if (err) {
                throw err;
            }
            if(connectedUserList!=null) {
                connectedUserList.emit('loadStats', {
                    obj: result,
                    message:'Loaded succesfully'
                });
            }
        });


    });

};