import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
export var LoggedInGuard = (function () {
    function LoggedInGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        if (this.user.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl('auth');
            return false;
        }
    };
    LoggedInGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggedInGuard.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return LoggedInGuard;
}());
