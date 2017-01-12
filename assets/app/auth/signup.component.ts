import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl, FormsModule} from "@angular/forms";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {error} from "util";

@Component({
    selector:'quiz-signUp',
    templateUrl:'./signup.component.html'

})

export class SignUpComponent  implements OnInit{
    myForm:FormGroup;
    firstName:FormControl;

        constructor(private authService:AuthService,private router:Router){}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data =>{
                    console.log(data);
                    this.authService.signin(user)
                        .subscribe(data=>{
                            localStorage.setItem('token',data.token);
                            localStorage.setItem('userId',data.userId);
                            this.router.navigateByUrl('mainApp');
                        },error=>console.error(error));
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }





    ngOnInit(): void {
        if(this.authService.isLoggedIn()==true){
            this.router.navigateByUrl('mainApp');
        }
        this.myForm=new FormGroup({
            firstName:new FormControl(null,Validators.required),
            lastName:new FormControl(null,Validators.required),
            email:new FormControl(null,[
                Validators.required,
            ]),
            password:new FormControl(null,Validators.required),
        });
    }

    checkForUserName(lastName){
        this.authService.checkUserName(lastName)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
}
