import { Component, Input } from "@angular/core";
import { SocketService } from "../socketHanding/socket.service";
import { AuthService } from "../../auth/auth.service";
export var ArenaHeaderComponent = (function () {
    function ArenaHeaderComponent(socketServices, authservice) {
        this.socketServices = socketServices;
        this.authservice = authservice;
    }
    ArenaHeaderComponent.prototype.logout = function () {
        this.authservice.logout();
    };
    ArenaHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'arena-header',
                    templateUrl: './arena-header.component.html'
                },] },
    ];
    /** @nocollapse */
    ArenaHeaderComponent.ctorParameters = [
        { type: SocketService, },
        { type: AuthService, },
    ];
    ArenaHeaderComponent.propDecorators = {
        'username': [{ type: Input },],
        'stats': [{ type: Input },],
    };
    return ArenaHeaderComponent;
}());
