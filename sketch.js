const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = createSprite(300,300,10,100);
    box = createSprite(230,180,80, 100);
    chain = new Chain(ball.body,box.body);
  }

  function draw(){
    background(150);
    box.display();
    ball.display();
    chain.display();
  }