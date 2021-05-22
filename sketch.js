const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var akshitaImg

function preload(){
akshitaImg = loadImage("Akshita.png");
birthdayImg = loadImage("download.png");
biImg = loadImage("b.png");
}


function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    
    ground2 = new Ground(245,355,10,520)
    ground3 = new Ground(764,355,10,510)
    ground4 = new Ground(504,96,530,10)
    ground5 = new Ground(504,615,530,10)
    polygon = Bodies.circle(250,100,80);
    World.add(world,polygon);
    b = Bodies.circle(10,330,80);
    World.add(world,b);
    bi = Bodies.circle(785,330,80);
    World.add(world,bi);
}


function draw(){
background(0);
textSize(40)
fill("white")
text("29th MAY",454,65);
fill(0,191,255)
text("HAPPY BIRTHDAY TO ME!",260,654);


fill("yellow")
ground2.display();
fill("blue")
ground3.display();
fill("green")
ground4.display();
fill("red")
ground5.display();
image(akshitaImg,polygon.position.x,polygon.position.y,510,510);
image(birthdayImg,b.position.x,b.position.y,200,100);
image(biImg,bi.position.x,bi.position.y,200,100);
}