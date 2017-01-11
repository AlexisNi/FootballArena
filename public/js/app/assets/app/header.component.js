import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
export var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authService.isLoggedIn();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n            <ul class=\"nav nav-pills\">\n                <div *ngIf=\"isLogged==false\"><li routerLinkActive=\"active\" ><a [routerLink]=\"['/auth']\"> Authentication</a> </li></div>\n                <div *ngIf=\"isLogged==true\"><li routerLinkActive=\"active\" ><a [routerLink]=\"['/auth/logout']\"> Logout</a> </li></div>\n\n            </ul>\n</nav>\n</header>\n"
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return HeaderComponent;
}());
