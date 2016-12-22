import {Component, OnInit, OnDestroy, Input, ViewChild} from '@angular/core';
import {GameListServices} from "../MainApp/game-list/game-list.services";
import {ArenaUsers} from "../MainApp/models/arenaUsers";
import {Question} from "./questionModels/question";
import {AnsweredQuestion} from "./questionModels/answered-questions";
import {QuestionAnswerServices} from "./questionServices/questionAnswer.service";
import {AuthService} from "../auth/auth.service";
import {ArenaQuestion} from "./questionModels/arena_question";
import {StatusPlayed} from "./questionModels/statusPlayedArena";
import {ArenaServices} from "./questionServices/arena.service";
import {SocketService} from "../MainApp/socketHanding/socket.service";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Router} from "@angular/router";



@Component({
    selector: 'arena-playing',
    templateUrl: './arena-playing.component.html'
})

export class ArenaPlayingComponent implements OnInit ,OnDestroy{

    constructor(private questionAnswerService:QuestionAnswerServices,
                private userService:AuthService,
                private arenaService:ArenaServices,
                private socketService:SocketService,
                private gameListService:GameListServices){}

    @Input() arenas:ArenaUsers;
    arenaQuestions:Question[]=[];
    userName:string;
    inviteId:string;
    isLost;
    userId;
    arenaId;
    index=0;
    @ViewChild('myModal')
    modal: ModalComponent;

    open() {
        this.modal.open();
    }
    close(){
        this.isLost=false;
        this.modal.close();
        this.gameListService.setUserPlaying(false);


    }

    ngOnInit(): void {
        this.arenaId=this.arenas.arenaId;
        this.getUserId();
        this.getUser();
        this.getArenaQuestions();
        this.socketService.enterArena(this.arenaId,this.userId);
        this.statusPlayed();
        this.getInviteId();

    }
    getInviteId(){
        if(this.arenas.userId==this.userId){
            this.inviteId=this.arenas.inviteId;
        }else {
            this.inviteId=this.userId;
        }

    }



    ngOnDestroy(): void {
        console.log('on Destroy all arenas');

        this.socketService.arenaLeave(this.inviteId);


    }


    nextQuestion(){
        this.index++;
    }

    onChooseQuestion(activeQuestion:Question,answerChoice:Object){
        console.log(activeQuestion);
        console.log(answerChoice);
        if(activeQuestion.answer===answerChoice){
            var questionAnswer=new AnsweredQuestion(activeQuestion.questionId,true);
            console.log(questionAnswer);
            var  questionAns=new ArenaQuestion(this.arenaId,this.userId,questionAnswer);
            this.questionAnswerService.saveAnswerdQuestion(questionAns)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );



            this.nextQuestion()



        }else {
            this.isLost=true;
            this.open();

        }

    }

    getUser(){
        this.userService.getUser()
            .subscribe(
                (user:string)=> {
                    this.userName=user;
                    console.log(user)
                });

    }

    getUserId(){
        this.userId=this.userService.getUserId();
    }

    statusPlayed(){
        var arenaInfo=new StatusPlayed(this.arenaId,this.userId);

        this.arenaService.statusPlayed(arenaInfo)
            .subscribe(
                data=>console.log(data),
                error=>console.log(error));
    }
    getArenaQuestions(){
        this.arenaQuestions=this.arenas.questions;
        console.log(this.arenaQuestions);
    }



}