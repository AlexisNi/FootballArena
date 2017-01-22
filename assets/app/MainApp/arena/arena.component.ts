import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {GameListServices} from "../game-list/game-list.services";
import {SocketService} from "../socketHanding/socket.service";
import {Stats} from "../game-list/models/stats";
import {Observable} from "rxjs";
import {Question} from "../../questions/questionModels/question";
import {Error} from "../../errors/error.model";
import {ErrorService} from "../../errors/error.service";


@Component({
    selector: 'my-arena',
    templateUrl:'./arena.component.html'
})
export class ArenaComponent implements  OnInit{

    constructor(private userService:AuthService,
                private gameListSevices:GameListServices,
                private socketServices:SocketService,
                private errorService:ErrorService){}
    public userName;
    public isUserPlaying;
    public arenas;
    public userId;
    public stats:Stats;
    public ticks=30;
    ngOnInit(): void {
        this.onError();
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
/*
    arrayTest(){
        var array=['1','2','3'];
        for (let i = array.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i - 1], array[j]] = [array[j], array[i - 1]];

        }
        console.log(array[1]);
       let question:Question=new Question('Poios irthe?','enas','dios','trios','teseros','trios','123');

        console.log(question);

    }*/

    onError(){
        this.socketServices.onError()
            .subscribe((error:Error)=>{
                if(error){ this.errorService.handleError(error);}

            })
    }




}