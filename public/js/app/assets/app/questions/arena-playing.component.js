import { Component, Input, ViewChild, Renderer } from '@angular/core';
import { GameListServices } from "../MainApp/game-list/game-list.services";
import { AnsweredQuestion } from "./questionModels/answered-questions";
import { QuestionAnswerServices } from "./questionServices/questionAnswer.service";
import { AuthService } from "../auth/auth.service";
import { ArenaQuestion } from "./questionModels/arena_question";
import { StatusPlayed } from "./questionModels/statusPlayedArena";
import { ArenaServices } from "./questionServices/arena.service";
import { SocketService } from "../MainApp/socketHanding/socket.service";
import { Observable } from "rxjs";
export var ArenaPlayingComponent = (function () {
    function ArenaPlayingComponent(questionAnswerService, userService, arenaService, socketService, gameListService, rd) {
        this.questionAnswerService = questionAnswerService;
        this.userService = userService;
        this.arenaService = arenaService;
        this.socketService = socketService;
        this.gameListService = gameListService;
        this.rd = rd;
        this.arenaQuestions = [];
        this.index = 0;
        this.ticks = 30;
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
        this.timer();
        this.getUserId();
        this.getUser();
        this.getInviteId();
        this.getArenaQuestions();
        this.socketService.enterArena(this.arenaId, this.userId, this.inviteId);
        this.statusPlayed();
    };
    ArenaPlayingComponent.prototype.colourInit = function () {
        this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'green');
        this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'green');
        this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'green');
        this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'green');
    };
    ArenaPlayingComponent.prototype.ngAfterViewInit = function () {
        this.colourInit();
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
        this.ticks = 30;
        this.index++;
        this.enableButtons();
        this.colourInit();
    };
    ArenaPlayingComponent.prototype.waitForNextQuestion = function () {
        this.ticks = 7000;
        this.disableButtons();
    };
    ArenaPlayingComponent.prototype.onChooseQuestion = function (activeQuestion, answerChoice, buttonNumber) {
        var _this = this;
        if (activeQuestion.answer === answerChoice) {
            var questionAnswer = new AnsweredQuestion(activeQuestion.questionId, true);
            var questionAns = new ArenaQuestion(this.arenaId, this.userId, questionAnswer);
            this.questionAnswerService.saveAnswerdQuestion(questionAns)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.checkButtons(buttonNumber, true, activeQuestion);
            this.waitForNextQuestion();
            setTimeout(function () {
                console.log('TimeOut');
                _this.nextQuestion();
            }, 2000);
        }
        else {
            this.checkButtons(buttonNumber, false, activeQuestion);
            this.waitForNextQuestion();
            setTimeout(function () {
                _this.isLost = true;
                _this.open();
            }, 2000);
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
    };
    ArenaPlayingComponent.prototype.timer = function () {
        var _this = this;
        var timer = Observable.timer(100, 1000).take(31);
        timer.subscribe(function (t) {
            _this.ticks = _this.ticks - 1;
            if (_this.ticks == 0) {
                _this.playerLost();
            }
        });
    };
    ArenaPlayingComponent.prototype.playerLost = function () {
        this.isLost = true;
        this.open();
    };
    ArenaPlayingComponent.prototype.enableButtons = function () {
        this.rd.setElementAttribute(this.el.nativeElement, 'disabled', 'false');
        this.rd.setElementAttribute(this.el1.nativeElement, 'disabled', 'false');
        this.rd.setElementAttribute(this.el2.nativeElement, 'disabled', 'false');
        this.rd.setElementAttribute(this.el3.nativeElement, 'disabled', 'false');
    };
    ArenaPlayingComponent.prototype.disableButtons = function () {
        this.rd.setElementAttribute(this.el.nativeElement, 'disabled', 'true');
        this.rd.setElementAttribute(this.el1.nativeElement, 'disabled', 'true');
        this.rd.setElementAttribute(this.el2.nativeElement, 'disabled', 'true');
        this.rd.setElementAttribute(this.el3.nativeElement, 'disabled', 'true');
    };
    ArenaPlayingComponent.prototype.checkButtons = function (buttonNumber, right, activeQuestion) {
        if (buttonNumber == 1 && right == true) {
            this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'blue');
        }
        if (buttonNumber == 2 && right == true) {
            this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'blue');
        }
        if (buttonNumber == 3 && right == true) {
            this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'blue');
        }
        if (buttonNumber == 4 && right == true) {
            this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'blue');
        }
        if (buttonNumber == 1 && right == false) {
            this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'red');
            if (activeQuestion.answer === activeQuestion.optionb) {
                this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optionc) {
                this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optiond) {
                this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'blue');
            }
        }
        if (buttonNumber == 2 && right == false) {
            this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'red');
            console.log(activeQuestion);
            if (activeQuestion.answer == activeQuestion.optiona) {
                this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optionc) {
                this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optiond) {
                this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'blue');
            }
        }
        if (buttonNumber == 3 && right == false) {
            this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'red');
            if (activeQuestion.answer === activeQuestion.optionb) {
                this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optionc) {
                this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optiond) {
                this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'blue');
            }
        }
        if (buttonNumber == 4 && right == false) {
            this.rd.setElementStyle(this.el3.nativeElement, 'background-color', 'red');
            if (activeQuestion.answer === activeQuestion.optionb) {
                this.rd.setElementStyle(this.el.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optionc) {
                this.rd.setElementStyle(this.el1.nativeElement, 'background-color', 'blue');
            }
            if (activeQuestion.answer === activeQuestion.optiond) {
                this.rd.setElementStyle(this.el2.nativeElement, 'background-color', 'blue');
            }
        }
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
        { type: Renderer, },
    ];
    ArenaPlayingComponent.propDecorators = {
        'arenas': [{ type: Input },],
        'modal': [{ type: ViewChild, args: ['myModal',] },],
        'el': [{ type: ViewChild, args: ['button1',] },],
        'el1': [{ type: ViewChild, args: ['button2',] },],
        'el2': [{ type: ViewChild, args: ['button3',] },],
        'el3': [{ type: ViewChild, args: ['button4',] },],
    };
    return ArenaPlayingComponent;
}());
