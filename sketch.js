var monkey,ground,bananaGroup


function setup() {
  createCanvas(400,400);

  monkey = createSprite (20,365,30,30);
  ground = createSprite (200,390,800,20)
}

function draw() {
  background(220);

  

  ground.velocityX = -2;
   if (ground.x < 150){
    ground.x = ground.width/2;
   }
  monkey.collide(ground)

  if(keyDown("space") && monkey.y > 349){
          monkey.velocityY = -15 ;
        }
    monkey.velocityY = monkey.velocityY + 0.9;    
   console.log(World.frameCount)
   spawnBanana()


  //monkey.debug=true


​    


  bananaGroup = new Group()
  if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach()
  }

  drawSprites();
}
function spawnBanana(){
  if(World.frameCount%80 === 0){
   var banana = createSprite (380,400,20,20)
  banana. velocityX = -6
   banana.y= Math.round(random(height-100,height-180));
   banana.lifetime=100
  bananaGroup.add(banana)
  }
}



