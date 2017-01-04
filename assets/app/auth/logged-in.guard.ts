/**
 * Created by alex on 04/01/2017.
 */
import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()

export class LoggedInGuard implements CanActivate{
    constructor(private user:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.user.isLoggedIn()){
            return true;

        }else {
            this.router.navigateByUrl('auth');
            return false;

        }

    }





}