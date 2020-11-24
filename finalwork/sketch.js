// 最終課題を制作しよう

let x, y, x1, y1, vx, vy, vx1, vy1;

let grabbed;
function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  reset1();
}

function reset(){
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  grabbed = false;
}

function reset1(){
  x1 = width / 3;
  y1 = height / 3;
  vx1 = 0;
  vy1 = 0;
}

function draw(){
  background(160, 192, 255);
  fill(153, 0, 153);
    ellipse(x1, y1, 50);
  fill(255);
    ellipse(x, y, 50);
  if(!grabbed){
    x += vx;
    y += vy;
    x1 += vx1;
    y1 += vy1;
  }

  if(x - x1 < 50 && x1- x < 50 && y - y1 < 50 && y1 - y < 50){
    vx1 = 0.8 * vx;
    vy1 = -0.6 * vy;
  }

  if(x < 0 || x > width){
    vx = - 0.8 * vx;
  }

  if(x1 < 50 && x1 >= 0 && y1 >= 0 && y1 < 25){
    vx1 = 0;
    vy1 = 0;
    text('you win !', 200, 200);
  }

  if(y < 0 || y > height){ vy = - 0.8 * vy; }
  if(x1 < 0 || x1 > width){ vx1 = - 0.8 * vx1; }
  if(y1 < 0 || y1 > height){ vy1 = - 0.8 * vy1; }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  fill(0, 153, 51);
  rect(0, 0, 100, 50);
  fill(255);
  textSize(32);
  text('Goal', 15, 40);
  fill(0,0,0);
  textSize(15);
  text('スペースキーでリセット', 15, windowWidth * 4 / 5);
}

function keyPressed(){
 if(key == " "){
   reset();
 }
 if(key == " "){
   reset1();
 }
}

function mousePressed(){
grabbed = dist(mouseX, mouseY, x, y) < 30;
}

function mouseDragged(){
if(grabbed){
x = mouseX;
y = mouseY;
}
}

function mouseReleased(){
if(grabbed){
grabbed = false;
vx = mouseX - pmouseX;
vy = mouseY - pmouseY;
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
