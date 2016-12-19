import { Component } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { User } from "./user";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
export var LoginComponent = (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authservice.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('mainApp');
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'quiz-signin',
                    templateUrl: './login.component.html'
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return LoginComponent;
}());
