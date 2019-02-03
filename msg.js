class Msg{
    constructor(){
        this.warning = document.querySelector('.warning .warning_inside');
    }
    newMessage(msg) {
        this.warning.textContent = msg;
    }
}