import * as io from  "socket.io-client";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GameListServices} from "../game-list/game-list.services";
import {ArenaUsers} from "../models/arenaUsers";
import {myGlobals}  from "../../globals/globals";

@Injectable()

export class SocketService{

    private socket:any;
    constructor(private gameListServices:GameListServices){}

    sendUserId(userId:string)
    {
        this.socket=io(myGlobals.host+'game',{query:{userId:userId}});
        this.socket.emit('get-userId',userId);

    }

    enterArena(arenaId:string,userId:string,inviteId:string){
        this.socket.emit('enterArena',{arenaId:arenaId,userId:userId,inviteId:inviteId});
    }

  arenaLeave(userId){
        this.socket.emit('leaveArena');
        this.reqArenas(userId);
    }



    reqArenas(userId){
        this.socket.emit('getArenas',{userId:userId});
    }
    getArenas(){
        this.socket.removeAllListeners('loadArenas');
        let observable=new Observable((observer:any)=>{
            this.socket.on('loadArenas',(data:any)=>{
                const arenas=data.obj;
                let transformedArenas: ArenaUsers[] = [];
                for (let arena of arenas) {
                    transformedArenas.push(new ArenaUsers(
                        arena._id,
                        arena.user ,
                        arena.invite._id,
                        arena.status_accept,
                        arena.user.lastName || arena.invite.lastName,
                        arena.user_played,
                        arena.invite_played,
                        arena.questions
                    ));
                }
                const UserArenas=data.objUser;
                for (let userArena of UserArenas){
                    transformedArenas.push(new ArenaUsers(
                        userArena._id,
                        userArena.user._id ,
                        userArena.invite,
                        userArena.status_accept,
                        userArena.user.lastName,
                        userArena.user_played,
                        userArena.invite_played,
                        userArena.questions


                    ));
                }
                this.gameListServices.arenas=transformedArenas;






                observer.next(transformedArenas);
            });
            return()=>{
                this.socket.disconnect();
            }
        })
        return observable;
    }

}