var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redBoxRight,redBoxLeft,redBoxBottom;
var redBoxRightBody,redBoxLeftBody,redBoxBottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBoxBottom = createSprite(width/2,height-50,200,20);
	redBoxBottom.shapeColor = ("red");

	redBoxLeft = createSprite(310,610,20,100);
	redBoxLeft.shapeColor = ("red");

	redBoxRight = createSprite(510,610,20,100);
	redBoxRight.shapeColor = ("red");



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	redBoxBottomBody = Bodies.rectangle(width/2,height-50,200,20, {isStatic:true});
	World.add(world,redBoxBottomBody);

	redBoxLeftBody = Bodies.rectangle(310,610,20,100,{isStatic:true});
	World.add(world,redBoxLeftBody);

	redBoxRightBody = Bodies.rectangle(510,610,20,100,{isStatic:true});
	World.add(world,redBoxRightBody);


	 
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  packageSprite.collide(redBoxRight);
  packageSprite.collide(redBoxLeft);
  packageSprite.collide(redBoxBottom); 	

  drawSprites();
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
}
}