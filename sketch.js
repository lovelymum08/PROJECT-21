const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftSide;
var rightSide;
var ball;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);

	ground= new Ground(400,690,800,10);
	leftSide= new Ground(420,645,10,80);
	rightSide= new Ground(600,645,10,80);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	  }
	  ball=Bodies.circle(200,100,20,ball_options);
	  fill("white");
	  World.add(world,ball)


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
	
}



