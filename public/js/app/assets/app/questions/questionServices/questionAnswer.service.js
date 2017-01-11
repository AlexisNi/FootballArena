import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { AnsweredQuestion } from "../questionModels/answered-questions";
import { myGlobals } from "../../globals/globals";
export var QuestionAnswerServices = (function () {
    function QuestionAnswerServices(http) {
        this.http = http;
        this.arenaQuestionAnswer = [];
        this.Heroku = 'https://footballarenaquiz.herokuapp.com/';
    }
    QuestionAnswerServices.prototype.saveAnswerdQuestion = function (answer) {
        var body = JSON.stringify(answer);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'questionANS', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionAnswerServices.prototype.getCorrectQuestions = function (playerArena) {
        var _this = this;
        var userId = playerArena.userId;
        var arenaId = playerArena.arenaId;
        return this.http.get(myGlobals.host + 'questionANS/correct' + '?userId=' + userId + '&' + 'arenaId=' + arenaId)
            .map(function (response) {
            var questionsAnswered = response.json().obj;
            var transformedQuestionsAnswered = [];
            for (var _i = 0, questionsAnswered_1 = questionsAnswered; _i < questionsAnswered_1.length; _i++) {
                var answeredQuestion = questionsAnswered_1[_i];
                transformedQuestionsAnswered.push(new AnsweredQuestion(answeredQuestion._id, answeredQuestion.answer));
            }
            _this.arenaQuestionAnswer = transformedQuestionsAnswered;
            return transformedQuestionsAnswered;
        });
    };
    QuestionAnswerServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuestionAnswerServices.ctorParameters = [
        { type: Http, },
    ];
    return QuestionAnswerServices;
}());
