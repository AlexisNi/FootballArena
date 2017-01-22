/**
 * Created by alex on 22/01/2017.
 */
var User=require('../models/user');
var jwt=require('jsonwebtoken');
var decoded;
var TokenIsSet;


module.exports=function (io) {
    io.use(function (socket,next) {
        console.log(socket);
        try{
            decoded = jwt.verify(socket.handshake.query.token, 'secret');
        }
        catch (e){
            console.log(e);

        }
        if (TokenIsSet){
            User.findByToken(TokenIsSet).then(function (user) {
                if (!user){
                    return Promise.reject();
                }
                console.log('use authenticated');
                TokenIsSet=socket.handshake.query.token;
                next();
                socket.emit()
            }).catch(function (e) {
                console.log('Error not authenticated')

            });
        }
        User.findByToken(socket.handshake.query.token).then(function (user) {
            if (!user){
                return Promise.reject();



            }
            console.log('use authenticated');
            TokenIsSet=socket.handshake.query.token;
            next();
        }).catch(function (e) {
            socket.emit('getError',{obj:{status:'401',message:'You are not logged in',title:'Authentication error'}});



        });

    });

}