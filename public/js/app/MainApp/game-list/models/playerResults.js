/**
 * Created by alex on 09/12/2016.
 */
export var PlayerResult = (function () {
    function PlayerResult(winnerUserId, WinnerLastName, loserUserId, loserLasName) {
        this.winnerUserId = winnerUserId;
        this.WinnerLastName = WinnerLastName;
        this.loserUserId = loserUserId;
        this.loserLasName = loserLasName;
    }
    return PlayerResult;
}());
