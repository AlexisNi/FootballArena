import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {SocketService} from "./socketHanding/socket.service";
import {Router} from "@angular/router";
@Component({
    selector: 'my-app',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit,OnDestroy{
    constructor(private socketService:SocketService,private userIdService:AuthService,private router:Router){}

    ngOnInit(): void {
        if(this.userIdService.isLoggedIn()==false){this.router.navigateByUrl('/auth')}
        this.userId=this.userIdService.getUserId();
        this.sendUserId();
        console.log('mainn app called');
    }

    ngOnDestroy(): void {
    }
    userId:string;

    sendUserId(){
        this.socketService.sendUserId(this.userId);
    }



}