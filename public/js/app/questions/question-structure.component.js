import { Component, Input } from '@angular/core';
import { ArenaQuestion } from "./questionModels/arena_question";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { AnsweredQuestion } from "./questionModels/answered-questions";
import { QuestionPlayed } from "./questionModels/questionPlayed";
import { StatusPlayed } from "./questionModels/statusPlayedArena";
import { SocketService } from "../MainApp/socketHanding/socket.service";
import { ArenaServices } from "./questionServices/arena.service";
import { QuestionServices } from "./questionServices/question.service";
import { QuestionAnswerServices } from "./questionServices/questionAnswer.service";
export var QuestionStructure = (function () {
    /* @ViewChild('myModal')
     modal: ModalComponent;
 
     open() {
         this.modal.open();
     }
     close(){
         this.isLost=false;
         this.modal.close();
         this.router.navigate(['/mainApp']);
     }
 */
    function QuestionStructure(route, userService, socketService, arenaService, questionServices, questionAnswerService, router) {
        this.route = route;
        this.userService = userService;
        this.socketService = socketService;
        this.arenaService = arenaService;
        this.questionServices = questionServices;
        this.questionAnswerService = questionAnswerService;
        this.router = router;
        this.index = 0;
        this.arenaQuestions = [];
    }
    QuestionStructure.prototype.ngOnDestroy = function () {
        console.log('On destroy');
        this.socketService.arenaLeave(this.inviteId);
    };
    QuestionStructure.prototype.ngOnInit = function () {
        console.log('onInit');
        this.getArenaId();
        this.getUser();
        this.getUserId();
        this.socketService.enterArena(this.arenaId, this.userId);
        this.statusPlayed();
        this.getArenaQuestions();
        /*
                this.getQuestionsANS();
        */
    };
    QuestionStructure.prototype.getArenaQuestions = function () {
        var _this = this;
        return this.questionServices.getArenaQuestions(this.arenaId)
            .subscribe(function (arenaQuestions) {
            _this.arenaQuestions = arenaQuestions;
        });
    };
    QuestionStructure.prototype.getCorrectQuestions = function () {
        var playedArena = new StatusPlayed(this.arenaId, this.userId);
        return this.questionAnswerService.getCorrectQuestions(playedArena)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    QuestionStructure.prototype.nextQuestion = function () {
        this.index++;
    };
    QuestionStructure.prototype.onChooseQuestion = function (activeQuestion, answerChoice) {
        if (activeQuestion.answer === answerChoice) {
            var questionAnswer = new AnsweredQuestion(activeQuestion.questionId, true);
            console.log(questionAnswer);
            var questionAns = new ArenaQuestion(this.arenaId, this.userId, questionAnswer);
            this.questionAnswerService.saveAnswerdQuestion(questionAns)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            var questionPlayed = new QuestionPlayed(this.arenaId, activeQuestion.questionId);
            /*    this.questionServices.questionPlayed(questionPlayed)
                    .subscribe(
                        data=>console.log(data),
                        error=>console.log(error));*/
            this.nextQuestion();
        }
        else {
            var questionPlayed = new QuestionPlayed(this.arenaId, activeQuestion.questionId);
            /*  this.questionServices.questionPlayed(questionPlayed)
                  .subscribe(
                      data=>console.log(data),
                      error=>console.log(error));
              this.getCorrectQuestions();*/
            this.isLost = true;
        }
    };
    QuestionStructure.prototype.getArenaId = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.arenaId = params['id'];
                _this.inviteId = params['UserId'];
                console.log(_this.inviteId);
            }
        });
    };
    QuestionStructure.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.userName = user;
            console.log(user);
        });
    };
    QuestionStructure.prototype.getUserId = function () {
        this.userId = this.userService.getUserId();
        console.log(this.userId);
    };
    QuestionStructure.prototype.statusPlayed = function () {
        var arenaInfo = new StatusPlayed(this.arenaId, this.userId);
        this.arenaService.statusPlayed(arenaInfo)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    QuestionStructure.decorators = [
        { type: Component, args: [{
                    selector: 'my-questionScore',
                    templateUrl: './question-structure.component.html'
                },] },
    ];
    /** @nocollapse */
    QuestionStructure.ctorParameters = [
        { type: ActivatedRoute, },
        { type: AuthService, },
        { type: SocketService, },
        { type: ArenaServices, },
        { type: QuestionServices, },
        { type: QuestionAnswerServices, },
        { type: Router, },
    ];
    QuestionStructure.propDecorators = {
        'index': [{ type: Input },],
    };
    return QuestionStructure;
}());
