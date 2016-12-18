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
@NgModule({
    declarations:[AppComponent,LoginComponent,AuthenticationComponent,SignUpComponent,LogoutComponent,HeaderComponent],
    imports:[BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule],
    providers:[AuthService],
    bootstrap:[AppComponent]

})

export class AppModule{

}