var helicopterIMG, helicopterSprite, packageSprite,packageIMG,basketBottomS, basketLeftS, basketRightS;
var packageBody,ground, opt,option, basketBottom, basketLeft, basketRight;
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

	basketBottomS = createSprite(400, 625, 200, 20);
	basketLeftS = createSprite(300, 600, 20, 100 );
	basketRightS = createSprite(500, 600, 20, 100,10);
	basketBottomS.shapeColor="red"
	basketLeftS.shapeColor="red"
	basketRightS.shapeColor="red"


	engine = Engine.create();
	world = engine.world;
	opt={restitution:1, isStatic:true};
	packageBody = Bodies.circle(width/2 , 200 , 5 , opt);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 option={
		 isStatic:true, 
		 friction:10,
		 restitution:0.01,
		 bounce:0
		};
	basketBottom = Bodies.rectangle(400, 625, 200, 20 , option );
	basketLeft = Bodies.rectangle(300, 600, 20, 100 , option);
	basketRight = Bodies.rectangle(500, 600, 20, 100 , option);
	World.add(world, basketBottom);
	World.add(world, basketLeft);
	World.add(world, basketRight);	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  rectMode(CENTER);
  rectMode(CENTER);
  rectMode(CENTER);
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
 if (keyWentDown === "DOWN_ARROW") {
    Matter.Body.setStatic(packageBody, false);

    
  }
}





