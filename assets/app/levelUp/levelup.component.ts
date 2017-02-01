import {Component, OnInit} from "@angular/core";
import {LevelUpService} from "./levelup.service";
import {LevelUp} from "./levelUp.model";

/**
 * Created by alex on 16/01/2017.
 */
@Component({
    selector:'levelup',
    templateUrl:'./levelup.component.html',
    styles:[`
            .backdrop{
                    background-color: rgba(0,0,0,0.6);
                    position: fixed;
                    top:0;
                    left: 0;
                    width: 100%;
                    height: 100vh;   
            
            }
            

            `]
})
export class LevelUpComponent implements OnInit{
    constructor(private  levelupService:LevelUpService){}

    ngOnInit(): void {
        this.levelupService.levelUpOccured.subscribe(
            (levelUp:LevelUp)=>{
                this.levelUp=levelUp;
                this.display='block';
            }
        )

    }

    levelUp:LevelUp;
    display='none';



    onErrorHandled(){
        this.display='none';
    }

}