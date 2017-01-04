import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Component({
    selector:'app-header',
    template:`
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-pills">
                <div *ngIf="isLogged==false"><li routerLinkActive="active" ><a [routerLink]="['/auth']"> Authentication</a> </li></div>
                <div *ngIf="isLogged==true"><li routerLinkActive="active" ><a [routerLink]="['/auth/logout']"> Logout</a> </li></div>

            </ul>
</nav>
</header>
`
})
export  class HeaderComponent implements  OnInit{
    isLogged;
    ngOnInit(): void {
       this.isLogged= this.authService.isLoggedIn()
    }

    constructor(private authService:AuthService){}

}