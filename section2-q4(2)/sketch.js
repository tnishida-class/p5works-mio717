// アメリカ合衆国　国旗
function setup() {
  const red = color(255, 0, 0);
  const blue = color('rgb(0, 0, 102)');
  createCanvas(190,100);
  noStroke();
  background(255);

  let d = height / 13;

  for(let i = 0; i < 13; i++){
    if(i % 2 == 0){
      fill(red);
    }
    else if(i % 2 == 1){
      fill(255);
    }
    rect(0, i * d, width, (i + 1) * d);
  }
  fill(blue);
  rect(0, 0, 76, d * 7);
}
