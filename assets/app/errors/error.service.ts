import {Error} from "./error.model";
import {EventEmitter} from "@angular/core";
/**
 * Created by alex on 16/01/2017.
 */
export class ErrorService{
    errorOccurred=new EventEmitter<Error>();

    handleError(error:any){
        const  errorData=new Error(error.title,error.message);
        this.errorOccurred.emit(errorData)
    }

}