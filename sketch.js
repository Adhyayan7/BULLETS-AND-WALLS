var bullet , wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet  = createSprite(50,200,50,50);
  bullet.shapeColor = "1";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";
  thickness=random(22,83);
}

function draw() {
  background(80,80,80);
  bullet.velocityX = 50;
 if(wall.x-bullet .x < (bullet .weight+wall.weight)/2){
  bullet .velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
   bullet .shapeColor = color(255,0,0);
  }
   if(deformation<180 && deformation > 100){
    bullet .shapeColor = color(230,230,0);
   }
   if(deformation<100){
    bullet .shapeColor = color(0,255,0);
   }
   thickness=random(22,83);
   speed=random(223,321);
 }

 bullet .collide(wall);
  drawSprites();
}