const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;
var tree;

function preload()
{
	
}

function setup() {
	createCanvas(1200,1500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,10);

	stone = new Stone(200,200);

	tree = new Tree(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");

  stone.display();
  ground.display();
  tree.display();

  drawSprites();
}



