class Wallet {
    constructor(money){
        let _money = money;
        this.getWalletMoney = () => _money;
        this.chcekCanPlay = (bet) => {
            if (bet > 0) return true;
            return false; 
        };
        this.chceckCanPlayWallet = (bet, moneyInWallet) =>{
            if (bet <= moneyInWallet) return true;
            return false;
        };
        this.changeWalletvalue = (bet, result = true) =>{
            if(result) return _money += bet;
            return _money -= bet;
        }
    }
}

