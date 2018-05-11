var playerY = 250;
var dCount = 0;

var rock1;
var rock2;
var rock3;
var rock4;
var rock5;
var rock6;
var rock7;
var rock8;

var gem1;
var gem2;

function setup() {
    createCanvas(1000, 500);
    frameRate(30);
    rock1 = new Crush();
    rock2 = new Crush();
    rock3 = new Crush();
    rock4 = new Crush();
    rock5 = new Crush();
    rock6 = new Crush();
    rock7 = new Crush();
    rock8 = new Crush();
    gem1 = new Gem();
    gem2 = new Gem();
}

function draw(){
    background(200);

    fill(255,0,0)
    rock1.move();
    rock1.display();

    rock2.move();
    rock2.display();

    rock3.move();
    rock3.display();

    rock4.move();
    rock4.display();
    
    rock5.move();
    rock5.display();

    rock6.move();
    rock6.display();

    rock7.move();
    rock7.display();

    rock8.move();
    rock8.display();
    fill(0,255,0);
    gem1.move();
    gem1.display();

    gem2.move();
    gem2.display();

    fill(0,0,255);
    if(mouseIsPressed){
        playerY-=10;
        ellipse(150,playerY,30,30);
        if(playerY<20){
            playerY=250;
            dCount-=10;
        }
    }
    else{
        playerY+=7;
        ellipse(150,playerY,30,30);

        if(playerY>height-20){
            playerY=250;
            dCount-=10;
        }
    }
    textAlign(CENTER);
    textSize(24);
    stroke(255);
    text(dCount, 0, 10, 960, 30);
    dCount +=1;
}

//crush class

function Crush(){
    this.y = random(height);
    this.x = 1100;
    this.diam = random(30,150);
    this.speed = random(10,30);

    this.move = function(){
        this.x -= this.speed;
        if(this.x < -(this.diam)){
            this.x = 1100;
            this.y = random(height);
            this.diam = random(30,150);
            this.speed = random(10,30);
        }
        if(this.x>(150-(this.diam/2))&&this.x<(150+(this.diam/2))){
            if(this.y>(playerY-(this.diam/2))&&this.y<(playerY+(this.diam/2))){
                playerY=250;
                dCount -= 100;
            }
        }
    }

    this.display = function(){
        ellipse(this.x,this.y,this.diam,this.diam);
    }
}

//gem class

function Gem (){
    this.y = random(height);
    this.x = 1100;
    this.diam = random(30,150);
    this.speed = random(10,30);

    this.move = function(){
        this.x -= this.speed;
        if(this.x < -(this.diam)){
            this.x = 1100;
            this.y = random(height);
            this.diam = random(30,50);
            this.speed = random(10,30);
        }
        if(this.x>(150-(this.diam/2))&&this.x<(150+(this.diam/2))){
            if(this.y>(playerY-(this.diam/2))&&this.y<(playerY+(this.diam/2))){
                this.x = 1100;
                this.y = random(height);
                this.diam = random(30,50);
                this.speed = random(10,30);
                dCount += 100;
            }
        }
    }
    this.display = function(){
        rect(this.x,this.y,this.diam,this.diam);
    }
}   
