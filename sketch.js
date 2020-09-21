const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,stand1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var polygon,slingshot;

function preload()
{
	polygon_img=loadImage("polygon.png");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;


polygon = Bodies.circle(50,200,5,{isStatic:false}); 
  World.add(world, polygon);
    

ground = new Ground(400,390,800,10);
stand1 = new Ground(640,305,90,10);


slingshot = new SlingShot(polygon,{x:100,y:200});

box1 = new Box(610,290,20,20);
box2 = new Box(630,290,20,20);
box3 = new Box(650,290,20,20);
box4 = new Box(670,290,20,20);
box5 = new Box(620,270,20,20);
box6 = new Box(640,270,20,20);
box7 = new Box(660,270,20,20);
box8 = new Box(630,250,20,20);
box9 = new Box(650,250,20,20);
box10 = new Box(640,230,20,20);
}

function draw() {
  background("white");  
  
  ground.display();

  stand1.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
