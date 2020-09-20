// constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// creating variables
var paper,ground, leftBox,middleBox,rightBox;

function setup() {
	createCanvas(800, 600);

// creating engine and world
	engine = Engine.create();
	world = engine.world;

// creating the bodies
	paper = new Paper(120,430,18);
	ground = new Box(width/2, height-23, width, 10, "green");

	leftBox = new Box(530, 502, 20,100, "red");
	middleBox = new Box(630,562, 220,20, "red");
	rightBox = new Box(730,502, 20,100, "red");
	Engine.run(engine);
  
}

function draw() {
  	rectMode(CENTER);
  	background(0);
	Engine.update(engine);

// displaying the variables
	paper.display();
	ground.display();
 	leftBox.display();
 	middleBox.display();
	rightBox.display();

// calling the function Keypressed in Draw
 	KeyPressed();
  	drawSprites();
}

// creating the function Keypressed
function KeyPressed(){
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-4});
    }

}
