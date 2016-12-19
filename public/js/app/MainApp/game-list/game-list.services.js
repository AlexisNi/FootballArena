import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { ArenaUsers } from "../models/arenaUsers";
import { PlayerResult } from "./models/playerResults";
/**
 * Created by alex on 06/12/2016.
 */
export var GameListServices = (function () {
    function GameListServices(http) {
        this.http = http;
        this.Lh = 'http://localhost:3000/';
        this.Heroku = 'https://footballarenaquiz.herokuapp.com/';
        this.arenas = [];
    }
    GameListServices.prototype.getResult = function (arenaUserInfo) {
        var body = JSON.stringify(arenaUserInfo);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.Heroku + 'questionANS/getResults', body, { headers: headers })
            .map(function (response) {
            var winner = response.json().winner;
            var loser = response.json().loser;
            var WinnerResult = new PlayerResult(winner._id, winner.lastName, loser._id, loser.lastName);
            return WinnerResult;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    GameListServices.prototype.getArenas = function () {
        var _this = this;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get(this.Heroku + 'arena/arenas' + token)
            .map(function (response) {
            var arenas = response.json().obj;
            var transformedArenas = [];
            for (var _i = 0, arenas_1 = arenas; _i < arenas_1.length; _i++) {
                var arena = arenas_1[_i];
                transformedArenas.push(new ArenaUsers(arena._id, arena.user, arena.invite._id, arena.status_accept, arena.user.lastName || arena.invite.lastName, arena.user_played, arena.invite_played));
            }
            var UserArenas = response.json().objUser;
            for (var _a = 0, UserArenas_1 = UserArenas; _a < UserArenas_1.length; _a++) {
                var userArena = UserArenas_1[_a];
                transformedArenas.push(new ArenaUsers(userArena._id, userArena.user._id, userArena.invite, userArena.status_accept, userArena.user.lastName, userArena.user_played, userArena.invite_played));
            }
            _this.arenas = transformedArenas;
            return transformedArenas;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    GameListServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GameListServices.ctorParameters = [
        { type: Http, },
    ];
    return GameListServices;
}());