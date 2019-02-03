class Game {
    constructor(){ 
        this.wallet = new Wallet(200);
        this.statistic = new Statistics();
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.panels = [...document.querySelectorAll('.game .color')];
        this.inputBet = document.getElementById('bid');
        this.walletValue = document.querySelector('.panel .wallet');
        this.result = document.querySelector('.score .result');
        this.number = document.querySelector('.score .number');
        this.win = document.querySelector('.score .win');
        this.loss = document.querySelector('.score .loss');
        this.renderview();
        
    }
    startGame(){
        const bid = Math.floor(this.inputBet.value);
        const msg = new Msg();
        msg.newMessage("");
        if (bid < 1) return msg.newMessage("Podaj większą wartość!");
        if (!this.wallet.chceckCanPlayWallet(bid, this.wallet.getWalletMoney())) return msg.newMessage("Za mało pięniędzy w portfelu :C");
        const draw = new Draw;
        const panelsColors = draw.drawResult();
        const result = Result.chceckWin(panelsColors);
        const winMoney = Result.moneyWinInGame(result, bid)
    
        if (result){
            this.wallet.changeWalletvalue(winMoney, result);
            this.statistic.gameAddStat(result);
        }else{
            this.wallet.changeWalletvalue(bid, result);
            this.statistic.gameAddStat(result, true);
        }

        this.renderview(panelsColors);

    };
    renderview(draw = ["gray", "gray", "gray"], money = this.wallet.getWalletMoney()){

        this.panels.forEach((panel, index) =>{
            panel.style.backgroundColor = draw[index];
        })
    
        this.walletValue.textContent = money;
        this.number.textContent = this.statistic.gameStat.length;
        this.win.textContent = this.statistic.showGameWin();
        this.loss.textContent = this.statistic.showGameLosses();
    };
}


