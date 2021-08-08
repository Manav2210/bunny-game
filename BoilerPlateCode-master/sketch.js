var wormGroup;
var player;



function preload() {
  //load game assets
  bgimg = loadImage("imgs/bg.png");
  playerImage = loadImage("imgs/bunnyimg.png");
  snakeImage = loadImage("imgs/snake.png");
  carrot = loadImage("imgs/carrot.png")
}


function setup() {
  createCanvas(600,600);
  var bg= createSprite(300,300);
  bg.addImage(bgimg);
  bg.scale=4.4;
  player = createSprite(40,560,20,20);
  player.addImage(playerImage);
  player.scale=0.4;
  snakeGroup = new Group();


   edges = createEdgeSprites();
   target = createSprite(560,80,30,30);
   target.addImage(carrot);
   target.scale=0.2;
   obs1 = createSprite(600,200,80,20);
   obs2 = createSprite(200,170,80,20);
   obs4 = createSprite(400,240,80,20);
   obs3 = createSprite(500,310,80,20);
   obs5 = createSprite(300,380,80,20);
   obs6 = createSprite(100,450,80,20);
   obs1.velocityX = 7;
   obs2.velocityX = -4;
   obs3.velocityX = 2;
   obs4.velocityX = -6;
   obs5.velocityX = 4;
   obs6.velocityX = -9;
   obs1.shapeColor = "red";
    obs2.shapeColor = "red";
    obs3.shapeColor = "red";
    obs4.shapeColor = "red";
    obs5.shapeColor = "red";
    obs6.shapeColor = "red";
    player.shapeColor = "pink";
    target.shapeColor = "orange";
}

function draw() {



  generateSnakes();

  for(var i =0 ; i<snakeGroup.length ; i ++){
    var temp =(snakeGroup).get(i);
    if(player.isTouching(temp)){
      player.x= 40
      player.y= 560

    }
  }



  background("black");
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs6.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);


if(keyDown("up")){
  player.y = player.y-3;
}
if(keyDown("down")){
  player.y = player.y+3;
}
if(keyDown("left")){
  player.x = player.x-3;
}
if(keyDown("right")){
  player.x = player.x+3;
}
if(player.isTouching(target)){
  text("YOU WIN!!!",250,250,100,100);
textSize(20);
  player.velocityX =0
  player.velocityY =0
  obs2.velocityX = 0;
  obs1.velocityX = 0;
    obs3.velocityX = 0;
    obs5.velocityX = 0;
    obs4.velocityX = 0;
    obs6.velocityX = 0;
    snake.destroy();
}
if(player.isTouching(obs1)){
  text("YOU LOSE!!!",300,300);
  obs1.velocityX = 0;
  textSize(20);
  snake.destroy();
}
if(player.isTouching(obs2)){
  text("YOU LOSE!!!",300,300);
  obs2.velocityX = 0;
  textSize(20);
  snake.destroy();
}

if(player.isTouching(obs3)){
  text("YOU LOSE!!!",300,300);
  obs3.velocityX = 0;
  textSize(20);
  snake.destroy();
}

if(player.isTouching(obs4)){
  text("YOU LOSE!!!",300,300);
  obs4.velocityX = 0;
  textSize(20);
  snake.destroy();
}

if(player.isTouching(obs5)){
  text("YOU LOSE!!!",300,300);
  obs5.velocityX = 0;
  textSize(20);
  snake.destroy();
}

if(player.isTouching(obs6)){
  text("YOU LOSE!!!",300,300);
  obs6.velocityX = 0;
  textSize(20);
  snake.destroy();
}

  drawSprites();
}





function generateSnakes() {
if (frameCount % 65 == 0) {
  var snake = createSprite(600,random(200,400),5,5);
  snake.addImage(snakeImage);
  snake.scale=0.25;
  console.log(frameCount);
  snake.velocityX = random(-5,-8);

  snakeGroup.add(snake);
}
}
