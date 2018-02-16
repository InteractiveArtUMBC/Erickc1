function setup() {
    createCanvas(1000, 1000);
    background(200);
}

function draw(){
    if(mouseIsPressed){
        point(mouseX,mouseY);
    }

}