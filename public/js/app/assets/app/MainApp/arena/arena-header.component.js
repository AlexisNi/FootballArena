import { Component, Input } from "@angular/core";
import { SocketService } from "../socketHanding/socket.service";
export var ArenaHeaderComponent = (function () {
    function ArenaHeaderComponent(socketServices) {
        this.socketServices = socketServices;
    }
    ArenaHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'arena-header',
                    templateUrl: './arena-header.component.html'
                },] },
    ];
    /** @nocollapse */
    ArenaHeaderComponent.ctorParameters = [
        { type: SocketService, },
    ];
    ArenaHeaderComponent.propDecorators = {
        'username': [{ type: Input },],
        'stats': [{ type: Input },],
    };
    return ArenaHeaderComponent;
}());
