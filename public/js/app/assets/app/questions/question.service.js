import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Question } from "./questionModels/question";
import { AnsweredQuestion } from "./questionModels/answered-questions";
export var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.arenaQuestionAnswer = [];
        this.arenaQuestions = [];
    }
    QuestionService.prototype.getArenaQuestions = function (id) {
        var _this = this;
        return this.http.get('http://localhost:3000/question/arenaQuestions' + '?id=' + id).
            map(function (response) {
            var questions = response.json().obj;
            var transformedQuestions = [];
            for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
                var question = questions_1[_i];
                transformedQuestions.push(new Question(question.question, question.optiona, question.optionb, question.optionc, question.optiond, question.answer, question._id));
            }
            _this.arenaQuestions = transformedQuestions;
            return transformedQuestions;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionService.prototype.saveAnswerdQuestion = function (answer) {
        var body = JSON.stringify(answer);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/questionANS', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionService.prototype.questionPlayed = function (questionPlayed) {
        var body = JSON.stringify(questionPlayed);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/question/questionPlayed', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionService.prototype.statusPlayed = function (arenaInfo) {
        var body = JSON.stringify(arenaInfo);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/arena/playedStatus', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    QuestionService.prototype.getCorrectQuestions = function (playerArena) {
        var _this = this;
        var userId = playerArena.userId;
        var arenaId = playerArena.arenaId;
        return this.http.get('http://localhost:3000/questionANS/correct' + '?userId=' + userId + '&' + 'arenaId=' + arenaId)
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
    QuestionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuestionService.ctorParameters = [
        { type: Http, },
    ];
    return QuestionService;
}());
