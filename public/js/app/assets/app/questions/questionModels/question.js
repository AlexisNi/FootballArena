/**
 * Created by alex on 18/10/2016.
 */
export var Question = (function () {
    function Question(question, optionA, optionB, optionC, optionD, answer, questionId, isplayed) {
        var optionOptionArray = [optionA, optionB, optionC, optionD];
        for (var i = optionOptionArray.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [optionOptionArray[j], optionOptionArray[i - 1]], optionOptionArray[i - 1] = _a[0], optionOptionArray[j] = _a[1];
        }
        this.optiona = optionOptionArray[0];
        this.optionb = optionOptionArray[1];
        this.optionc = optionOptionArray[2];
        this.optiond = optionOptionArray[3];
        this.questionId = questionId;
        this.question = question;
        this.answer = answer;
        this.isplayed = true;
        var _a;
    }
    return Question;
}());
