import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { GameListServices } from "../game-list/game-list.services";
import { SocketService } from "../socketHanding/socket.service";
import { Question } from "../../questions/questionModels/question";
export var ArenaComponent = (function () {
    function ArenaComponent(userService, gameListSevices, socketServices) {
        this.userService = userService;
        this.gameListSevices = gameListSevices;
        this.socketServices = socketServices;
        this.ticks = 30;
    }
    ArenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arrayTest();
        this.getUser();
        this.getUserId();
        this.loadStats();
        this.isUserPlaying = false;
        this.userPlayingToFalse();
        this.gameListSevices.userPlayingChosen$
            .subscribe(function (isPlaying) {
            _this.isUserPlaying = isPlaying;
            console.log(isPlaying);
        });
        this.gameListSevices.ArenaChosen
            .subscribe(function (isPlaying) {
            _this.arenas = isPlaying;
            console.log(isPlaying);
        });
    };
    ArenaComponent.prototype.userPlayingToFalse = function () {
        this.gameListSevices.setUserPlaying(false);
    };
    ArenaComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.userName = user;
        });
    };
    ArenaComponent.prototype.getUserId = function () {
        this.userId = this.userService.getUserId();
        this.socketServices.reqStats(this.userId);
    };
    ArenaComponent.prototype.loadStats = function () {
        var _this = this;
        this.socketServices.getStats()
            .subscribe(function (stats) {
            _this.stats = stats;
        });
    };
    ArenaComponent.prototype.arrayTest = function () {
        var array = ['1', '2', '3'];
        for (var i = array.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [array[j], array[i - 1]], array[i - 1] = _a[0], array[j] = _a[1];
        }
        console.log(array[1]);
        var question = new Question('Poios irthe?', 'enas', 'dios', 'trios', 'teseros', 'trios', '123');
        console.log(question);
        var _a;
    };
    ArenaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-arena',
                    templateUrl: './arena.component.html'
                },] },
    ];
    /** @nocollapse */
    ArenaComponent.ctorParameters = [
        { type: AuthService, },
        { type: GameListServices, },
        { type: SocketService, },
    ];
    return ArenaComponent;
}());
