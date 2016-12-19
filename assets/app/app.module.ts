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
        MainComponent],

    imports:[BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule],

    providers:[AuthService,
        GameListServices,
        OpponentFindService,
        SocketService],

    bootstrap:[AppComponent]

})

export class AppModule{

}