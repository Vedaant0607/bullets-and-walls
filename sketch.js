var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, height/2);
  bullet = createSprite(50, 200, 50, 50);
  thickness = random(25,90);
  speed = random(223,321);
  weight = random(30,50);
}

function draw() {
  background("black");
  wall.shapeColor=color ("white"); 

  bullet.velocityX = speed;

  if (hasCollided(bullet , wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      bullet.shapeColor=color ("red");
    }
    if(damage < 10){
      bullet.shapeColor=color ("green");
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width ;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }else{
  return false;
}}