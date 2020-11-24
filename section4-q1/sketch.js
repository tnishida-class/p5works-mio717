// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 0.8) % cycle;
  // BLANK[1]
  if(count < 50){
    size = count;
  }
  else{
    size = 100 - count;
  }
  ellipse(width / 2, height / 2, size * 5);
  //キーを押していると鼓動が早くなって離すとゆっくりになる円
  if(keyIsPressed){count += 1;}
}
