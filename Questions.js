class AnswerBox {
    constructor() {
        this.factor1 = Math.round(random(0,10))
        this.factor2 = Math.round(random(0,10))
        this.answer1 = this.factor1, "+", this.factor2


        this.answerBox = createInput(this.answer1)
        this.answerBox.position(width / 2 - 110, height / 2 - 80)
        this.answerBox.style("background","white")

        this.button = createButton('Submit');
        this.button.position(470,230);
        this.button.style('background', 'lightgrey'); 
        

    }

    display() {
        this.button.mousePressed(() => {
            if(system.authenticate(answer1,this.answerBox.value())){
                this.button.hide();
                this.answerBox.hide();
 
           }
        }

        )}
}

