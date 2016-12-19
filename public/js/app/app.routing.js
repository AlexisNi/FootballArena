import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { MainComponent } from "./MainApp/main.component";
import { QUESTION_ROUTES } from "./MainApp/mainApp.routes";
var APP_ROUTES = [
    { path: '', redirectTo: 'mainApp', pathMatch: 'full' },
    { path: 'mainApp', component: MainComponent, children: QUESTION_ROUTES },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
