import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit, ElementRef, Renderer} from '@angular/core';
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
import {Observable, Subscription} from "rxjs";



@Component({
    selector: 'arena-playing',
    templateUrl: './arena-playing.component.html'
})

export class ArenaPlayingComponent implements OnInit ,OnDestroy,AfterViewInit{


    constructor(private questionAnswerService:QuestionAnswerServices,
                private userService:AuthService,
                private arenaService:ArenaServices,
                private socketService:SocketService,
                private gameListService:GameListServices,
                private rd: Renderer
                ){}

    @Input() arenas:ArenaUsers;
    arenaQuestions:Question[]=[];
    userName:string;
    inviteId:string;
    isLost;
    userId;
    arenaId;
    index=0;
    ticks=7000;
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


        this.timer();
        this.getUserId();
        this.getUser();
        this.getInviteId();
        this.getArenaQuestions();
        this.socketService.enterArena(this.arenas.arenaId,this.userId,this.inviteId);

    }
    @ViewChild('button1') el:ElementRef;
    @ViewChild('button2') el1:ElementRef;
    @ViewChild('button3') el2:ElementRef;
    @ViewChild('button4') el3:ElementRef;
    colourInit(){
        this.rd.setElementStyle(this.el.nativeElement,'background-color','green');
        this.rd.setElementStyle(this.el1.nativeElement,'background-color','green');
        this.rd.setElementStyle(this.el2.nativeElement,'background-color','green');
        this.rd.setElementStyle(this.el3.nativeElement,'background-color','green');
    }

    ngAfterViewInit(): void {
        this.colourInit();
    }
    getInviteId(){
        if(this.arenas.userId==this.userId){
            this.inviteId=this.arenas.inviteId;
        }else {
            this.inviteId=this.arenas.userId;
        }
        console.log(this.inviteId);

    }



    ngOnDestroy(): void {
        console.log('on Destroy all arenas');
        this.statusPlayed();
        this.socketService.arenaLeave(this.inviteId);


    }


    nextQuestion(){

        this.ticks=30;
        this.index++;
        if(this.index>9){
            this.playerLost();
        }
        this.enableButtons();
        this.colourInit();

    }
    waitForNextQuestion(){
        this.ticks=7000;
        this.disableButtons();
    }

    onChooseQuestion(activeQuestion:Question,answerChoice:Object,buttonNumber:number){
        if(activeQuestion.answer===answerChoice){
            var questionAnswer=new AnsweredQuestion(activeQuestion.questionId,true);
            var  questionAns=new ArenaQuestion(this.arenaId,this.userId,questionAnswer);
            this.questionAnswerService.saveAnswerdQuestion(questionAns)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.checkButtons(buttonNumber,true,activeQuestion);
            this.waitForNextQuestion();
         setTimeout(()=>{
                console.log('TimeOut');
                this.nextQuestion();
            },1);



        }else {
            this.checkButtons(buttonNumber,false,activeQuestion);
            this.waitForNextQuestion();
            setTimeout(()=>{
                this.isLost=true;
                this.open();
            },1);



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
        var arenaInfo=new StatusPlayed(this.arenas.arenaId,this.userId);

        this.arenaService.statusPlayed(arenaInfo)
            .subscribe(
                data=>console.log(data),
                error=>console.log(error));
    }
    getArenaQuestions(){
        this.arenaQuestions=this.arenas.questions;
    }

    timer() {

        let timer = Observable.timer(100, 1000);
       timer.subscribe(t=>{this.ticks = this.ticks - 1;
            if(this.ticks==0)
            {
                this.playerLost();
            }});
    }

    playerLost(){
        this.isLost=true;
        this.open();
    }

    enableButtons(){
        this.rd.setElementAttribute(this.el.nativeElement,'disabled','false');
        this.rd.setElementAttribute(this.el1.nativeElement,'disabled','false');
        this.rd.setElementAttribute(this.el2.nativeElement,'disabled','false');
        this.rd.setElementAttribute(this.el3.nativeElement,'disabled','false');
    }
    disableButtons(){
        this.rd.setElementAttribute(this.el.nativeElement,'disabled','true');
        this.rd.setElementAttribute(this.el1.nativeElement,'disabled','true');
        this.rd.setElementAttribute(this.el2.nativeElement,'disabled','true');
        this.rd.setElementAttribute(this.el3.nativeElement,'disabled','true');

    }


    checkButtons(buttonNumber:number,right:boolean,activeQuestion:Question){

        if(buttonNumber==1&&right==true)
        {
            this.rd.setElementStyle(this.el.nativeElement,'background-color','blue');
        }
        if(buttonNumber==2&&right==true)
        {
            this.rd.setElementStyle(this.el1.nativeElement,'background-color','blue');
        }
        if(buttonNumber==3&&right==true)
        {
            this.rd.setElementStyle(this.el2.nativeElement,'background-color','blue');
        }
        if(buttonNumber==4&&right==true)
        {
            this.rd.setElementStyle(this.el3.nativeElement,'background-color','blue');

        }

        if(buttonNumber==1&&right==false)
        {
            this.rd.setElementStyle(this.el.nativeElement,'background-color','red');
            if(activeQuestion.answer===activeQuestion.optionb){
                this.rd.setElementStyle(this.el1.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optionc){
                this.rd.setElementStyle(this.el2.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optiond){
                this.rd.setElementStyle(this.el3.nativeElement,'background-color','blue')
            }

        }
        if(buttonNumber==2&&right==false)
        {
            this.rd.setElementStyle(this.el1.nativeElement,'background-color','red');

            console.log(activeQuestion);
            if(activeQuestion.answer==activeQuestion.optiona){
                this.rd.setElementStyle(this.el.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optionc){
                this.rd.setElementStyle(this.el2.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optiond){
                this.rd.setElementStyle(this.el3.nativeElement,'background-color','blue')
            }
        }
        if(buttonNumber==3&&right==false)
        {
            this.rd.setElementStyle(this.el2.nativeElement,'background-color','red');

            if(activeQuestion.answer===activeQuestion.optiona){
                this.rd.setElementStyle(this.el.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optionb){
                this.rd.setElementStyle(this.el1.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optiond){
                this.rd.setElementStyle(this.el3.nativeElement,'background-color','blue')
            }
        }
        if(buttonNumber==4&&right==false)
        {
            this.rd.setElementStyle(this.el3.nativeElement,'background-color','red');

            if(activeQuestion.answer===activeQuestion.optiona){
                this.rd.setElementStyle(this.el.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optionb){
                this.rd.setElementStyle(this.el1.nativeElement,'background-color','blue')
            }
            if(activeQuestion.answer===activeQuestion.optionc){
                this.rd.setElementStyle(this.el2.nativeElement,'background-color','blue')
            }

        }



    }





}