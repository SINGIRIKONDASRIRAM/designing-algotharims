var fixedrect,movingrect;
var gameObject1;
function setup() {
  createCanvas(800,400);
    fixedrect = createSprite(300,300,80,50);
    movingrect=createSprite(350,350,30,80);
    gameObject1 = createSprite(200,100,50,50);
    gameObject1.shapeColor = "yellow";
}

function draw() {
  background(0);  
    movingrect.x=mouseX;
    movingrect.y=mouseY;
    console.log(movingrect.y - fixedrect.y);
    if(isTouching(movingrect,gameObject1)){
      movingrect.shapeColor = "green";
      gameObject1.shapeColor = "green";
    }
    else{
      movingrect.shapeColor = "red";
      gameObject1.shapeColor = "red";
    }
    
    drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    ){
       return true;
    }
  else{
      return false;
  }
}