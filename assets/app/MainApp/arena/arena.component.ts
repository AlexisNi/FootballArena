import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {GameListServices} from "../game-list/game-list.services";
import {Subscription} from "rxjs";


@Component({
    selector: 'my-arena',
    template: `<div class="row" *ngIf="isUserPlaying==false">

    <div class="col-md-5" >
        <h1>{{userName}}</h1>
        <opponent-find></opponent-find>
    </div>
    <div class="col-md-7">
        <game-list></game-list>
    </div>
</div>
   <div class="row" *ngIf="isUserPlaying==true">
        <div class="col-md-5" >
        <arena-playing [arenas]="arenas"></arena-playing>
        </div>
    </div>


`
})
export class ArenaComponent implements  OnInit{
    constructor(private userService:AuthService,private gameListSevices:GameListServices){}
    public userName;
    public isUserPlaying;
    public arenas;
    subscription:Subscription;
    ngOnInit(): void {
        this.userService.getUser()
            .subscribe(
                (user:string)=> {
                    this.userName=user;
                    console.log(user)
                });
        this.isUserPlaying=false;
        this.userPlayingToFalse();

        this.gameListSevices.userPlayingChosen$
            .subscribe(isPlaying=>{
                this.isUserPlaying=isPlaying;
                console.log(isPlaying);
            });

        this.gameListSevices.ArenaChosen
            .subscribe(isPlaying=>{
             this.arenas=isPlaying;
                console.log(isPlaying);
            });




    }

    userPlayingToFalse(){
        this.gameListSevices.setUserPlaying(false);
    }

}