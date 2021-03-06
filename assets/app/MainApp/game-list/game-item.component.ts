/**
 * Created by alex on 15/11/2016.
 */
import {Component, Input, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {ArenaUsers} from "../models/arenaUsers";
import {AuthService} from "../../auth/auth.service";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {ArenaUserId} from "../models/arenaUserId";
import {GameListServices} from "./game-list.services";
import {PlayerResult} from "./models/playerResults";
import {SocketService} from "../socketHanding/socket.service";
import {QuestionAnswerServices} from "../../questions/questionServices/questionAnswer.service";


@Component({
    selector:'game-item',
    template: `
<!--
If user hasnt played
-->
<div class="row" *ngIf="arena.userId==userId && arena.user_played==false||arena.inviteId==userId&& arena.invite_played==false">
<div *ngIf="arena.userId==userId">
    <button class="list-group-item clearfix" (click)="sendArenaInfo(arena)">
    <article class="panel panel-default" [ngStyle]="{backgroundColor: color}">
    <div class="panel-body">
        {{arena?.lastName}} 
    </div>
    <footer class="panel-footer">
        <div class="author">
            {{arena?.status_accept}}
        </div>
    </footer>
    </article>
    </button>
</div>
<div *ngIf="arena.inviteId==userId">
    <button class="list-group-item clearfix" (click)="sendArenaInfo(arena)">
    <article class="panel panel-default" [ngStyle]="{backgroundColor: color}">
    <div class="panel-body">
        {{arena?.lastName}} 
    </div>
    <footer class="panel-footer">
        <div class="author">
            {{arena?.status_accept}}
        </div>
    </footer>
    </article>
    </button>

</div>

</div>

<div class="row" *ngIf="arena.userId==userId && arena.user_played==true||arena.inviteId==userId&& arena.invite_played==true">
    <button [class.disabled]="true"  class="list-group-item clearfix">
    <article class="panel panel-default" [ngStyle]="{backgroundColor: color}">
    <div class="panel-body">
        {{arena?.lastName}} 
    </div>
    <footer class="panel-footer">
        <div class="author">
            {{arena?.status_accept}}
        </div>
    </footer>
    </article>
    </button>


<div *ngIf=" arena.user_played==true&&arena.invite_played==true">
<button type="button" class="btn btn-primary" (click)="showResult(arena.arenaId)">Show results</button>
</div>
    <modal #myModal [keyboard]="false" [backdrop]="'static'">
        <modal-header [show-close]="false">
            <h4 class="modal-title">You played against {{ arena.lastName }}</h4>
        </modal-header>
        <modal-body>
                 <div *ngIf="playerResult?.draw==false">
                    <div *ngIf="playerResult?.winnerUserId==userId">
                    <h3>Congratulation You Won!!!!</h3>
                    <p>Experience gained: {{playerResult.winnerAward.experience}} Points:{{playerResult.winnerAward.points}}</p>
                    </div>    
                    <div *ngIf="playerResult?.loserUserId==userId">         
                    <p>Sorry you lost....!!!!</p>
                    <p>Experience gained: {{playerResult.loserAward.experience}} Points:{{playerResult.loserAward.points}}</p>
                   </div>
                </div>
            <div *ngIf="playerResult?.draw==true">         
            <p>Its A draw....!!!!</p>
            <p>Experience gained: {{playerResult.drawAward.experience}} Points:{{playerResult.drawAward.points}}</p>
           </div>
        </modal-body>
     <modal-footer>
     <div class="row">
        <div class="center-block" style="width:200px;background-color:#ccc;"><button type="button"  class="btn btn-primary"  style="width:200px" data-dismiss="modal" (click)="claimAward()">Claim Award</button></div>

     </div>
      
    </modal-footer>  
      </modal>
</div>


 



`,
    styles:[`
        .author{
        display:inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
        }
        .config{
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
        }
        a.disabled{
            pointer-events: none;
            cursor: default;
        }
        

        `]

})

export class GameItemComponent implements OnInit, OnDestroy{
    ngOnDestroy(): void {

    }
    @ViewChild('myModal')
    modal: ModalComponent;
    @Input() arena:ArenaUsers;
    public userId;
    private playerResult:PlayerResult;
    private inviteId;

    @Input() var:any;


    ngOnInit(): void {

        this.userId=this.userIdService.getUserId();
    }

    constructor(private userIdService:AuthService,private gameListService:GameListServices,private socketService:SocketService){}

    getInviteId(inviteId,userid){
        if (userid==this.userIdService.getUserId()){
            this.inviteId=inviteId;
        }else{
            this.inviteId=userid
        }
        console.log(this.inviteId);


    }

    showResult(arenaId)
    {

        var arenaUserId=new ArenaUserId(this.userId,arenaId)
        this.gameListService.getResult(arenaUserId)
            .subscribe(
                (playerResult:PlayerResult)=> {
                    this.playerResult=playerResult;
                    console.log(playerResult);

                });

        this.modal.open();

    }

    sendArenaInfo(ArenaInfo:ArenaUsers){
        this.gameListService.getArenaUsers(ArenaInfo);
        this.gameListService.setUserPlaying(true);
        this.gameListService.initAnswers('0',true,this.arena.arenaId,this.userId).subscribe();


    }
    claimAward(){
        this.gameListService.getAward(this.userId,this.arena.arenaId)
            .debounceTime(1000)
            .subscribe((message)=>{console.log(message)
                setTimeout(()=>{
                    this.socketService.reqArenas(this.userId);
                    this.socketService.reqStats(this.userId);
                },300);
               /*this.socketService.reqArenas(this.userId);
                this.socketService.reqStats(this.userId);*/


            });

        this.modal.close();

    }


}