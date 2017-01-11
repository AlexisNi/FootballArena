import { Injectable } from "@angular/core";
import { Question } from "../questionModels/question";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { myGlobals } from "../../globals/globals";
/**
 * Created by alex on 06/12/2016.
 */
export var QuestionServices = (function () {
    function QuestionServices(http) {
        this.http = http;
        this.arenaQuestions = [];
    }
    QuestionServices.prototype.getArenaQuestions = function (id) {
        var _this = this;
        return this.http.get(myGlobals.host + 'question/arenaQuestions' + '?id=' + id).
            map(function (response) {
            var questions = response.json().obj;
            var transformedQuestions = [];
            for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
                var question = questions_1[_i];
                transformedQuestions.push(new Question(question.question, question.optiona, question.optionb, question.optionc, question.optiond, question.answer, question._id));
            }
            console.log('edw transffromed');
            console.log(transformedQuestions);
            _this.arenaQuestions = transformedQuestions;
            return transformedQuestions;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionServices.prototype.questionPlayed = function (questionPlayed) {
        var body = JSON.stringify(questionPlayed);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'question/questionPlayed', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuestionServices.ctorParameters = [
        { type: Http, },
    ];
    return QuestionServices;
}());
