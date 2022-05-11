var caixa;
function setup() {
  createCanvas(600,600);
  caixa=createSprite(250,250,25,25);
}


function draw() 
{
  background(30);
  drawSprites();
  if (keyDown("right")) {
    caixa.x = caixa.x + 2;
  }
  if (keyDown("left")) {
    caixa.x = caixa.x - 2;
  }


}




