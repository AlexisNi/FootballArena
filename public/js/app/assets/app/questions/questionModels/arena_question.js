/**
 * Created by alex on 18/10/2016.
 */
export var ArenaQuestion = (function () {
    function ArenaQuestion(arenaId, userId, question) {
        this.arenaId = arenaId;
        this.userId = userId;
        this.question = question;
    }
    return ArenaQuestion;
}());
