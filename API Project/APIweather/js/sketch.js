// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var weather;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=51117d69928e95f5203664340e6d7b3c';
   //http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=51117d69928e95f5203664340e6d7b3c
  weather = loadJSON(url);
}
function setup() {
  createCanvas(400,400);
  console.log(weather);
}
function draw() {
  background(199,199,199);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var weathertemp = weather.main.temp;
  var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
  var cityname = weather.name;
  var windspeed = weather.wind.speed;
  var weathertype = weather.weather[0].main;
  var description = weather.weather[0].description;
  var humidity = weather.main.humidity;
  //var earthquakeName = earthquakes.features[0].properties.place;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  //ellipse(200,100,windspeed*50,windspeed*50);
  fill(0,0,0);
  textAlign(CENTER);
 // text(weathertemp, 0, height - 200, width, 30);
  textSize(24);
  stroke(255);
  text(cityname, 0, height - 200, width, 30);
  //text(humidity, 0, height - 140, width, 30);
  text(weathertype, 0, height - 140, width, 30);
  //text(description, 0, height-30, width, 30);
  fill(255,255,255);
  var i = 0;
  x=10;
  y=10;
  for(i=0;i<humidity;i++){
    ellipse(x,y,5,5);
    y=y+10;
    if(y>50){
      y=10;
      x=x+10;
    }
    if(x>200){
      i=i+humidity;
    }
  }
  fill(0,0,255);
  triangle(180,100,220,100,200,135);
  if(weathertemp>40){
    fill(0,205,255);
    triangle(170,105,190,140,150,140);
  }
  if(weathertemp>50){
    fill(103,255,79);
    triangle(150,150,190,150,170,185);
  }
  if(weathertemp>60){
    fill(255,255,0);
    triangle(180,195,220,195,200,160);
  }if(weathertemp>70){
    fill(255,145,0);
    triangle(250,150,210,150,230,185);
  }if(weathertemp>80){
    fill(255,0,0);
    triangle(210,140,250,140,230,105);
  }
}

