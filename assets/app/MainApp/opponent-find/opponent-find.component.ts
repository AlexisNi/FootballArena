import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,  Validators} from "@angular/forms";
import {User} from "../../auth/user";

import {OpponentFindService} from "./opponent-find.sevices";
import {SocketService} from "../socketHanding/socket.service";
import {ArenaPlayers} from "../models/arenaPlayers";


@Component({
    selector:'opponent-find',
    templateUrl: 'opponent-find.component.html'
})



export class OpponentComponentFind implements OnInit{
    myForm:FormGroup;
    userName;
    inviteId;
    searched=false;

    constructor(private opponentFindService:OpponentFindService,private socketService:SocketService){}

    ngOnInit(): void {
        this.myForm=new FormGroup({
            userName:new FormControl(null,Validators.required)
        });

    }

    onSubmit(){
        this.searched=true;
        const userName = new User(this.myForm.value.userName,this.myForm.value.userName,this.myForm.value.userName,this.myForm.value.userName);
        this.opponentFindService.findUser(userName)
            .subscribe(
                data=>{
                    console.log(data);
                    console.log(data.lastName);
                    this.userName=data.lastName;
                    this.inviteId=data.inviteId;

                },
                error=>{
                    console.error(error);
                },
                this.userName=null
            );
    }

    playWith(inviteId:string){
       var userId= localStorage.getItem('userId');
        var arenaPlayer=new ArenaPlayers(userId,inviteId);
        this.opponentFindService.createArena(arenaPlayer)
            .subscribe(



                data => {console.log(data);
                    setTimeout(()=>{
                        this.socketService.reqArenas(inviteId);
                    },1200);

/*
                    this.socketService.reqArenas(inviteId);
*/

                },
                error => console.error(error),


    );
/*
        this.socketService.reqArenas(inviteId);
*/


    }




}