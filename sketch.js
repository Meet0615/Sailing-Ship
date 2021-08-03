var sea,seaImg,shipImg3
function preload(){

  seaImg = loadImage("sea.png");
  shipImg3 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(900,700);
sea = createSprite(400,100,900,100)
sea.addImage(seaImg)
sea.scale = 0.5;
ship = createSprite(100,100,100,100);
ship.addAnimation("ship",shipImg3);
ship.scale = 0.2;
sea.velocityX = -5;
}

function draw() {
  background("white");
if(sea.x<0) {
  sea.x = 300;

}
  drawSprites();
 
 
}