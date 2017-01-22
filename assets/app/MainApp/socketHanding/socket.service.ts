import * as io from  "socket.io-client";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GameListServices} from "../game-list/game-list.services";
import {ArenaUsers} from "../models/arenaUsers";
import {myGlobals}  from "../../globals/globals";
import {Stats} from "../game-list/models/stats";
import {Question} from "../../questions/questionModels/question";
import {ErrorService} from "../../errors/error.service";
import {Error} from "../../errors/error.model";

@Injectable()

export class SocketService{

    private socket:any;
    constructor(private gameListServices:GameListServices,private errorService:ErrorService){}

    sendUserId(userId:string)
    {
        const token=localStorage.getItem('token');
        this.socket=io(myGlobals.host/*+'game'*/,{query:{userId:userId,token:token}});
        this.socket.emit('get-userId',userId);

    }

    onError(){
        let obsevable=new Observable((observer:any)=>{
            this.socket.on('getError',(data:any)=>{
                const error=data.obj;
                let  errors:Error;
                errors=new Error(error.title,error.message);
                observer.next(errors);
            });
            return()=>{
                this.socket.disconnect();
            }
        })
        return obsevable;

    }



    enterArena(arenaId:string,userId:string,inviteId:string){
        this.socket.emit('enterArena',{arenaId:arenaId,userId:userId,inviteId:inviteId});
    }

  arenaLeave(userId){
        this.socket.emit('leaveArena');
        this.reqArenas(userId);
    }



    reqArenas(userId){
        const token=localStorage.getItem('token');
        this.socket.emit('getArenas',{userId:userId});
    }

    reqStats(userId){
        this.socket.emit('getStats',{userId:userId});
    }

    getStats(){
        this.socket.removeAllListeners('loadStats');
        let obsevable=new Observable((observer:any)=>{
            this.socket.on('loadStats',(data:any)=>{
                const stats=data.obj;
                let  transFormedStats:Stats;
                transFormedStats=new Stats(stats.level,stats.currentExp,stats.wins,stats.loses);
                observer.next(transFormedStats);
            });
            return()=>{
                this.socket.disconnect();
            }
        })
        return obsevable;

    }

    getArenas(){
        this.socket.removeAllListeners('loadArenas');
        let observable=new Observable((observer:any)=>{
            this.socket.on('loadArenas',(data:any)=>{
                const arenas=data.obj;

                let transformedArenas: ArenaUsers[] = [];
                for (let arena of arenas) {
                    let transformedQuestions:Question[]=[];
                    for(let finalQuestion of arena.questions){
                        transformedQuestions.push(new Question(
                            finalQuestion.question,
                            finalQuestion.optiona,
                            finalQuestion.optionb,
                            finalQuestion.optionc,
                            finalQuestion.optiond,
                            finalQuestion.answer,
                            finalQuestion._id
                        ));
                    }
                    transformedArenas.push(new ArenaUsers(
                        arena._id,
                        arena.user ,
                        arena.invite._id,
                        arena.status_accept,
                        arena.user.lastName || arena.invite.lastName,
                        arena.user_played,
                        arena.invite_played,
                        transformedQuestions
                    ));
                }
                const UserArenas=data.objUser;
                for (let userArena of UserArenas){
                    let transformedQuestions:Question[]=[];
                    for(let finalQuestion of userArena.questions){
                        transformedQuestions.push(new Question(
                            finalQuestion.question,
                            finalQuestion.optiona,
                            finalQuestion.optionb,
                            finalQuestion.optionc,
                            finalQuestion.optiond,
                            finalQuestion.answer,
                            finalQuestion._id
                        ));
                    }
                    transformedArenas.push(new ArenaUsers(
                        userArena._id,
                        userArena.user._id ,
                        userArena.invite,
                        userArena.status_accept,
                        userArena.user.lastName,
                        userArena.user_played,
                        userArena.invite_played,
                        transformedQuestions


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