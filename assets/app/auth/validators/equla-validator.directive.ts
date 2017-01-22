import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import {AuthService} from "../auth.service";
import {UserNameChecl} from "../models/userNameCheck";
@Directive({
    selector: "[asyncValidator][formControlName], [asyncValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => AsyncValidator), multi: true
        }
    ]
})

export default class AsyncValidator implements Validator {
    constructor(private  authService:AuthService){}
    validate( c : AbstractControl ) : Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
        return this.validateUniqueEmailObservable(c.value).debounceTime(500).first();
    }

    validateUniqueEmailObservable( email : string ) {
       let available: UserNameChecl;



        return new Observable(observer => {
            this.authService.checkUserName(email)
                .subscribe(
                    data =>
                    {
                        available=data;
                        if( available.available == false ) {
                            observer.next({asyncInvalid: true});
                        } else {
                            observer.next(null);
                        }

                    },
                    error => console.error(error)
                );

        });
    }

    validateUniqueEmailPromise( email : string ) {
        return new Promise(resolve => {
            setTimeout(() => {
                if( email === "alreadyExistsEmail@gmail.com" ) {
                    resolve({
                        asyncInvalid: true
                    })
                } else {
                    resolve(null);
                }
            }, 4000);
        })
    }

}