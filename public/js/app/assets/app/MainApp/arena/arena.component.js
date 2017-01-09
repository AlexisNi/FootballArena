import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { GameListServices } from "../game-list/game-list.services";
import { SocketService } from "../socketHanding/socket.service";
export var ArenaComponent = (function () {
    function ArenaComponent(userService, gameListSevices, socketServices) {
        this.userService = userService;
        this.gameListSevices = gameListSevices;
        this.socketServices = socketServices;
        this.ticks = 30;
    }
    ArenaComponent.prototype.ngOnInit = function () {
        var _this = this;
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
