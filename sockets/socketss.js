var ArenaUser=require('../models/arena');
var User=require('../models/user');
var io={};
var userInfo=[];
var connectedUserList=[];
var jwt=require('jsonwebtoken');
var decoded;
var notAuthorized=[];
var TokenIsSet;

module.exports = function (io) {
    'use strict';
    require('./socketMiddleware')(io);
    /*var nsp=io.of('/game');*/
    io.on('connection',function (socket) {

        console.log('User connected!');
        connectedUserList[socket.handshake.query.userId]=socket;
        require('./socketUpdateStats')(socket,connectedUserList[socket.handshake.query.userId]);




        socket.on('disconnect',function () {
            console.log('User Disconcted');
            delete connectedUserList[socket.handshake.query.userId];

            var userData=userInfo[socket.id];
            if(typeof userData!=='undefined'){
                socket.leave(userData.arenaId);
                var otherUser=userInfo[socket.id].inviteId;
                console.log('player disconected invite id is :');
                console.log(otherUser);

                require('./updateUserStatus')(userInfo[socket.id].userId,userData.arenaId);

                if (connectedUserList[otherUser]!=null){
                    if(otherUser!=null) {
                        require('./getArenasOnDisconnect')(otherUser,connectedUserList[otherUser]);
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
                require('./getArenas')(req,connectedUserList[req.userId]);

        });

    });

};