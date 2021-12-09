var road
var player
var rock
var rockpng
var roadtrackforcapstone
var runner1
var rockGroup
var score
var gamestate = "play"





function preload(){
roadtrackforcapstone = loadImage("road.jpeg")
 runner1 = loadAnimation("Runner-1.png","Runner-2.png")
 rockpng = loadImage("rock.png")

}

function setup() {
 createCanvas(400,400)
 score = 0
rockGroup = new Group()

 road = createSprite(200,250,100,100)
road.addImage(roadtrackforcapstone)
road.scale = 3
road.velocityY = +2

player = createSprite(200,300,10,10)
player.addAnimation("player",runner1)
player.scale = 0.09


}





function draw() {
  if(gamestate==="play"){

  
  
    background("green")
 score = score+(frameCount %60)


 player.x = mouseX
    if (road.y > 250){
     road.y = 200
 }
if(rockGroup.isTouching(player)){
 console.log("hi")
    gamestate = "end"
}

 
 
 moverock();
 
    drawSprites()
    textSize(20)
    fill("red")
  text("Score: " +score, 250,50)
  }
  if(gamestate==="end"){
    background("black")
    text("gameover", 200,200)
  }
}
function moverock(){
   if(frameCount %100 == 0){
    rock = createSprite(10,-10,10,10)
    rock.addImage(rockpng) 
    rock.scale = 0.06
    rock.x = (Math.round(random(10,350)))
     rock.velocityY = 2  
    rockGroup.add(rock)
    
    }


}



