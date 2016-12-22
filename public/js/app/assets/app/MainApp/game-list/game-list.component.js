import { Component } from "@angular/core";
import { SocketService } from "../socketHanding/socket.service";
import { AuthService } from "../../auth/auth.service";
export var GameListcomponent = (function () {
    function GameListcomponent(socketService, user) {
        this.socketService = socketService;
        this.user = user;
    }
    GameListcomponent.prototype.ngOnDestroy = function () {
        console.log('ondestroy arenaas');
    };
    GameListcomponent.prototype.ngOnInit = function () {
        console.log('on init');
        this.socketService.reqArenas(this.user.getUserId());
        this.getAreaUpdate();
    };
    GameListcomponent.prototype.getAreaUpdate = function () {
        var _this = this;
        this.socketService.getArenas().subscribe(function (arena) {
            _this.arenas = arena;
            console.log(arena);
        });
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
