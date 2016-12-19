/**
 * Created by alex on 18/10/2016.
 */
export var Question = (function () {
    function Question(question, optionA, optionB, optionC, optionD, answer, questionId, isplayed) {
        this.questionId = questionId;
        this.question = question;
        this.optionA = optionA;
        ;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.answer = answer;
        this.isplayed = isplayed;
    }
    return Question;
}());
