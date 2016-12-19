import * as io from "socket.io-client";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GameListServices } from "../game-list/game-list.services";
import { ArenaUsers } from "../models/arenaUsers";
export var SocketService = (function () {
    function SocketService(gameListServices) {
        this.gameListServices = gameListServices;
        this.Lh = 'http://localhost:3000/';
        this.Heroku = 'https://footballarenaquiz.herokuapp.com/';
    }
    SocketService.prototype.sendUserId = function (userId) {
        this.socket = io(this.Lh + 'game', { query: { userId: userId } });
        this.socket.emit('get-userId', userId);
    };
    SocketService.prototype.enterArena = function (arenaId, userId) {
        this.socket.emit('enterArena', { arenaId: arenaId, userId: userId });
    };
    SocketService.prototype.arenaLeave = function (userId) {
        this.socket.emit('leaveArena');
        this.reqArenas(userId);
    };
    SocketService.prototype.reqArenas = function (userId) {
        this.socket.emit('getArenas', { userId: userId });
    };
    SocketService.prototype.getArenas = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('loadArenas', function (data) {
                var arenas = data.obj;
                var transformedArenas = [];
                for (var _i = 0, arenas_1 = arenas; _i < arenas_1.length; _i++) {
                    var arena = arenas_1[_i];
                    transformedArenas.push(new ArenaUsers(arena._id, arena.user, arena.invite._id, arena.status_accept, arena.user.lastName || arena.invite.lastName, arena.user_played, arena.invite_played));
                }
                var UserArenas = data.objUser;
                for (var _a = 0, UserArenas_1 = UserArenas; _a < UserArenas_1.length; _a++) {
                    var userArena = UserArenas_1[_a];
                    transformedArenas.push(new ArenaUsers(userArena._id, userArena.user._id, userArena.invite, userArena.status_accept, userArena.user.lastName, userArena.user_played, userArena.invite_played));
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
