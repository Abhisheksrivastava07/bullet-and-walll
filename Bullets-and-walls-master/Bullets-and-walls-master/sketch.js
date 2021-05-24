// date 13 may 2021 / time 20:05
var bullet,bullet2,wall,wall2;
var speed,weight,thickness;

function setup() 
{
createCanvas(1600,400);
background("white");
 
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,50,5);
bullet2=createSprite(50,200,50,5);
wall=createSprite(1200,200,thickness,height/2);
wall2=createSprite(1200,200,thickness,height/2);
wall.shapeColor="gray";

bullet.velocityX = speed;
}

function draw() {
  background("black");  
  bullet.debug=true;
  bullet2=debug=true;
  wall.debug=true;
  wall2.debug=true;

  if(hasCollided(bullet,bullet2,wall,wall2)){
    bullet.velocityX=0;
    bullet2.velocityX=0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";

    if(damage>10){
      wall2.shapeColor="red";

    if(damage<10){
      wall2.shapeColor="green";
    }  
    }

    }
     
    }
  
  
  drawSprites();
}

function hasCollided(bullet1,bullet2,wall2,wall1){
    
  
  bulletRightEdge=bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;
   
  bullet2RightEdge=bullet1.x +bullet1.width;
  wall2LeftEdge=wall12.x;
  if (bullet2RightEdge>=wall2LeftEdge)
  {
      return true
  }
  return false;

}    
