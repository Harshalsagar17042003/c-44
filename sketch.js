
var player, playerRunning, playerJumpping, ob1,ob2, ob1Img,ob2Img;
var ground,groundImg, obstaclesGroup;
var canvas, invisibleGround;
var obstacle;
var score;


function preload(){
  groundImg = loadImage("road.png");
  playerRunning = loadAnimation("playerRun1.png", "playerRun2.png", "playerRun3.png");
  playerJumpping = loadAnimation("Jump/player1.png", "Jump/player2.png", "Jump/player3.png", "Jump/player4.png", "Jump/player5.png", "Jump/player6.png", "Jump/player7.png", "Jump/player8.png", "Jump/player9.png");
  ob1Img = loadImage("ob1.png");
  ob2Img = loadImage("ob2.png");
}

function setup() {
canvas = createCanvas(1000,500);

ground = createSprite(500,450,1400,1400);
ground.addImage(groundImg);
ground.scale = 1.5
ground.velocityX = -4;


player = createSprite(150,380,20,20);
player.addAnimation("Running", playerRunning);
player.addAnimation("jumping",playerJumpping)


obstaclesGroup = createGroup();

 
invisibleGround = createSprite(100,450,500,20);
invisibleGround.shapeColor="red"
invisibleGround.visible = false;

score = 0;

}

function draw() {
  background("grey");

  fill("black");
  textSize(40);
  text("Score: "+ score, 800,50);

  if (ground.x < 400){
    ground.x = ground.width/2;
  }
  
  //camera.position.x = player.x+300;
  //camera.position.y = player.y-125;


  if(keyDown("UP_ARROW") && player.y >= 350){
     //player.addAnimation("Jumping", Jumpping);
     player.changeAnimation("jumping",playerJumpping)
      player.velocityY = -12;
      
  }

  player.velocityY = player.velocityY + 0.8
  if( player.velocityY > 0)
  {
  player.changeAnimation("Running", playerRunning);
  }

  player.collide(invisibleGround);
  
  if(keyDown("Down_ARROW")){
    
  }

    
  if(keyDown("space")){
      
  }

  spawnobstacles()
   //obstaclesGroup.setLifetimeEach(-1);
   
   //obstaclesGroup.setVelocityXEach(0);


  drawSprites()
}


function spawnobstacles()
{

  if (frameCount % 100 === 0){
    var obstacle = createSprite(1000,450,10,40);
    //obstacle.velocityX = -(6 + score/100);
     obstacle.velocityX = -10;
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(ob1Img);
               break;
       case 2: obstacle.addImage(ob2Img);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.02;
     obstacle.lifetime = 800;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
}





