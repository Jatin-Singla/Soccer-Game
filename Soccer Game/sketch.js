var pitch, soccer_ball, buttler, buttler2, fat_goalie, fat_goalie2, goal
var soccerBall, player1, player2, fatGoalie, fatGoalie2, goal1, goal2
var p1Score = 0
var p2Score = 0
var p2Scored = false
var player1Kicked = false
var player2Kicked = false
var edgeSprites
var ballVelocityX = 0
var ballVelocityY = 0

function preload() {
pitch = loadImage("PITCH.jpeg")
soccer_ball = loadImage("SOCCER BALL.png")
buttler = loadImage("BUTTLER.png")
buttler2 = loadImage("BUTTLER 2.png")
fat_goalie = loadImage("FAT GOALIE.png")
fat_goalie2 = loadImage("FAT GOALIE 2.png")
goal = loadImage("GOAL.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  soccerBall = createSprite(windowWidth/2, windowHeight/2, 100, 100)
  player1 = createSprite(windowWidth/2 - 150, windowHeight/2, 100, 100)
  player2 = createSprite(windowWidth/2 + 150, windowHeight/2, 100, 100)
  fatGoalie = createSprite(150,windowHeight/2, 100, 100)
  fatGoalie2 = createSprite(windowWidth-150,windowHeight/2, 100, 100)
  goal1 = createSprite(30, windowHeight/2, 100,100)
  goal2 = createSprite(windowWidth - 30, windowHeight/2, 100, 100)
  edgeSprites = createSprite(windowWidth/2,windowHeight/2, windowWidth-90, windowHeight-70)
  
  edgeSprites.visible = false



  soccerBall.setCollider("circle",0,0,110)
  player1.setCollider("rectangle",0,0,60,200)
  player2.setCollider("rectangle",0,0,60,200)
  fatGoalie.setCollider("rectangle",0,0,90,200)
  fatGoalie2.setCollider("rectangle",0,0,90,200)

  soccerBall.addImage(soccer_ball)
  soccerBall.scale = 0.2
  player1.addImage(buttler)
  player1.scale = 0.6
  player2.addImage(buttler2)
  player2.scale = 0.6
  goal1.addImage(goal)
  goal2.addImage(goal)
  fatGoalie.addImage(fat_goalie)
  fatGoalie.scale = 0.6
  fatGoalie2.addImage(fat_goalie2)
  fatGoalie2.scale = 0.6
  fatGoalie.velocityY = random(2,4)
  fatGoalie2.velocityY = random(-2,-4)
}

function draw() {
  background(pitch);

var edges = createEdgeSprites()
push()
fill("blue")
stroke("lightblue")
strokeWeight(5)
p1Circle = ellipse(player1.x,player1.y,60,60)

fill("darkred")
stroke("red")
strokeWeight(5)
p2Circle = ellipse(player2.x,player2.y,60,60)
pop()

soccerBall.velocityY = ballVelocityY
soccerBall.velocityX = ballVelocityX

if(ballVelocityX > 0){
  ballVelocityX = ballVelocityX/2
}
if(ballVelocityY > 0){
  ballVelocityY = ballVelocityY/2
}
if(ballVelocityX<1){
  ballVelocityX = 0
}
if(ballVelocityY<1){
  ballVelocityY = 0
}

  if(!soccerBall.isTouching(edgeSprites)){
if(player1Kicked === true){
soccerBall.x = player2.x
soccerBall.y = player2.y
}
if(player2Kicked === true){
  soccerBall.x = player1.x
  soccerBall.y = player1.y
}
  }

if(fatGoalie.y < windowHeight/2 - 100){
fatGoalie.velocityY = random(2,4)
}
if(fatGoalie.y > windowHeight/2 + 100){
  fatGoalie.velocityY = random(-2,-4)
}
if(fatGoalie2.y < windowHeight/2 - 100){
    fatGoalie2.velocityY = random(2,4)
}
  if(fatGoalie2.y > windowHeight/2 + 100){
      fatGoalie2.velocityY = random(-2,-4)
}
fill("blue")
textSize(20)
text("P1 score: "+ p1Score, 70,100)
fill("red")
text("P2 score: "+ p2Score, windowWidth-150,100)


  player1.bounceOff(edges)
  player2.bounceOff(edges)

if(player2.isTouching(soccerBall)){

if(keyDown(UP_ARROW)){
player2.y -=5

}
if(keyDown(DOWN_ARROW)){
  player2.y +=5

}
if(keyDown(RIGHT_ARROW)){
  player2.x +=5

}
if(keyDown(LEFT_ARROW)){
    player2.x -=5

}
}
else{
  if(keyDown(UP_ARROW)){
    player2.y -=10
    
    }
    if(keyDown(DOWN_ARROW)){
      player2.y +=10
    
    }
    if(keyDown(RIGHT_ARROW)){
      player2.x +=10
    
    }
    if(keyDown(LEFT_ARROW)){
        player2.x -=10
    
    }
}
if(player1.isTouching(soccerBall)){
if(keyDown("w")){
  player1.y -=5

  }
  if(keyDown("s")){
    player1.y +=5

  }
  if(keyDown("d")){
    player1.x +=5

  }
  if(keyDown("a")){
      player1.x -=5

  }
}
else{
  if(keyDown("w")){
    player1.y -=10
  
    }
    if(keyDown("s")){
      player1.y +=10
  
    }
    if(keyDown("d")){
      player1.x +=10
  
    }
    if(keyDown("a")){
        player1.x -=10
  
    }
}
if(player1.isTouching(soccerBall)){
  player1Kicked = true
  player2Kicked = false
}

if(player2.isTouching(soccerBall)){
  player1Kicked = false
  player2Kicked = true
}
/*
if(!soccerBall.isTouching(edgeSprites)&&soccerBall.y<80){
  soccerBall.y += 10
}
if(!soccerBall.isTouching(edgeSprites)&&soccerBall.y>windowHeight-80){
  soccerBall.y -= 10
}
if(!soccerBall.isTouching(edgeSprites)&&soccerBall.x<100){
  soccerBall.x += 10
}
if(!soccerBall.isTouching(edgeSprites)&&soccerBall.x>windowWidth-100){
  soccerBall.x -= 10
}
*/
  if(player1.isTouching(soccerBall)&&keyDown("w")){
    ballVelocityY = -40
  }
  if(player1.isTouching(soccerBall)&&keyDown("s")){
    ballVelocityY = 40
  }
  if(player1.isTouching(soccerBall)&&keyDown("a")){
    ballVelocityX = -40
  }
  if(player1.isTouching(soccerBall)&&keyDown("d")){
    ballVelocityX = 40
  }

  if(player2.isTouching(soccerBall)&&keyDown("up")){
    ballVelocityY = -40
      }
      if(player2.isTouching(soccerBall)&&keyDown("down")){
        ballVelocityY = 40
      }
      if(player2.isTouching(soccerBall)&&keyDown("left")){
        ballVelocityX = -40
      }
      if(player2.isTouching(soccerBall)&&keyDown("right")){
        ballVelocityX = 40
      }
          if(fatGoalie.isTouching(soccerBall)){
            ballVelocityX = 100
          }
          if(fatGoalie2.isTouching(soccerBall)){
            ballVelocityX = -100
          }

if(soccerBall.isTouching(goal1)){
  p2Score += 1
  soccerBall.x = windowWidth/2
  soccerBall.y = windowHeight/2
  player2.x = windowWidth/2+150
  player2.y = windowHeight/2
  player1.x = windowWidth/2-150
  player1.y = windowHeight/2
p2Scored = true
}/*
if(p2Scored === true){
  textSize(50)
  fill("red")
  text("GOAL!!!",windowWidth/2-100,windowHeight/2)
}
*/
if(soccerBall.isTouching(goal2)){
  p1Score += 1
  soccerBall.x = windowWidth/2
  soccerBall.y = windowHeight/2
  player2.x = windowWidth/2+150
  player2.y = windowHeight/2
  player1.x = windowWidth/2-150
  player1.y = windowHeight/2
p1Scored = true
}
/*
if(p1Scored === true){
  textSize(50)
  fill("blue")
  text("GOAL!!!",windowWidth/2-100,windowHeight/2)
}
*/

  drawSprites();
}
/*
function p2Scored(){
  time.sleep(5)
  textSize(50)
  text("GOAL!!!",windowWidth/2-100,windowHeight/2)
}
*/