import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { GameListServices } from "../game-list/game-list.services";
import { ArenaUsers } from "../models/arenaUsers";
export var OpponentFindService = (function () {
    function OpponentFindService(http, gameListSevices) {
        this.http = http;
        this.gameListSevices = gameListSevices;
        this.arenas = [];
        this.Lh = 'http://localhost:3000/';
        this.Heroku = 'https://footballarenaquiz.herokuapp.com/';
    }
    OpponentFindService.prototype.findUser = function (userName) {
        var body = JSON.stringify(userName);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.Heroku + 'user/find', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OpponentFindService.prototype.createArena = function (arenaPlayer) {
        var _this = this;
        var body = JSON.stringify(arenaPlayer);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.Heroku + 'arena' + token, body, { headers: headers })
            .map(function (response) {
            var arenaUsers = new ArenaUsers(response.json().obj._id, response.json().obj.user._id, response.json().obj.invite._id, response.json().obj.status_accept, response.json().obj.invite.lastName, response.json().obj.user_played, response.json().obj.invite_played);
            _this.gameListSevices.arenas.push(arenaUsers);
            return arenaUsers;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OpponentFindService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OpponentFindService.ctorParameters = [
        { type: Http, },
        { type: GameListServices, },
    ];
    return OpponentFindService;
}());
