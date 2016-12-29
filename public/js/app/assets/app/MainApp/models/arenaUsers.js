export var ArenaUsers = (function () {
    function ArenaUsers(arenaId, userId, inviteId, status_accept, lastName, user_played, invite_played, questions) {
        this.arenaId = arenaId;
        this.userId = userId;
        this.inviteId = inviteId;
        this.status_accept = status_accept;
        this.lastName = lastName;
        this.user_played = user_played;
        this.invite_played = invite_played;
        this.questions = questions;
    }
    return ArenaUsers;
}());
