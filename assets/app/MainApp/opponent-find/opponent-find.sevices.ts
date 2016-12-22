import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {User} from "../../auth/user";
import {GameListServices} from "../game-list/game-list.services";
import {ArenaUsers} from "../models/arenaUsers";
import {ArenaPlayers} from "../models/arenaPlayers";
import myGlobals=require('../../globals/globals');

@Injectable()
export class OpponentFindService{
    constructor(private http:Http,private gameListSevices:GameListServices){}



    findUser(userName:User) {
        const body = JSON.stringify(userName);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'user/find', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>Observable.throw(error.json()));
    }


    createArena(arenaPlayer:ArenaPlayers){
        const body = JSON.stringify(arenaPlayer);
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'arena'+token, body, {headers: headers})
            .map((response: Response) => {
                const arenaUsers = new ArenaUsers(response.json().obj._id,
                    response.json().obj.user._id,
                    response.json().obj.invite._id,
                    response.json().obj.status_accept,
                    response.json().obj.invite.lastName,
                    response.json().obj.user_played,
                    response.json().obj.invite_played,
                    response.json().obj.questions);
                this.gameListSevices.arenas.push(arenaUsers);
                return arenaUsers;
            })
            .catch((error: Response) =>Observable.throw(error.json()));

    }

}