const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var ground, ball;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
 var ball; 
 var rope;
function setup(){
    var canvas = createCanvas(1800,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,590,1800,20,ground_options);
    World.add(world,ground);

    box1=new Box(600,100,80,80 );
    box2=new Box(600,200,80,80 );
    box3=new Box(600,300,80,80 );
    box4=new Box(600,400,80,80 );
    box5=new Box(600,500,80,80 );
    box6=new Box(600,600,80,80 );
ball= new Ball(200,200);
rope= new Rope(ball.body,{x:400,y:50})

    console.log(ground);
}

function draw(){
    background("green");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1800,20);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 ball.display();
 rope.display();
}
function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})    
}