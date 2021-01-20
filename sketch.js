var fixedRect, movingRect;
var obj1,obj2,obj3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1=createSprite(300,300,50,50);
  obj1.shapeColor="gray";
  obj2=createSprite(200,200,50,50);
  obj2.shapeColor="yellow";
  obj3=createSprite(100,100,50,50);
  obj3.shapeColor="voilet";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,obj2)){
movingRect.shapeColor="pink";
obj2.shapeColor="pink";
 }
 else{
  obj2.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}
function isTouching(a,b){
  if (a.x - b.x < a.width/2 + b.width/2
    && a.x - b.x < a.width/2 + b.width/2
    && b.y - a.y < a.height/2 + b.height/2
    && a.y - b.y < a.height/2 + b.height/2) {
  return true
}
else {
  return false
}
}