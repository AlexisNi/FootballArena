import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {ArenaUserId} from "../models/arenaUserId";
import {Observable, Subject} from "rxjs";
import 'rxjs/add/operator/map';
import {ArenaUsers} from "../models/arenaUsers";
import {PlayerResult} from "./models/playerResults";
import {myGlobals}  from "../../globals/globals";
import {ErrorService} from "../../errors/error.service";


/**
 * Created by alex on 06/12/2016.
 */

@Injectable()
export class GameListServices{
    constructor(private http:Http,private errorService:ErrorService){}
    public arenas:ArenaUsers[]=[];
    private ArenaPlaying =new Subject<ArenaUsers>();
    ArenaChosen=this.ArenaPlaying.asObservable();
    private UserPlaying=new Subject<Boolean>();
    userPlayingChosen$=this.UserPlaying.asObservable();

    getArenaUsers(arenasUsers:ArenaUsers){
        this.ArenaPlaying.next(arenasUsers);
    }
    setUserPlaying(isPlaying){
        this.UserPlaying.next(isPlaying);
    }




    getResult(arenaUserInfo:ArenaUserId){
        const body = JSON.stringify(arenaUserInfo);
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'questionANS/getResults'+token, body, {headers: headers})
            .map((response: Response) =>{
                const winner=response.json().winner;
                const loser=response.json().loser;
                const Awards=response.json().awards;
                var WinnerResult=new PlayerResult(
                    winner._id,
                    winner.lastName,
                    loser._id,
                    loser.lastName,
                    Awards.awards.winner,
                    Awards.awards.loser,
                    Awards.awards.draw,
                    response.json().draw

                );
                return WinnerResult;
            })
            .catch((error: Response) =>{
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    getArenas(){
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        return this.http.get(myGlobals.host+'arena/arenas'+token)
            .map((response: Response) => {
                const arenas = response.json().obj;
                let transformedArenas: ArenaUsers[] = [];
                for (let arena of arenas) {
                    transformedArenas.push(new ArenaUsers(
                        arena._id,
                        arena.user ,
                        arena.invite._id,
                        arena.status_accept,
                        arena.user.lastName || arena.invite.lastName,
                        arena.user_played,
                        arena.invite_played
                    ));
                }
                const UserArenas=response.json().objUser;
                for (let userArena of UserArenas){
                    transformedArenas.push(new ArenaUsers(
                        userArena._id,
                        userArena.user._id ,
                        userArena.invite,
                        userArena.status_accept,
                        userArena.user.lastName,
                        userArena.user_played,
                        userArena.invite_played

                    ));
                }
                this.arenas=transformedArenas;
                return transformedArenas ;
            })
            .catch((error: Response) =>{
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });

    }


    getAward(userId:string,arenaId:string){
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        var userInfo={userId:userId,arenaId:arenaId};
            const body=JSON.stringify(userInfo);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post(myGlobals.host+'getAwards'+token,body, {headers: headers})
                .map((response: Response) => response.json())
                .catch((error: Response) =>{
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json())
                });
        }

    initAnswers(id:string,answer:boolean,arenaId:string,userId:string){
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const init={arenaId:arenaId,userId:userId,question:{answer:answer}}
        const body = JSON.stringify(init);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'questionANS'+token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>{
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }





}