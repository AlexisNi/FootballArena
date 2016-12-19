import {User} from "./user";
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
@Injectable()
export  class AuthService{
    public Lh='http://localhost:3000/';
    public Heroku='https://footballarenaquiz.herokuapp.com/';
    constructor(private http:Http){}


    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.Lh+'user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>Observable.throw(error.json()));
    }


    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.Lh+'user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>Observable.throw(error.json()));
                }


    getUser(){
        const token=localStorage.getItem('token')? '?token='+localStorage.getItem('token') : '';
        return this.http.get(this.Lh+'user'+token)
            .map((response : Response)=>{
                const user=response.json().obj.lastName;

                return user;

            })
            .catch((error: Response) =>Observable.throw(error.json()));

    }
    getUserId(){
        const user=localStorage.getItem('userId');
        return user;


    }


    logout(){
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem('token')!==null;

    }
    path(){
    }
}