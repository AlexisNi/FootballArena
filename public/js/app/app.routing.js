import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
var APP_ROUTES = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
