
var wall,thickness;
var bullet,speed,weight
function setup(){
    createCanvas(1600,400)
    speed=random(223,300)
    weight=random(30,50)
    thickness=random(20,80)
    bullet=createSprite(50,200,50,5)
    bullet.velocityX=speed
    bullet.shapeColor=color(255)
    wall=createSprite(1200,200,thickness,height/2)
    wall.shapeColor=color(230,230,230)
}
function draw() {

background("black")
if(hasCollided(bullet,wall))
{
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
        wall.shapeColor=color(255,0,0)
    }
  if(damage<10) 
  {
      wall.shapeColor=color(0,255,0)
  }     
}

drawSprites()
}
function hasCollided(bullet1,wall1){
    bulletright=bullet1.x+bullet1.width
    wallleft=wall1.x
    if(bulletright>=wallleft)
    {
        return true
    }
    return false
}