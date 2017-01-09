import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { SocketService } from "./socketHanding/socket.service";
import { Router } from "@angular/router";
export var MainComponent = (function () {
    function MainComponent(socketService, userIdService, router) {
        this.socketService = socketService;
        this.userIdService = userIdService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.userIdService.isLoggedIn() == false) {
            this.router.navigateByUrl('/auth');
        }
        this.userId = this.userIdService.getUserId();
        this.sendUserId();
        console.log('mainn app called');
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
        { type: Router, },
    ];
    return MainComponent;
}());
