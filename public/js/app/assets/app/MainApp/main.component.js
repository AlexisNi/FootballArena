import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { SocketService } from "./socketHanding/socket.service";
export var MainComponent = (function () {
    function MainComponent(socketService, userIdService) {
        this.socketService = socketService;
        this.userIdService = userIdService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.userId = this.userIdService.getUserId();
        this.sendUserId();
    };
    MainComponent.prototype.ngOnDestroy = function () {
    };
    MainComponent.prototype.sendUserId = function () {
        this.socketService.sendUserId(this.userId);
    };
    MainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './main.component.html'
                },] },
    ];
    /** @nocollapse */
    MainComponent.ctorParameters = [
        { type: SocketService, },
        { type: AuthService, },
    ];
    return MainComponent;
}());
