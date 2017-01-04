export var Stats = (function () {
    function Stats(level, currentExp, wins, loses) {
        this.level = level;
        this.currentExp = currentExp;
        this.wins = wins;
        this.loses = loses;
    }
    return Stats;
}());
