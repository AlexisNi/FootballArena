import {Injectable} from "@angular/core";
import {Question} from "../questionModels/question";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {QuestionPlayed} from "../questionModels/questionPlayed";
import {myGlobals}  from "../../globals/globals";

/**
 * Created by alex on 06/12/2016.
 */
@Injectable()
export class QuestionServices{
    private arenaQuestions:Question[]=[];
    constructor(private http:Http){}



    getArenaQuestions(id:String){
        return this.http.get(myGlobals.host+'question/arenaQuestions'+'?id='+id).
        map((response:Response)=>{
            const questions=response.json().obj;
            let transformedQuestions:Question[]=[];
            for (let question of questions){
                transformedQuestions.push(new Question(
                    question.question,
                    question.optiona,
                    question.optionb,
                    question.optionc,
                    question.optiond,
                    question.answer,
                    question._id
                ));
            }
            console.log('edw transffromed');
            console.log(transformedQuestions);
            this.arenaQuestions=transformedQuestions;
            return transformedQuestions;

        })
            .catch((error: Response) =>Observable.throw(error.json()));



    }

    questionPlayed(questionPlayed:QuestionPlayed){
        const body = JSON.stringify(questionPlayed);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(myGlobals.host+'question/questionPlayed', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>Observable.throw(error.json()));
    }


}