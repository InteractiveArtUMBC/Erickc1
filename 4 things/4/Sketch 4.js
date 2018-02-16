function setup(){
    createCanvas(1000,1000);
    background(240);
}

function draw(){
    if(mouseIsPressed){
        rand = random(2)
        x = random(0,1000);
        y = random(0,1000);
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