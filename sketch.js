var bckImg;
var player1, player1Img;

function preload() {
  bckImg = loadImage("assets/bkg.png");
  player1Img = loadImage("assets/blue/stance1.png");
  player1Punch = loadImage("assets/blue/punch.png");
  player1Move = loadAnimation("assets/blue/stance1.png", "assets/blue/stance2.png");

  player2Img = loadImage("assets/red/stance1.png");
  player2Punch = loadImage("assets/red/punch.png");
  player2Move = loadAnimation("assets/red/stance1.png", "assets/red/stance2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player1 = createSprite(width/4, height/1.5, 50, 100)
  player2 = createSprite(width/1.5, height/1.5, 50, 100)
}

function draw() {
  background(bckImg);
  edges = createEdgeSprites();

  player1.bounceOff(edges);
  player2.bounceOff(edges);

  player1.addImage(player1Img);
  player1.scale = 2;
  player1.y = height/1.5;

  player2.addImage(player2Img);
  player2.scale = 2;
  player2.y = height/1.5;

  if(keyWentDown("A")){
    player1.velocityX = -20;
    player1.addAnimation("move1", player1Move)
    player1.changeAnimation("move1");
  }
  if(keyWentDown("D")){
    player1.velocityX = 20;
    player1.addAnimation("move1", player1Move)
    player1.changeAnimation("move1");
    player1.scale = 1.5;
    player1.y -= 40;
  }
  if(keyDown("space")){
    player1.addImage(player1Punch);
    player1.changeImage(player1Punch);
  }

  if(keyWentDown(LEFT_ARROW)){
    player2.velocityX = -20;
    player2.addAnimation("move2", player2Move)
    player2.changeAnimation("move2");
  }
  if(keyWentDown(RIGHT_ARROW )){
    player2.velocityX = 20;
    player2.addAnimation("move2", player2Move)
    player2.changeAnimation("move2");
    player2.scale = 1.5;
    player2.y -= 40;
  }
  if(keyDown(DOWN_ARROW)){
    player2.addImage(player2Punch);
    player2.changeImage(player2Punch);
  }


  drawSprites();
}