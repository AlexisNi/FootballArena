import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
export var ArenaComponent = (function () {
    function ArenaComponent(userService) {
        this.userService = userService;
    }
    ArenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.userName = user;
            console.log(user);
        });
    };
    ArenaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-arena',
                    template: "<div class=\"row\">\n    <div class=\"col-md-5\">\n        <h1>{{userName}}</h1>\n        <opponent-find></opponent-find>\n    </div>\n    <div class=\"col-md-7\">\n        <game-list></game-list>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ArenaComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return ArenaComponent;
}());
