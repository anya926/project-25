
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var img;

function preload()
{
	img = loadImage("sprites/dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,600,200,20);
	dustbin2 = new Dustbin(500,500,20,200);
	dustbin3 = new Dustbin(700,500,20,200);
	paperball1 = new Paper(100,350,70);
	ground1= new Ground(400,620,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  imageMode(CENTER);
  image(img, 600, 485, 250, 250);
  paperball1.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:180,y:-180});

	}
}



