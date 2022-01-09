var bg,bgImg
var bottomGround
var topGround
var balloon,balloonImg

function preload(){
  bgImg = loadImage("assets/bg.png")
  balloonImg = loadImage("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

}
function setup(){
  bg=createSprite(165,485,11)
  bg.addImage(bgImg);
  bg.scale = 1.3

  bottomGround = createSprite(200,390,800,20)
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20)
  topGround.visible = true;

  balloon = createSprite(100,200,20,50)
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.2
}

function draw(){
  background("black")
  if(keyDown("space")){
    balloon.velocityY=-6;

  }
  balloon.velocityY=balloon.velocityY+2
  drawSprites();
  }
