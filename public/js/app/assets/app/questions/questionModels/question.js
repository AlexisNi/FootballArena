/**
 * Created by alex on 18/10/2016.
 */
export var Question = (function () {
    function Question(question, optionA, optionB, optionC, optionD, answer, questionId, isplayed) {
        this.questionId = questionId;
        this.question = question;
        this.optiona = optionA;
        ;
        this.optionb = optionB;
        this.optionc = optionC;
        this.optiond = optionD;
        this.answer = answer;
        this.isplayed = isplayed;
    }
    return Question;
}());
