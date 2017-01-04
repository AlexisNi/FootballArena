/**
 * Created by alex on 19/10/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {MainComponent} from "./MainApp/main.component";
import {QUESTION_ROUTES} from "./MainApp/mainApp.routes";
import {QuestionStructure} from "./questions/question-structure.component";
import {LoggedInGuard} from "./auth/logged-in.guard";


const APP_ROUTES:Routes =[
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'mainApp',component:MainComponent,children:QUESTION_ROUTES,canActivate:[LoggedInGuard]},
    {path:'questions',component:QuestionStructure,canActivate:[LoggedInGuard]},
    {path:'auth',component:AuthenticationComponent,children:AUTH_ROUTES}


];
export const routing = RouterModule.forRoot(APP_ROUTES);