var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground , object ;
var r1,r2,r3;
var packageBodyProperty1 = {isStatic:true}
var packageBodyProperty2 = {isStatic:false}

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
	createCanvas(800,650);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  // Matter.Body.setStatic(false)
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.29 , isStatic:true});

	//packageSprite.x= helicopterSprite.position.x 
 // packageSprite.y= helicopterSprite.position.y
	//packageBody.x = helicopterSprite.position.x 
	//packageBody.y =  helicopterSprite.position.y 
 
  
	
//World.add(world,packageSprite)


World.add(world, packageBody);
	
//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10  /*,{isStatic:true}*/ );
 	World.add(world, ground);
   
	r1 =  new RedZone(493,560,15,100);
	r2 =  new RedZone(277,560,15,100);
	r3 =  new RedZone(385,603,200,15);

	Engine.run(engine);
}

function draw() {

	background(0);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
rectMode(CENTER);
//rect(packageSprite.position.x,packageSprite.position.y,50,50,)	


//packageBody.x = helicopterSprite.position.x 
//	packageBody.y =  helicopterSprite.position.y 
 
 // packageSprite.y= helicopterSprite.position.y 
 


	keyPressed()
  
    r1.display();
	r2.display();
	r3.display();

	packageSprite.x= helicopterSprite.position.x 

	if(packageSprite.y===600||packageSprite.y===601||packageSprite.y===602||packageSprite.y===603){
		packageSprite.x = packageBody.x + 0
	}
	drawSprites(); 
}

function keyPressed(){
if(keyWentDown("LEFT_ARROW")){
	helicopterSprite.velocityX = -5
}
if(keyWentUp("LEFT_ARROW")){
	helicopterSprite.velocityX = 0
}
if(keyWentDown("RIGHT_ARROW")){
	helicopterSprite.velocityX = 5
}
if(keyWentUp("RIGHT_ARROW")){
	helicopterSprite.velocityX = 0
}
if(keyCode=== DOWN_ARROW){

	packageBody.x = helicopterSprite.position.x 
	
	/*packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	packageSprite.x= packageBody.x	
	packageSprite.y= packageBody.y

	

	//packageSprite.x = helicopterSprite.position.x 
	//packageSprite.y =  helicopterSprite.position.y */


 Matter.Body.setStatic(packageBody,false);

}
}

