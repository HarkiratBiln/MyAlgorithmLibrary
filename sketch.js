var fixedRect, movingRect;

var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;



  rect1 = createSprite(100,200,70,60);
  rect2 = createSprite(200,200,70,60);
  rect3 = createSprite(300,200,70,60);
  rect4 = createSprite(400,200,70,60);
  
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "orange";
  rect3.shapeColor = "cyan";
  rect4.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rect1)) {
   rect1.destroy();
 }

  drawSprites();

}



