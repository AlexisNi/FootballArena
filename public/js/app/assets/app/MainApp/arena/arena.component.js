import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { GameListServices } from "../game-list/game-list.services";
import { SocketService } from "../socketHanding/socket.service";
export var ArenaComponent = (function () {
    function ArenaComponent(userService, gameListSevices, socketServices) {
        this.userService = userService;
        this.gameListSevices = gameListSevices;
        this.socketServices = socketServices;
    }
    ArenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.userService.getUser()
             .subscribe(
                 (user:string)=> {
                     this.userName=user;
                 });
             this.userService.getUserId()
             .subscribe(
                 (useriD:string)=> {
 
                 });*/
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
                    template: "\n    <div class=\"row\" *ngIf=\"isUserPlaying==false\">\n\n        <div class=\"col-md-5 col-lg-5 col-sm-5\" >\n                       <div class=\" col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-2 col-lg-offset-2\"><h1>{{userName}}</h1></div>\n                       <div class=\"col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-1 col-lg-offset-1\"><h1>Level:{{stats?.level}}</h1></div>\n                       <div class=\"col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-1 col-lg-offset-1\"><h1>CurrentExp:{{stats?.currentExp}}</h1></div>\n            \n                     \n            \n\n           <opponent-find></opponent-find>\n        </div>\n        \n        <div class=\"col-md-7\">\n            <game-list></game-list>\n        </div>\n        \n    </div>\n    \n   <div class=\"row\" *ngIf=\"isUserPlaying==true\">\n        <div class=\"col-md-5\" >\n        <arena-playing [arenas]=\"arenas\"></arena-playing>\n        </div>\n    </div>\n\n\n"
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
