
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=	Matter.Constraint
var ground,chain1;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,50,685,45)
	bob1=new bob(400,550,100)
	bob2=new bob(250,550,100)
	bob3=new bob(200,550,100)
	bob4= new bob(350,550,100)
	bob5=new bob(450,550,100)
	
	chain1=new Chain(bob1.body,ground.body,-100*2,0)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  chain1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  drawSprites();
 
}



