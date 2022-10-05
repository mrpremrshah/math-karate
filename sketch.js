var dojo
var kid, kidobj;
var equations

function preload() {
    dojoback = loadImage("dojo2.png")
    kid = loadImage("karateKid.png")




}

function setup() {
    createCanvas(windowWidth, windowHeight)
  

    kidobj = createSprite(windowWidth/2,windowHeight/2+170,10,10)
    kidobj.addImage(kid)
    kidobj.scale = 0.75

}



function draw() {

    background(dojoback)
    image(dojoback,10,10,10,10)

    equations = new AnswerBox()
    equations.display();


    drawSprites();
}
