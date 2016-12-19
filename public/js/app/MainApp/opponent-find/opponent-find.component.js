import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../../auth/user";
import { OpponentFindService } from "./opponent-find.sevices";
import { SocketService } from "../socketHanding/socket.service";
import { ArenaPlayers } from "../models/arenaPlayers";
export var OpponentComponentFind = (function () {
    function OpponentComponentFind(opponentFindService, socketService) {
        this.opponentFindService = opponentFindService;
        this.socketService = socketService;
        this.searched = false;
    }
    OpponentComponentFind.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            userName: new FormControl(null, Validators.required)
        });
    };
    OpponentComponentFind.prototype.onSubmit = function () {
        var _this = this;
        this.searched = true;
        var userName = new User(this.myForm.value.userName, this.myForm.value.userName, this.myForm.value.userName, this.myForm.value.userName);
        this.opponentFindService.findUser(userName)
            .subscribe(function (data) {
            console.log(data);
            console.log(data.lastName);
            _this.userName = data.lastName;
            _this.inviteId = data.inviteId;
        }, function (error) { return console.error(error); }, this.userName = null);
    };
    OpponentComponentFind.prototype.playWith = function (inviteId) {
        var _this = this;
        var userId = localStorage.getItem('userId');
        var arenaPlayer = new ArenaPlayers(userId, inviteId);
        this.opponentFindService.createArena(arenaPlayer)
            .subscribe(function (data) {
            console.log(data);
            _this.socketService.reqArenas(inviteId);
        }, function (error) { return console.error(error); });
        this.socketService.reqArenas(inviteId);
    };
    OpponentComponentFind.decorators = [
        { type: Component, args: [{
                    selector: 'opponent-find',
                    templateUrl: 'opponent-find.component.html'
                },] },
    ];
    /** @nocollapse */
    OpponentComponentFind.ctorParameters = [
        { type: OpponentFindService, },
        { type: SocketService, },
    ];
    return OpponentComponentFind;
}());
