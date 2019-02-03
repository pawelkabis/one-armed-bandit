class Statistics {
    constructor(){
        this.gameStat = [];
    }
    gameAddStat(win=false, losses=false) {
        this.gameStat.push({win:win, losses:losses})
    }
    showGameWin(){
        let wins = this.gameStat.filter(value => value.win);
        return wins.length;
    }
    showGameLosses(){
        let losses = this.gameStat.filter(value => value.losses);
        return losses.length;
    }
}


