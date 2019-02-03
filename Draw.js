class Draw {
    constructor(){
        this.options = ["red", "blue", "green"];
        let _drawResult = this.drawResult();
        this.getDrawresult = () => _drawResult;
        
    }
    drawResult() {
        let colorResults = [];
        for (let i = 0; i < this.options.length; i++) {
            const randomIndex = Math.floor(Math.random()*this.options.length);
            colorResults.push(this.options[randomIndex]);
        }
        return colorResults;
    }
}


