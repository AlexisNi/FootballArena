/**err
 * Created by alex on 11/01/2017.
 */
var ArenaUser=require('../models/arena');
var User=require('../models/user');


module.exports=function (req,connectedUserList) {
    console.log(req.arenaId);

    ArenaUser.findOne({_id:req.arenaId})
        .populate('questions')
        .exec(function (err,arenas) {

            if (err) {
                throw err;
            }
            if(connectedUserList!=null) {
                connectedUserList.emit('loadQuestions', {
                    obj: arenas.questions
                })
            }

            console.log(arenas);


        });


}