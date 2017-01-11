import { Component } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { User } from "./user";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
export var SignUpComponent = (function () {
    function SignUpComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignUpComponent.prototype.onSubmit = function () {
        var user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SignUpComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn() == true) {
            this.router.navigateByUrl('mainApp');
        }
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
            ]),
            password: new FormControl(null, Validators.required),
        });
    };
    SignUpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'quiz-signUp',
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignUpComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return SignUpComponent;
}());
