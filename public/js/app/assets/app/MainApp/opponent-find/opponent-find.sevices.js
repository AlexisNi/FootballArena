import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { GameListServices } from "../game-list/game-list.services";
import { ArenaUsers } from "../models/arenaUsers";
import { myGlobals } from "../../globals/globals";
import { Question } from "../../questions/questionModels/question";
export var OpponentFindService = (function () {
    function OpponentFindService(http, gameListSevices) {
        this.http = http;
        this.gameListSevices = gameListSevices;
    }
    OpponentFindService.prototype.findUser = function (userName) {
        var body = JSON.stringify(userName);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'user/find' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OpponentFindService.prototype.createArena = function (arenaPlayer) {
        var _this = this;
        var body = JSON.stringify(arenaPlayer);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'arena' + token, body, { headers: headers })
            .map(function (response) {
            var transformedQuestions = [];
            for (var _i = 0, _a = response.json().obj.questions; _i < _a.length; _i++) {
                var finalQuestion = _a[_i];
                transformedQuestions.push(new Question(finalQuestion.question, finalQuestion.optiona, finalQuestion.optionb, finalQuestion.optionc, finalQuestion.optiond, finalQuestion.answer, finalQuestion._id));
            }
            var arenaUsers = new ArenaUsers(response.json().obj._id, response.json().obj.user._id, response.json().obj.invite._id, response.json().obj.status_accept, response.json().obj.invite.lastName, response.json().obj.user_played, response.json().obj.invite_played, transformedQuestions);
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
