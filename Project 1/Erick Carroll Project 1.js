function setup() {
    createCanvas(1000, 600);
    background(200);
}

function draw(){
   line(500,20,250,500);
   line(500,20,750,500);
   line(250,250,800,250);
    if(mouseX>0&&mouseX<251&&mouseY>0&&mouseY<251){
        line(0,0,mouseX,mouseY);
    }

   fill('blue');
   rect(800,110,70,70);
   fill('purple');
   rect(800,180,70,70);
   line(300,180,800,180);
  
   fill(100,9,255);
   ellipse(500,100,70,70);
   fill(0,255,9);
   ellipse(500,100,40,40);



   
   if(mouseIsPressed){
    rand = random(2)
    x = random(250,751);
    y = random(300,500);
    if(rand < 1){
        fill(random(255),random(255),random(255));
        ellipse(x,y,random(100),random(100));
    }
    else{
        fill(random(255),random(255),random(255));
        rect(x,y,random(100),random(100));
    }
   }

}