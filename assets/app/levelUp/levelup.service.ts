import {EventEmitter} from "@angular/core";
import {LevelUp} from "./levelUp.model";
/**
 * Created by alex on 16/01/2017.
 */
export class LevelUpService{
    levelUpOccured=new EventEmitter<LevelUp>();

    handleLevelUp(levelUp:any){
        console.log(levelUp)
        const LevelUpData=new LevelUp(levelUp.title,levelUp.message);
        this.levelUpOccured.emit(LevelUpData);
    }

}