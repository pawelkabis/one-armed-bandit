class Result{
    constructor(){
    }
    static moneyWinInGame(result, bet){
        if (result){
            return 3*bet;
        }
        return 0;
    }
    static chceckWin(colors){ 
        if (colors[0] === colors[1] && colors[1] == colors[2] || colors[0] !== colors[1] && colors[1] !== colors[2] && colors[0] !== colors[2]) return true;
        return false;
    }
}
