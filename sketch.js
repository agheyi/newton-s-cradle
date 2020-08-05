const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var Roof,bob1,bob2,bo3,bob4,bob5,chain,chain1,chain2,chain3,chain4;

function setup() {
  createCanvas(1100,600);
	engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
  Roof= new Ground(width/2,50,width,50);
  bob1 = new Bob(width/2,350,50);
  bob2 = new Bob(width/2-100,350,50);
  bob3 = new Bob(width/2+100,350,50);
  bob4 = new Bob(width/2-200,350,50);
  bob5 = new Bob(width/2+200,350,50);
  chain= new Rope(bob1.body,Roof.body,0,0);
  chain1= new Rope(bob2.body,Roof.body,-100,0);
  chain2= new Rope(bob3.body,Roof.body,+100,0);
  chain3= new Rope(bob4.body,Roof.body,-200,0);
  chain4= new Rope(bob5.body,Roof.body,+200,0);
}

function draw() {
  background(0,0,0);  
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
}
function keyPressed()
    {
        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(bob4.body, bob4.body.position, {x:-200, y:0})
		}
	}