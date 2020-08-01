const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine = Engine.create(),
world = engine.world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = Bodies.rectangle(width/2, 50, width/2-20, 50, {isStatic: true});

	ball1 = new Bob(120, 250)
	ball2 = new Bob(155, 250)
	ball3 = new Bob(190, 250)
	ball4 = new Bob(225, 250)
	ball5 = new Bob(260, 250)

	rope1 = new rope(ball1, ground, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
fill(100);
rect(width/2, 50, width/2-20, 50)

fill(255)
rope1.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
}



