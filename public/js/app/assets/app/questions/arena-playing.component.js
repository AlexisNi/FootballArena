import { Component, Input, ViewChild } from '@angular/core';
import { GameListServices } from "../MainApp/game-list/game-list.services";
import { AnsweredQuestion } from "./questionModels/answered-questions";
import { QuestionAnswerServices } from "./questionServices/questionAnswer.service";
import { AuthService } from "../auth/auth.service";
import { ArenaQuestion } from "./questionModels/arena_question";
import { StatusPlayed } from "./questionModels/statusPlayedArena";
import { ArenaServices } from "./questionServices/arena.service";
import { SocketService } from "../MainApp/socketHanding/socket.service";
export var ArenaPlayingComponent = (function () {
    function ArenaPlayingComponent(questionAnswerService, userService, arenaService, socketService, gameListService) {
        this.questionAnswerService = questionAnswerService;
        this.userService = userService;
        this.arenaService = arenaService;
        this.socketService = socketService;
        this.gameListService = gameListService;
        this.arenaQuestions = [];
        this.index = 0;
    }
    ArenaPlayingComponent.prototype.open = function () {
        this.modal.open();
    };
    ArenaPlayingComponent.prototype.close = function () {
        this.isLost = false;
        this.modal.close();
        this.gameListService.setUserPlaying(false);
    };
    ArenaPlayingComponent.prototype.ngOnInit = function () {
        this.arenaId = this.arenas.arenaId;
        this.getUserId();
        this.getUser();
        this.getInviteId();
        this.getArenaQuestions();
        this.socketService.enterArena(this.arenaId, this.userId, this.inviteId);
        this.statusPlayed();
    };
    ArenaPlayingComponent.prototype.getInviteId = function () {
        if (this.arenas.userId == this.userId) {
            this.inviteId = this.arenas.inviteId;
        }
        else {
            this.inviteId = this.arenas.userId;
        }
        console.log(this.inviteId);
    };
    ArenaPlayingComponent.prototype.ngOnDestroy = function () {
        console.log('on Destroy all arenas');
        this.socketService.arenaLeave(this.inviteId);
    };
    ArenaPlayingComponent.prototype.nextQuestion = function () {
        this.index++;
    };
    ArenaPlayingComponent.prototype.onChooseQuestion = function (activeQuestion, answerChoice) {
        console.log(activeQuestion);
        console.log(answerChoice);
        if (activeQuestion.answer === answerChoice) {
            var questionAnswer = new AnsweredQuestion(activeQuestion.questionId, true);
            console.log(questionAnswer);
            var questionAns = new ArenaQuestion(this.arenaId, this.userId, questionAnswer);
            this.questionAnswerService.saveAnswerdQuestion(questionAns)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.nextQuestion();
        }
        else {
            this.isLost = true;
            this.open();
        }
    };
    ArenaPlayingComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.userName = user;
            console.log(user);
        });
    };
    ArenaPlayingComponent.prototype.getUserId = function () {
        this.userId = this.userService.getUserId();
    };
    ArenaPlayingComponent.prototype.statusPlayed = function () {
        var arenaInfo = new StatusPlayed(this.arenaId, this.userId);
        this.arenaService.statusPlayed(arenaInfo)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    ArenaPlayingComponent.prototype.getArenaQuestions = function () {
        this.arenaQuestions = this.arenas.questions;
        console.log(this.arenaQuestions);
    };
    ArenaPlayingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'arena-playing',
                    templateUrl: './arena-playing.component.html'
                },] },
    ];
    /** @nocollapse */
    ArenaPlayingComponent.ctorParameters = [
        { type: QuestionAnswerServices, },
        { type: AuthService, },
        { type: ArenaServices, },
        { type: SocketService, },
        { type: GameListServices, },
    ];
    ArenaPlayingComponent.propDecorators = {
        'arenas': [{ type: Input },],
        'modal': [{ type: ViewChild, args: ['myModal',] },],
    };
    return ArenaPlayingComponent;
}());
