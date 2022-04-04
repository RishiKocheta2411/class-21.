var ball;
var groundobj;
var leftside,rightside;
var radius=40;
var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
	ball=Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)
	engine = Engine.create();
	world = engine.world;
	groundobj= new Groundobj(width/2,670,width,20);
	leftside= new Groundobj(1100,600,20,120);
	rightside= new Groundobj(1350,600,20,120);
	
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.postion.x,ball.position.y,radius,radius)
  groundobj.display();
  leftside.display();
  rightside.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})
	}

}



