import {Component, OnInit, OnDestroy} from "@angular/core";
import {ArenaUsers} from "../models/arenaUsers";
import {SocketService} from "../socketHanding/socket.service";
import {AuthService} from "../../auth/auth.service";




@Component({
    selector:'game-list',
    template: `<div class="col-md-8 col-md-offset-2">
                <h1>Active Games</h1>
                <game-item *ngFor="let arena of arenas" [arena]="arena"></game-item>
               </div>
                `,

})

export  class GameListcomponent implements OnInit, OnDestroy{
   ngOnDestroy(): any {
        console.log('ondestroy arenaas')

    }


    ngOnInit(): any {
        console.log('on init');
        this.socketService.reqArenas(this.user.getUserId());
        this.getAreaUpdate();
   }
    constructor(private socketService:SocketService,private user:AuthService){}
    arenas:ArenaUsers[];

    getAreaUpdate(){
        this.socketService.getArenas().subscribe(
            (arena:ArenaUsers[])=> {
                this.arenas=arena;
                console.log(arena)
            });
    }
}