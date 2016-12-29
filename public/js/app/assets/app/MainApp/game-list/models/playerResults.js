/**
 * Created by alex on 09/12/2016.
 */
export var PlayerResult = (function () {
    function PlayerResult(winnerUserId, WinnerLastName, loserUserId, loserLasName, winnerAward, loserAward) {
        this.winnerUserId = winnerUserId;
        this.WinnerLastName = WinnerLastName;
        this.loserUserId = loserUserId;
        this.loserLasName = loserLasName;
        this.winnerAward = winnerAward;
        this.loserAward = loserAward;
    }
    return PlayerResult;
}());
