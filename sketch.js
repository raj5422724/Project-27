const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 550);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob = new bob(400,450);
	Bob1 = new bob(350,450);
	Bob2 = new bob(300,450);
	Bob3 = new bob(450,450);
	Bob4 = new bob(500,450);

	roof = new Roof();

	rope1 = new rope(Bob.body,roof.body,-50*0,0);
	rope2 = new rope(Bob1.body,roof.body,-50*1,0);
	rope3 = new rope(Bob2.body,roof.body,-50*2,0);
	rope4 = new rope(Bob3.body,roof.body,-50*-1,0);
	rope5 = new rope(Bob4.body,roof.body,-50*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Bob.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();

  roof.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(Bob2.body,Bob2.body.position,{x:-4,y:0})
	}
}
