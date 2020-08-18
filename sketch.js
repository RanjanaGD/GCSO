var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
car=createSprite(50,200,50,50);
car.shapeColour=(80,80,80);
car.velocityX=speed;
car.debug=true;

wall=createSprite(1500,200,60,height/2);
wall.shapeColour=(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  drawSprites();
}