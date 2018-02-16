function setup() {
  createCanvas(1000,1000)
}

function draw() {

  


  
  if(mouseIsPressed){
  
    ellipse(mouseX,mouseY,90,90);
    fill(255,0,255);
    ellipse(mouseX+90,mouseY+90,90,90);
    fill(255,255,0);
    ellipse(mouseX-90,mouseY+90,90,90);
    fill(0,255,255);
    ellipse(mouseX-90,mouseY-90,90,90);
    fill(255,0,0);
    ellipse(mouseX+90,mouseY-90,90,90);
    fill(0,255,0);

    /*
    x=mouseX;
    y=mouseY;
    i=1;
    while(i<=2){
      ellipse(x,y,90,90);
      ellipse(-x,-y,90,90);
      stroke(255,0,255);
      x=x+100;
      y=y+100;
      i=i+1;
    
    }*/
  }
  else{
    fill(255);
  }

}