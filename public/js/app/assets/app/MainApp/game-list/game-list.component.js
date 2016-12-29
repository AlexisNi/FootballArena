import { Component } from "@angular/core";
import { SocketService } from "../socketHanding/socket.service";
import { AuthService } from "../../auth/auth.service";
export var GameListcomponent = (function () {
    function GameListcomponent(socketService, user) {
        this.socketService = socketService;
        this.user = user;
        this.getAreaUpdate();
    }
    GameListcomponent.prototype.ngOnInit = function () {
        this.socketService.reqArenas(this.user.getUserId());
    };
    GameListcomponent.prototype.getAreaUpdate = function () {
        var _this = this;
        this.socketService.getArenas().subscribe(function (arena) {
            _this.arenas = arena;
            console.log(arena);
        });
    };
    GameListcomponent.prototype.ngOnDestroy = function () {
        /*   console.log('ondestroy arenaas');
           this.socketService.getArenas().subscribe(
               (arena:ArenaUsers[])=> {
               }).unsubscribe();
   */
    };
    GameListcomponent.decorators = [
        { type: Component, args: [{
                    selector: 'game-list',
                    template: "<div class=\"col-md-8 col-md-offset-2\">\n                <h1>Active Games</h1>\n                <game-item *ngFor=\"let arena of arenas\" [arena]=\"arena\"></game-item>\n               </div>\n                ",
                },] },
    ];
    /** @nocollapse */
    GameListcomponent.ctorParameters = [
        { type: SocketService, },
        { type: AuthService, },
    ];
    return GameListcomponent;
}());
