var ArenaUser=require('../models/arena');
var User=require('../models/user');
var io={};
var userInfo=[];
var connectedUserList=[];

module.exports = function (io) {
    'use strict';
    var nsp=io.of('/game');
    nsp.on('connection',function (socket) {
        console.log('User connected!');
        connectedUserList[socket.handshake.query.userId]=socket;
        console.log(connectedUserList.length);
        require('./socketUpdateStats')(socket);



        socket.on('disconnect',function () {
            console.log('User Disconcted');
            delete connectedUserList[socket.handshake.query.userId];

            var userData=userInfo[socket.id];
            if(typeof userData!=='undefined'){
                socket.leave(userData.arenaId);
                var otherUser=userInfo[socket.id].inviteId;
                console.log('player disconected invite id is :');
                console.log(otherUser);
                if (connectedUserList[otherUser]!=null){
                    if(otherUser!=null) {
                        var arenasArray = [];
                        User.findOne({_id: otherUser/*socket.handshake.query.userId*/})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE USER ROW AND SHOW THE LAST NAME OF INVITE
                            .populate('arenas', '_id')
                            .exec(function (err, arenasArr) {

                                if (err) {
                                    throw err;
                                }
                                for (var i = 0; i < arenasArr.arenas.length; i++) {
                                    arenasArray.push(arenasArr.arenas[i]._id);
                                }
                                console.log(arenasArr);
                                ArenaUser.find({$and: [{user: otherUser}, {_id: {$in: arenasArray}}]})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                                    .populate('invite', 'lastName')
                                    .deepPopulate('questions')
                                    .exec(function (err, arenas) {

                                        if (err) {
                                            throw err;
                                        }

                                        ArenaUser.find({$and: [{invite: otherUser}, {_id: {$in: arenasArray}}]})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                                            .populate('user', 'lastName')
                                            .deepPopulate('questions')
                                            .exec(function (err, arenasUser) {
                                                if (err) {

                                                    throw err;
                                                }
                                                if(connectedUserList[otherUser]!=null) {
                                                    connectedUserList[otherUser].emit('loadArenas', {
                                                        obj: arenas,
                                                        objUser: arenasUser
                                                    })
                                                }
                                            });
                                    });
                            });
                    }

                }

                delete userInfo[socket.id];
            }
        });

        socket.on('get-userId',function (userId) {
            console.log('Welcome user : '+userId);

        });

        socket.on('leaveArena',function () {
            console.log('leaver Arena Caught');
            var userData=userInfo[socket.id];
            if(typeof userData!=='undefined'){
                socket.leave(userData.arenaId);
                console.log('player left arena with id  '+userData.userId);}

        });

        socket.on('enterArena',function (req) {
            userInfo[socket.id]=req;
            socket.join(req.arenaId);
            console.log('player entered arena with detals :'+ userInfo[socket.id].arenaId+' '+userInfo[socket.id].userId);
        });


        socket.on('setfinish',function (data) {
            nsp.emit('getFinish',{status:data}) ;
        });












            socket.on('getArenas',function (req) {
            console.log('here get arenas!');
                console.log(req);

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
                        ArenaUser.find({$and: [{user: req.userId}, {_id: {$in: arenasArray}}]})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                            .populate('invite', 'lastName')
                            .deepPopulate('questions')
                            .exec(function (err, arenas) {

                                if (err) {
                                    throw err;
                                }

                                ArenaUser.find({$and: [{invite: req.userId}, {_id: {$in: arenasArray}}]})//HERE IS SEARCHING WITH THE USER TOKEN PARAMETER IN THE ARENA DATABASE AT THE INVITE ROW AND SHOWS THE LAST NAME OF THE USER
                                    .populate('user', 'lastName')
                                    .deepPopulate('questions')
                                    .exec(function (err, arenasUser) {
                                        if (err) {

                                            throw err;
                                        }
                                        if(connectedUserList[req.userId]!=null) {
                                            connectedUserList[req.userId].emit('loadArenas', {
                                                obj: arenas,
                                                objUser: arenasUser
                                            });

                                        }
                                    });
                            });
                    });
            }
        });







    });

};