import {Routes} from "@angular/router";
import {ArenaComponent} from "./arena/arena.component";
import {QuestionStructure} from "../questions/question-structure.component";

/**
 * Created by alex on 05/10/2016.
 */
export const QUESTION_ROUTES :Routes =[
    {path:'',redirectTo:'arena',pathMatch:'full'},
    {path:'arena',component:ArenaComponent},
    {path:'arena/:id',component:QuestionStructure}


];
