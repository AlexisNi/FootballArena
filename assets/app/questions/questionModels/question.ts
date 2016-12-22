/**
 * Created by alex on 18/10/2016.
 */
export  class Question{
    questionId:string;
    question:string;
    optiona:string;
    optionb:string;
    optionc :string;
    optiond:string;
    answer:string;
    isplayed:boolean;


    constructor(question:string,optionA:string,optionB:string,optionC:string,optionD:string,answer:string,questionId:string,isplayed?:boolean){
        this.questionId=questionId;
        this.question=question;
        this.optiona=optionA;;
        this.optionb=optionB;
        this.optionc=optionC;
        this.optiond=optionD;
        this.answer=answer;
        this.isplayed=isplayed;

    }


}