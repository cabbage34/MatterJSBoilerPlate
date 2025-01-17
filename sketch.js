
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	isStatic:false,
restitution:0.3,
density:1.2,
friction:0
}

ground = new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120)
rightSide = new Ground(1300,600,20,120)


ball = Matter.Bodies.circle(300,40,15,ball_options)
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftSide.display()
  rightSide.display()
  ground.display()
  

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15)
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.5,y:-0.5})
	}
}



