

var city;
var boy,boy_running;

var ground;

function preload(){
  cityImage = loadImage("city.jpg")
  boy_running = loadAnimation("boy.gif")
  
  bellImage = loadImage("bell.gif")
 
  bell1Image = loadImage("wire.gif")
  
  headhogImage = loadImage("headhog.gif")
  doorImage = loadImage("door.gif")
  apple2Image = loadImage("images/apple2.png")
  
  
  jumpSound = loadSound("jump.wav")
  gameOverImage = loadImage("images/gameOver.png")
  gameOver1Image = loadImage("gameOver.gif")
  
  
 
  
}

function setup(){
 createCanvas(1200,600)

 city = createSprite(800,300,20,10)
 city.addImage(cityImage)
 city.scale = 2;
 city.velocityX = -0.25;

boy = createSprite(100,400,20,10)
boy.addAnimation("running",boy_running)



bell = createSprite(500,550,20,10);
bell.addImage(bellImage)
bell.scale = 0.2;
bell.velocityX = -1;



bell1 = createSprite(800,550,20,10);
bell1.addImage(bell1Image)
bell1.scale = 0.2;
bell1.velocityX = -1;


ground1 = createSprite(500,550,100,70);
ground1.visible = false;

headhog = createSprite(1000,550,20,10);
headhog.addImage(headhogImage)
headhog.scale = 0.3;
headhog.velocityX = -3;



door = createSprite(1090,350,20,10);
door.addImage(doorImage)
door.scale = 0.7;
door.visible = false;


apple2 = createSprite(800,500,20,10);
apple2.addImage(apple2Image)



gameOver = createSprite(600,300,20,10);
gameOver.addImage(gameOverImage);
gameOver.visible = false;

gameOver1 = createSprite(600,300,20,10);
gameOver1.addImage(gameOver1Image);
gameOver1.visible = false;

ground = createSprite(100,600,1800,10);
ground.visible = false;


}

function draw(){
background(255)
if(keyIsDown(RIGHT_ARROW)){
  boy.velocityX = 1;
  
}
if(keyIsDown(LEFT_ARROW)){
  boy.velocityX = -1;
}
if(keyIsDown(UP_ARROW)){
  boy.velocityY = -1;
  jumpSound.play();
}
if(keyIsDown(DOWN_ARROW)){
  boy.velocityY = 1;
}

boy.collide(ground);

if(boy.isTouching(bell)){
  ground1.visible = true;
  boy.visible = false;
  bell.visible = false;
  bell1.visible = false;
  headhog.visible = false;
  apple2.visible = false;
  city.velocityX = 0;
  gameOver.visible = true;
 
}
if(boy.isTouching(bell1)){
  
  boy.visible = false;
  apple2.visible = false;
  bell.visible = false;
  bell1.visible = false;
  city.velocityX = 0;
  headhog.visible = false;
  gameOver.visible = true;
  
}
if(boy.isTouching(apple2)){
  
  boy.visible = true;
  door.visible = true;
  bell.visible = false;
  apple2.visible = false;
  bell1.visible = false;
  city.velocityX = 0;
  headhog.visible = false;
  
}
if(boy.isTouching(door)){
  gameOver1.visible = true;
}



drawSprites();
}
