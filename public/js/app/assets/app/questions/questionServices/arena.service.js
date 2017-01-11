import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { myGlobals } from "../../globals/globals";
export var ArenaServices = (function () {
    function ArenaServices(http) {
        this.http = http;
    }
    ArenaServices.prototype.statusPlayed = function (arenaInfo) {
        var body = JSON.stringify(arenaInfo);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'arena/playedStatus', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ArenaServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ArenaServices.ctorParameters = [
        { type: Http, },
    ];
    return ArenaServices;
}());
