import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {User} from "../../auth/user";
import {GameListServices} from "../game-list/game-list.services";
import {ArenaUsers} from "../models/arenaUsers";
import {ArenaPlayers} from "../models/arenaPlayers";
@Injectable()
export class OpponentFindService{
    constructor(private http:Http,private gameListSevices:GameListServices){}
    private arenas:ArenaUsers[]=[];
    public Lh='http://localhost:3000/';
    public Heroku='https://footballarenaquiz.herokuapp.com/';


    findUser(userName:User) {
        const body = JSON.stringify(userName);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.Heroku+'user/find', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>Observable.throw(error.json()));
    }


    createArena(arenaPlayer:ArenaPlayers){
        const body = JSON.stringify(arenaPlayer);
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.Heroku+'arena'+token, body, {headers: headers})
            .map((response: Response) => {
                const arenaUsers = new ArenaUsers(response.json().obj._id,
                    response.json().obj.user._id,
                    response.json().obj.invite._id,
                    response.json().obj.status_accept,
                    response.json().obj.invite.lastName,
                    response.json().obj.user_played,
                    response.json().obj.invite_played);
                this.gameListSevices.arenas.push(arenaUsers);
                return arenaUsers;
            })
            .catch((error: Response) =>Observable.throw(error.json()));

    }

}