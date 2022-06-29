var trex, trex_running, edges;
var groundImage, spriteGround, groundMov;
var wall;
var floor;
var nube;
var nubesimg;
var cactus, catuses;
var obstacle1, obstacle2, obstacle3, obstacle4;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage ("ground2.png")
  nubesimg = loadImage("cloud.png")
  obstacle1 = loadImage("img/obstacle1.png");
  obstacle2 = loadImage("img/obstacle2.png");
  obstacle3 = loadImage("img/obstacle3.png");
  obstacle4 = loadImage("img/obstacle6.png");
} 

function setup(){
  
  createCanvas(600,200);
 
  //crear sprite de Trex  
  spriteGround= createSprite(350,180 ,10,10)
  trex = createSprite(50,160,20,50);
  wall = createSprite(300,50,2000 ,10);
  floor = createSprite(60,190,2000,10);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites ();
  spriteGround.velocityX= -5;
  spriteGround.addImage("imgground",groundImage)
  //agregar tamaño y posición al Trex
  trex.scale = 0.5; 
  trex.x = 50
  wall.visible =  false;
  floor.visible = false;


} 


function nube(){
    if(frameCount % 80 == 0){
    nubes = createSprite(650,Math.round(random(12, 50)),30,30);
    nubes.velocityX = -9;
    nubes.addImage("imgnube", nubesimg);
    nubes.lifetime= 75;
    }
    }

    function cactus(){
      if(frameCount % 60 ==0){
        cactusSprite = createSprite(650,160,10,10);
        cactusSprite.velocityX = -9;
        cactusSprite.scale = 0.7  
        switch(Math.round(random(1,4))){
        case 1:
          cactusSprite.addImage("cactus1", obstacle1)
  
        break;
        case 2:
            cactusSprite.addImage("cactus2", obstacle2)
        break
        case 3:
            cactusSprite.addImage("cactus3", obstacle3)
        break;
        case 4:
            cactusSprite.addImage("cactus4", obstacle4)
        break;
  
        default:
          break;
        }
        cactusSprite.lifetime = 90;
      }
    }



function draw(){
  nube();
  cactus();

  //establecer color de fondo.
  background("#fffff"); 
 
  //hacer que el  Trex salte al   presionar la barra espaciadora 
  if(trex.collide(floor)){
    if(keyDown("space")){
      trex.velocityY = -10;
    }}

  if(keyDown(40)){
    trex.velocityY = trex.velocityY +  5;
  }
  trex.velocityY = trex.velocityY + 0.5;
   
  //evitar que el Trex caiga
  trex.collide(wall);
  trex.collide(edges[3]);
  trex.collide(floor);

  drawSprites();
  if(spriteGround.x<-900){
     spriteGround.x=300
  }
}


