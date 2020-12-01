
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

var ground;
var wall1;
var wall2;
var wall3;
var paper;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width/2,700,width,20);
	
	wall1 = new Dustbin(1200,650);
	
	
	paper= new Paper(200,450,70);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  paper.display();
  ground.display();
  wall1.display();
 
  
  
  
 
}

function keyPressed() {

 if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

  }
}

