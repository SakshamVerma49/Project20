var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50, 200, 30, 20);

  wall.shapeColor = rgb(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}
function draw() {
  background(255,255,255);  
  drawSprites();
  
  if (car.isTouching(wall)) {
  // if(wall.x-car.x< (car.width + wall.width)/2){
    car.velocityX = 0;
    var def= 0.5*weight*speed*speed/22500;

    if(def < 100){
      car.shapeColor = "green";
    }else if(def>=100 && def<180){
      car.shapeColor = "yellow";
    }else{
      car.shapeColor = "red";
    }
  }
}