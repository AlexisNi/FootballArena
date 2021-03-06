import {NgModule} from  '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./auth/login.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {SignUpComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {HeaderComponent} from "./header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ArenaComponent} from "./MainApp/arena/arena.component";
import {GameListcomponent} from "./MainApp/game-list/game-list.component";
import {GameItemComponent} from "./MainApp/game-list/game-item.component";
import {GameListServices} from "./MainApp/game-list/game-list.services";
import {SocketService} from "./MainApp/socketHanding/socket.service";
import {MainComponent} from "./MainApp/main.component";
import {OpponentComponentFind} from "./MainApp/opponent-find/opponent-find.component";
import {OpponentFindService} from "./MainApp/opponent-find/opponent-find.sevices";
import {ArenaServices} from "./questions/questionServices/arena.service";
import {QuestionServices} from "./questions/questionServices/question.service";
import {QuestionAnswerServices} from "./questions/questionServices/questionAnswer.service";
import {QuestionStructure} from "./questions/question-structure.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import { ArenaPlayingComponent} from "./questions/arena-playing.component";
import {LoggedInGuard} from "./auth/logged-in.guard";
import {ArenaHeaderComponent} from "./MainApp/arena/arena-header.component";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import AsyncValidator from "./auth/validators/equla-validator.directive";
import {LevelUpService} from "./levelUp/levelup.service";
import {LevelUpComponent} from "./levelUp/levelup.component";
@NgModule({
    declarations:[AppComponent,
        LoginComponent,
        AuthenticationComponent,
        SignUpComponent,
        LogoutComponent,
        HeaderComponent,
        ArenaComponent,
        GameListcomponent,
        GameItemComponent,
        OpponentComponentFind,
        MainComponent,
        QuestionStructure,
        ArenaPlayingComponent,
        ArenaHeaderComponent,
        ErrorComponent,
        AsyncValidator,
        LevelUpComponent
        ],

    imports:[BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule,Ng2Bs3ModalModule ],

    providers:[AuthService,
        GameListServices,
        OpponentFindService,
        SocketService,
        ArenaServices,
        QuestionServices,
        QuestionAnswerServices,
        LoggedInGuard,
        ErrorService,
        LevelUpService

        ],

    bootstrap:[AppComponent]

})

export class AppModule{

}