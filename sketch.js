
var thickness,wall;

var bullet,speed,weight;

function setup() {
 
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  
  thickness = random(22,83);
  
  bullet=createSprite(50, 200, 25, 10);
  bullet.shapeColor = "white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  
  

  if(hasCollided(bullet, wall)) {

  bullet.velocityX = 0;
  
  var Damge = 0.5 * weight * speed* speed/ (thickness * thickness * thickness);

  if(Damge < 10){

 wall.shapeColor = "green";

  }

if(Damge > 10) {

wall.shapeColor = "red";


}


if(Damge<100){
  wall.shapeColor = color(0,255,0);
}


  }
  
  
  
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
   bulletRightEdge= Lbullet.x + Lbullet.width;
   wallLeftEdge = Lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     
    return true
   }
   {
     return false;
   }

  }