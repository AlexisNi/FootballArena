import {Injectable} from "@angular/core";
import {Question} from "../questionModels/question";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {QuestionPlayed} from "../questionModels/questionPlayed";
import {StatusPlayed} from "../questionModels/statusPlayedArena";
import {myGlobals}  from "../../globals/globals";
import {ErrorService} from "../../errors/error.service";
@Injectable()
export class ArenaServices{
    constructor(private http:Http,private errorService:ErrorService){}


    statusPlayed(arenaInfo:StatusPlayed){
        const body = JSON.stringify(arenaInfo);
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'arena/playedStatus'+token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>{
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
}
