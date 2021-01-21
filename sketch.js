const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;

var particle;
var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;

var gameState = "PLAY";

var turn = 0;
var score = 0;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
}

function draw()
{
   background(0);

   Engine.update(engine);

   textSize(40);
   text("Score: "+score,10,40);
   textSize(35);
   text("500",10,550);
   textSize(35);
   text("500",90,550);
   textSize(35);
   text("500",170,550);
   textSize(35);
   text("100",250,550);
   textSize(35);
   text("100",330,550);
   textSize(35);
   text("100",410,550);
   textSize(35);
   text("100",490,550);
   textSize(35);
   text("200",570,550);
   textSize(35);
   text("200",650,550);
   textSize(35);
   text("200",730,550);

   ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }

  if(frameCount % 60 === 0)
  {
     particles.push(new Particles(random(width/2-30,width/2+30),10,10));
  }

  for(var j = 0; j < particles.length; j++)
  {
     particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++)
  {
      divisions[k].display();
  }

  if(turn>=5)
  {
     gameState ="end";
  }
  
//   if(particle!=null)
//  {
//    particle.display();

//    if(particle.body.position.y>760)
//    {
//       if(particle.body.position.x < 300)
//       {
//          score=score+500;
//          particle=null;
//       }
//    }
//  }

 if(Particles.x>300)
 {
   score = score+500;
 }

 if(Particles.x<301 && particle.x>600)
 {
   score = score+100;
 }

 if(Particles.x<601 && particle.x>900)
 {
    score = score+200;
 }
 
  drawSprites();
}

function mousePressed()
{
   if(gameState!=="end")
   {
      turn++;
      particle = new Particles(mouseX,10,10,10);
   }
}

function gameOver()
{
   textSize(40);
   text("Game Over",400,400);
}