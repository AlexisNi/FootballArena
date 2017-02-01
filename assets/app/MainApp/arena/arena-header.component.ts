/**
 * Created by alex on 07/01/2017.
 */
import {Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck} from "@angular/core";
import {Stats} from "../game-list/models/stats";
import {SocketService} from "../socketHanding/socket.service";
import {AuthService} from "../../auth/auth.service";
import {LevelUpService} from "../../levelUp/levelup.service";
import {LevelUp} from "../../levelUp/levelUp.model";


@Component({
    selector:'arena-header',
    templateUrl:'./arena-header.component.html'
})

export  class ArenaHeaderComponent implements OnChanges{

    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes){
            let chng=changes[propName];
            if (propName=='level'){
                if (chng.previousValue!=null){
                    if(chng.currentValue>chng.previousValue){
                        var level:LevelUp=new LevelUp('Level Up','Congratulations!!!!!!!');
                        this.levelUp.handleLevelUp(level);

                    }
                }
            }


        }
    }

    constructor(private socketServices:SocketService,private authservice:AuthService,private levelUp:LevelUpService){}


    @Input() username;
    @Input() stats:Stats;
    @Input() level;
    @Input() experienceNextLevel;




    logout(){
        this.authservice.logout();

    }
}