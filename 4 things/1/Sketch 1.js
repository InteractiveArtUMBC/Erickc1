
function setup() {
    createCanvas(1000, 1000);
    background(100);
}

function draw(){

   if(mouseIsPressed){
       ellipse(mouseX,mouseY,(mouseX+mouseY)/2,(mouseX+mouseY)/2);
   }
}