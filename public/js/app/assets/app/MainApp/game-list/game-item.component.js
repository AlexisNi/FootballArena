import { Component, Input, ViewChild } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { ArenaUserId } from "../models/arenaUserId";
import { GameListServices } from "./game-list.services";
import { SocketService } from "../socketHanding/socket.service";
export var GameItemComponent = (function () {
    function GameItemComponent(userIdService, gameListService, socketService) {
        this.userIdService = userIdService;
        this.gameListService = gameListService;
        this.socketService = socketService;
    }
    GameItemComponent.prototype.ngOnDestroy = function () {
    };
    GameItemComponent.prototype.ngOnInit = function () {
        this.userId = this.userIdService.getUserId();
    };
    GameItemComponent.prototype.getInviteId = function (inviteId, userid) {
        if (userid == this.userIdService.getUserId()) {
            this.inviteId = inviteId;
        }
        else {
            this.inviteId = userid;
        }
        console.log(this.inviteId);
    };
    GameItemComponent.prototype.showResult = function (arenaId) {
        var _this = this;
        var arenaUserId = new ArenaUserId(this.userId, arenaId);
        this.gameListService.getResult(arenaUserId)
            .subscribe(function (playerResult) {
            _this.playerResult = playerResult;
            console.log(playerResult);
        });
        this.modal.open();
    };
    GameItemComponent.prototype.sendArenaInfo = function (ArenaInfo) {
        this.gameListService.getArenaUsers(ArenaInfo);
        this.gameListService.setUserPlaying(true);
        this.gameListService.initAnswers('0', true, this.arena.arenaId, this.userId).subscribe();
    };
    GameItemComponent.prototype.claimAward = function () {
        var _this = this;
        this.gameListService.getAward(this.userId, this.arena.arenaId)
            .subscribe(function (message) {
            console.log(message);
            _this.socketService.reqArenas(_this.userId);
            _this.socketService.reqStats(_this.userId);
        });
        this.modal.close();
    };
    GameItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'game-item',
                    template: "\n<!--\nIf user hasnt played\n-->\n<div class=\"row\" *ngIf=\"arena.userId==userId && arena.user_played==false||arena.inviteId==userId&& arena.invite_played==false\">\n<div *ngIf=\"arena.userId==userId\">\n    <button class=\"list-group-item clearfix\" (click)=\"sendArenaInfo(arena)\">\n    <article class=\"panel panel-default\" [ngStyle]=\"{backgroundColor: color}\">\n    <div class=\"panel-body\">\n        {{arena?.lastName}} \n    </div>\n    <footer class=\"panel-footer\">\n        <div class=\"author\">\n            {{arena?.status_accept}}\n        </div>\n    </footer>\n    </article>\n    </button>\n</div>\n<div *ngIf=\"arena.inviteId==userId\">\n    <button class=\"list-group-item clearfix\" (click)=\"sendArenaInfo(arena)\">\n    <article class=\"panel panel-default\" [ngStyle]=\"{backgroundColor: color}\">\n    <div class=\"panel-body\">\n        {{arena?.lastName}} \n    </div>\n    <footer class=\"panel-footer\">\n        <div class=\"author\">\n            {{arena?.status_accept}}\n        </div>\n    </footer>\n    </article>\n    </button>\n\n</div>\n\n</div>\n\n<div class=\"row\" *ngIf=\"arena.userId==userId && arena.user_played==true||arena.inviteId==userId&& arena.invite_played==true\">\n    <button [class.disabled]=\"true\"  class=\"list-group-item clearfix\">\n    <article class=\"panel panel-default\" [ngStyle]=\"{backgroundColor: color}\">\n    <div class=\"panel-body\">\n        {{arena?.lastName}} \n    </div>\n    <footer class=\"panel-footer\">\n        <div class=\"author\">\n            {{arena?.status_accept}}\n        </div>\n    </footer>\n    </article>\n    </button>\n\n\n<div *ngIf=\" arena.user_played==true&&arena.invite_played==true\">\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"showResult(arena.arenaId)\">Show results</button>\n</div>\n    <modal #myModal [keyboard]=\"false\" [backdrop]=\"'static'\">\n        <modal-header [show-close]=\"false\">\n            <h4 class=\"modal-title\">You played against {{ arena.lastName }}</h4>\n        </modal-header>\n        <modal-body>\n                 <div *ngIf=\"playerResult?.draw==false\">\n                    <div *ngIf=\"playerResult?.winnerUserId==userId\">\n                    <h3>Congratulation You Won!!!!</h3>\n                    <p>Experience gained: {{playerResult.winnerAward.experience}} Points:{{playerResult.winnerAward.points}}</p>\n                    </div>    \n                    <div *ngIf=\"playerResult?.loserUserId==userId\">         \n                    <p>Sorry you lost....!!!!</p>\n                    <p>Experience gained: {{playerResult.loserAward.experience}} Points:{{playerResult.loserAward.points}}</p>\n                   </div>\n                </div>\n            <div *ngIf=\"playerResult?.draw==true\">         \n            <p>Its A draw....!!!!</p>\n            <p>Experience gained: {{playerResult.drawAward.experience}} Points:{{playerResult.drawAward.points}}</p>\n           </div>\n        </modal-body>\n     <modal-footer>\n     <div class=\"row\">\n        <div class=\"center-block\" style=\"width:200px;background-color:#ccc;\"><button type=\"button\"  class=\"btn btn-primary\"  style=\"width:200px\" data-dismiss=\"modal\" (click)=\"claimAward()\">Claim Award</button></div>\n\n     </div>\n      \n    </modal-footer>  \n      </modal>\n</div>\n\n\n \n\n\n\n",
                    styles: ["\n        .author{\n        display:inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n        a.disabled{\n            pointer-events: none;\n            cursor: default;\n        }\n        \n\n        "]
                },] },
    ];
    /** @nocollapse */
    GameItemComponent.ctorParameters = [
        { type: AuthService, },
        { type: GameListServices, },
        { type: SocketService, },
    ];
    GameItemComponent.propDecorators = {
        'modal': [{ type: ViewChild, args: ['myModal',] },],
        'arena': [{ type: Input },],
        'var': [{ type: Input },],
    };
    return GameItemComponent;
}());
