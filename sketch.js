var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = new Box(800, 620, 20, 100);
	box2 = new Box(1000, 620, 20, 100);
	box3 = new Box(900, 650, 200, 20);

	paper = new Paper(200, 200, 20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:70, y:-70});
  }
}