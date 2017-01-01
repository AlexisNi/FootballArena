import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {GameListServices} from "../game-list/game-list.services";
import {Subscription} from "rxjs";
import {SocketService} from "../socketHanding/socket.service";
import {Stats} from "../game-list/models/stats";


@Component({
    selector: 'my-arena',
    template: `
    <div class="row" *ngIf="isUserPlaying==false">

        <div class="col-md-5 col-lg-5 col-sm-5" >
                       <div class=" col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-2 col-lg-offset-2"><h1>{{userName}}</h1></div>
                       <div class="col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-1 col-lg-offset-1"><h1>Level:{{stats?.level}}</h1></div>
                       <div class="col-sm-1 col-sm-offset-2 col-md-1 col-lg-1 col-md-offset-1 col-lg-offset-1"><h1>CurrentExp:{{stats?.currentExp}}</h1></div>
            
                     
            

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
    constructor(private userService:AuthService,private gameListSevices:GameListServices,private socketServices:SocketService){}
    public userName;
    public isUserPlaying;
    public arenas;
    public userId;
    public stats:Stats;
    ngOnInit(): void {
       /* this.userService.getUser()
            .subscribe(
                (user:string)=> {
                    this.userName=user;
                });
            this.userService.getUserId()
            .subscribe(
                (useriD:string)=> {

                });*/
        this.getUser();
        this.getUserId();
        this.loadStats();

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

    getUser(){
        this.userService.getUser()
            .subscribe(
                (user:string)=> {
                    this.userName=user;
                });
    }
    getUserId(){
     this.userId=this.userService.getUserId();
        this.socketServices.reqStats(this.userId);

    }
    loadStats(){
        this.socketServices.getStats()
            .subscribe((stats:Stats)=>{
                this.stats=stats;
            })
    }

}