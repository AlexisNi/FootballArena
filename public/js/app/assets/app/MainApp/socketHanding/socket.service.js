import * as io from "socket.io-client";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GameListServices } from "../game-list/game-list.services";
import { ArenaUsers } from "../models/arenaUsers";
import { myGlobals } from "../../globals/globals";
import { Stats } from "../game-list/models/stats";
import { Question } from "../../questions/questionModels/question";
export var SocketService = (function () {
    function SocketService(gameListServices) {
        this.gameListServices = gameListServices;
    }
    SocketService.prototype.sendUserId = function (userId) {
        this.socket = io(myGlobals.host + 'game', { query: { userId: userId } });
        this.socket.emit('get-userId', userId);
    };
    SocketService.prototype.enterArena = function (arenaId, userId, inviteId) {
        this.socket.emit('enterArena', { arenaId: arenaId, userId: userId, inviteId: inviteId });
    };
    SocketService.prototype.arenaLeave = function (userId) {
        this.socket.emit('leaveArena');
        this.reqArenas(userId);
    };
    SocketService.prototype.reqArenas = function (userId) {
        this.socket.emit('getArenas', { userId: userId });
    };
    SocketService.prototype.reqStats = function (userId) {
        this.socket.emit('getStats', { userId: userId });
    };
    SocketService.prototype.getStats = function () {
        var _this = this;
        this.socket.removeAllListeners('loadStats');
        var obsevable = new Observable(function (observer) {
            _this.socket.on('loadStats', function (data) {
                var stats = data.obj;
                var transFormedStats;
                transFormedStats = new Stats(stats.level, stats.currentExp, stats.wins, stats.loses);
                observer.next(transFormedStats);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return obsevable;
    };
    SocketService.prototype.getArenas = function () {
        var _this = this;
        this.socket.removeAllListeners('loadArenas');
        var observable = new Observable(function (observer) {
            _this.socket.on('loadArenas', function (data) {
                var arenas = data.obj;
                var transformedArenas = [];
                for (var _i = 0, arenas_1 = arenas; _i < arenas_1.length; _i++) {
                    var arena = arenas_1[_i];
                    var transformedQuestions = [];
                    for (var _a = 0, _b = arena.questions; _a < _b.length; _a++) {
                        var finalQuestion = _b[_a];
                        transformedQuestions.push(new Question(finalQuestion.question, finalQuestion.optiona, finalQuestion.optionb, finalQuestion.optionc, finalQuestion.optiond, finalQuestion.answer, finalQuestion._id));
                    }
                    transformedArenas.push(new ArenaUsers(arena._id, arena.user, arena.invite._id, arena.status_accept, arena.user.lastName || arena.invite.lastName, arena.user_played, arena.invite_played, transformedQuestions));
                }
                var UserArenas = data.objUser;
                for (var _c = 0, UserArenas_1 = UserArenas; _c < UserArenas_1.length; _c++) {
                    var userArena = UserArenas_1[_c];
                    var transformedQuestions = [];
                    for (var _d = 0, _e = userArena.questions; _d < _e.length; _d++) {
                        var finalQuestion = _e[_d];
                        transformedQuestions.push(new Question(finalQuestion.question, finalQuestion.optiona, finalQuestion.optionb, finalQuestion.optionc, finalQuestion.optiond, finalQuestion.answer, finalQuestion._id));
                    }
                    transformedArenas.push(new ArenaUsers(userArena._id, userArena.user._id, userArena.invite, userArena.status_accept, userArena.user.lastName, userArena.user_played, userArena.invite_played, transformedQuestions));
                }
                _this.gameListServices.arenas = transformedArenas;
                observer.next(transformedArenas);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SocketService.ctorParameters = [
        { type: GameListServices, },
    ];
    return SocketService;
}());
