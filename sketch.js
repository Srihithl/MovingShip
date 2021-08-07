var ship,ship_moving
var sea,seaImage
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20)
  sea.addImage(seaImage);

  ship = createSprite(50,270,100,100);
  ship.addAnimation("movingShip",ship_moving);

  ship.x = 70;
  ship.scale = 0.2;


}

function draw() {
  background("blue");
  drawSprites();

  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = sea.width/2
  }

}