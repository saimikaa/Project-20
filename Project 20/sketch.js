var bg, sleep, brush, gym, eat, bath, move;
var astronaut;
var edges;

function preload(){
bg = loadImage("Astronaut's daily routine/iss.png");
sleep = loadImage("Astronaut's daily routine/sleep.png");
brush = loadImage("Astronaut's daily routine/brush.png");
gym = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png","Astronaut's daily routine/gym2.png");
eat = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png","Astronaut's daily routine/eat2.png");
bath = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png","Astronaut's daily routine/bath2.png");
move = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png","Astronaut's daily routine/move1.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 250);
  astronaut.addImage("sleep",sleep);
  astronaut.scale = 0.1;
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
}

function draw() {
  background(bg);  
  drawSprites();
  fill ("white");
  text ("instructions:",400,100);
  text ("Up Arrow = Brushing",400,120);
  text ("Down Arrow = Gymming",400,140);
  text ("Left Arrow = Eating",400,160);
  text ("Right Arrow = Bathing",400,180);
  text ("Mkey = Moving",400,200);

  if(keyDown(UP_ARROW)){
    astronaut.addImage("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

}