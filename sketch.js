/*game involves a weapon on the left (similar to cannon)
that aims for fruits spawned randomly falling on the right*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var bg_img;
var arrow, arrowImg, bow, bowImg;
var arrows = [];
var apple, banana, cherry, grape, orange, watermelon;
var fruitsGroup,fruit;

function preload() {
  bg_img = loadImage("background.png");
  arrowImg = loadImage("arrow.png");
  bowImg = loadImage("bow.png");

  apple = loadImage("apple.png");
  banana = loadImage("banana.png");
  cherry = loadImage("cherry.png");
  grape = loadImage("grape.png");
  orange = loadImage("orange.png");
  watermelon = loadImage("watermelon.png");
}

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);

  engine = Engine.create();
  world = engine.world;

  bow = new Bow(150, 200, 120, 100);
  arrow = new Arrow(150, 200, 60, 60);

  fruitsGroup = new Group();
}

function draw() {
  background(51);

  Engine.update(engine);
  image(bg_img, 0, 0, width, height);

  for (var i = 0; i < arrows.length; i++) {
    if (arrows[i] !== undefined) {
      arrows[i].display();
    }
  }



  arrow.display();
  bow.display();
  spawnFruits();
  drawSprites();

  /*if(collide(arrow,fruit,50)==true){
    World.remove(engine.world,arrow);
    arrow = null;
    fruit.velocityY = 0;
    fruit.visible = false

  }*/

  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var angle = bow.body.angle;
    var arrow = new Arrow(bow.x, bow.y, 65, 65, angle);
    Matter.Body.setAngle(arrow.body, angle);
    arrows.push(arrow);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    if (arrows.length) {
      var angle = bow.body.angle;
      arrows[arrows.length - 1].shoot(angle);
    }
  }
}

function spawnFruits() {
  if (frameCount % 80 === 0) {
    var fruit = createSprite(Math.round(random(400,750)), 20, 40, 40);
    fruit.velocityY = 2
    
    

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        fruit.addImage(apple);
        fruit.scale = 0.08;
        break;
      case 2:
        fruit.addImage(banana);
        fruit.scale = 0.2;
        break;
      case 3:
        fruit.addImage(cherry);
        fruit.scale = 0.08;
        break;
      case 4:
        fruit.addImage(grape);
        fruit.scale = 0.2;
        break;
      case 5:
        fruit.addImage(orange);
        fruit.scale = 0.08;
        break;
      case 6:
        fruit.addImage(watermelon);
        fruit.scale = 0.08;
        break;
    }

    fruit.lifetime = 200;

    fruitsGroup.add(fruit);
  }
}

/*function collide(body,sprite,x){

  var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
  if(d<=x){
   return true; 
  }
  else{
   return false;
  }

}*/


