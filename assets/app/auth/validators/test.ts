
import {AbstractControl, ValidatorFn} from "@angular/forms";
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: any): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        console.log(nameRe);
        const name = control.value;
        const no = nameRe;
        return no ? {'forbiddenName': {name}} : null;
    };
}