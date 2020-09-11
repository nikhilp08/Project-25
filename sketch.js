const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paper,rect1,rect2
function preload(){
    dustbin = loadImage("dustbin.png");
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    paper1 = new Paper(100,100,10);
    rect1 = new Dustbin(890,825,20,329);
    rect2 = new Dustbin(1110,825,20,329);
    
}

function draw(){
    background("gray");
    Engine.update(engine);
    
    ground.display();
    paper1.display();
    rect1.display();
    rect2.display();

    imageMode(CENTER);
    image(dustbin,1000,825);
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:18,y:-30})
    }
}