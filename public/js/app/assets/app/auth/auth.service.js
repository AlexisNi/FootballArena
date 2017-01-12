import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { myGlobals } from "../globals/globals";
import { Router } from "@angular/router";
export var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.getUser = function () {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get(myGlobals.host + 'user' + token)
            .map(function (response) {
            var user = response.json().obj.lastName;
            return user;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.getUserId = function () {
        var user = localStorage.getItem('userId');
        return user;
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/auth', 'signin']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.checkUserName = function (userName) {
        var lastNAme = { lastName: userName };
        var body = JSON.stringify(lastNAme);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(myGlobals.host + 'user/checkUserName', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
        { type: Router, },
    ];
    return AuthService;
}());
