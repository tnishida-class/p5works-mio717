// テキスト「アニメーション」
//くるくる回転しながら流れる星
let x, y, vx, vy;
let angle = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 4;
  y = height / 5;
  vx = 5;
  vy = 5;
}

function draw(){
  background(0, 51, 153);
  // BLANK[2] (hint: 作った star 関数を使います)
  angle += 0.1;
  noStroke();
  fill(255, 255, 102);
  star(x, y, 40, angle);
  x += vx;
  y += vy;

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    theta = theta + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
