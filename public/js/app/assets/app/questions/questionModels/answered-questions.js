/**
 * Created by alex on 18/10/2016.
 */
export var AnsweredQuestion = (function () {
    function AnsweredQuestion(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }
    return AnsweredQuestion;
}());
