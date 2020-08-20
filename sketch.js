var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(10,11);
  weight=random(400,1500);

car=createSprite(50,200,50,50);
car.shapeColour=(80,80,80);
car.velocityX=speed;
//car.debug=true;

wall=createSprite(1500,200,60,height/2);
wall.shapeColour=(80,80,80);


  

  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22509;
    
    if(deformation>180){
      car.shapeColor="red";
    }
    
    if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
    }
    
    if(deformation<100){
      car.shapeColor="green";
    }
    
    }
    









  drawSprites();
}
