import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {GameListServices} from "../game-list/game-list.services";
import {SocketService} from "../socketHanding/socket.service";
import {Stats} from "../game-list/models/stats";
import {Observable} from "rxjs";
import {tick} from "@angular/core/testing";


@Component({
    selector: 'my-arena',
    templateUrl:'./arena.component.html'
})
export class ArenaComponent implements  OnInit{

    constructor(private userService:AuthService,private gameListSevices:GameListServices,private socketServices:SocketService){}
    public userName;
    public isUserPlaying;
    public arenas;
    public userId;
    public stats:Stats;
    public ticks=5;
    ngOnInit(): void {
        this.timer();
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

    timer(){


       let timer=Observable.timer(100,1000);
        timer.subscribe(t=>this.ticks=t);


    }

}