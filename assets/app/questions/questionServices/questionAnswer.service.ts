import {Injectable} from "@angular/core";
import {Question} from "../questionModels/question";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {QuestionPlayed} from "../questionModels/questionPlayed";
import {StatusPlayed} from "../questionModels/statusPlayedArena";
import {ArenaQuestion} from "../questionModels/arena_question";
import {AnsweredQuestion} from "../questionModels/answered-questions";
import {myGlobals}  from "../../globals/globals";
import {ErrorService} from "../../errors/error.service";

@Injectable()
export class QuestionAnswerServices{
    constructor(private http:Http,private errorService:ErrorService){}
    private arenaQuestionAnswer:AnsweredQuestion[]=[];
    public Heroku='https://footballarenaquiz.herokuapp.com/';


    saveAnswerdQuestion(answer:ArenaQuestion){
        const body = JSON.stringify(answer);
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'questionANS'+token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>{
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    getCorrectQuestions(playerArena:StatusPlayed){
        var userId=playerArena.userId;
        var arenaId=playerArena.arenaId;
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        return this.http.get(myGlobals.host+'questionANS/correct'+token+'?userId='+userId+'&'+'arenaId='+arenaId)
            . map((response:Response)=>{
                const questionsAnswered=response.json().obj;
                let transformedQuestionsAnswered:AnsweredQuestion[]=[];
                for (let answeredQuestion of questionsAnswered){
                    transformedQuestionsAnswered.push(new AnsweredQuestion(
                        answeredQuestion._id,
                        answeredQuestion.answer
                    ));
                }
                this.arenaQuestionAnswer=transformedQuestionsAnswered;
                return transformedQuestionsAnswered;

            });


    }


}
