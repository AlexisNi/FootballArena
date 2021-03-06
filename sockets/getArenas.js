/**
 * Created by alex on 11/01/2017.
 */
var ArenaUser=require('../models/arena');
var User=require('../models/user');


module.exports=function (req,connectedUserList) {


    if(req.userId!=null) {
        var arenasArray = [];
        User.findOne({_id: req.userId/*socket.handshake.query.userId*/})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE USER ROW AND SHOW THE LAST NAME OF INVITE
            .populate('arenas', '_id')
            .exec(function (err, arenasArr) {

                if (err) {
                    throw err;
                }
                for (var i = 0; i < arenasArr.arenas.length; i++) {
                    arenasArray.push(arenasArr.arenas[i]._id);
                }
                ArenaUser.find({$and: [{user: req.userId}, {_id: {$in: arenasArray}}]},'user invite invite_played  status_accept  user_played')//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                    .populate('invite', 'lastName')
                    .deepPopulate('questions')
                    .exec(function (err, arenas) {
                        console.log(arenas);

                        if (err) {
                            throw err;
                        }

                        ArenaUser.find({$and: [{invite: req.userId}, {_id: {$in: arenasArray}}]},'user invite invite_played  status_accept  user_played')//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                            .populate('user', 'lastName')
                            .deepPopulate('questions')
                            .exec(function (err, arenasUser) {
                                console.log(arenas);
                                if (err) {

                                    throw err;
                                }
                                if(connectedUserList!=null) {
                                    connectedUserList.emit('loadArenas', {
                                        obj: arenas,
                                        objUser: arenasUser
                                    });

                                }
                            });
                    });
            });
    }


}