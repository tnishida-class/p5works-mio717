// アメリカ合衆国　国旗
function setup() {
  const red = color(255, 0, 0);
  const blue = color('rgb(0, 0, 102)');
  createCanvas(380,200);
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
  let p = width * 76 / 190
  rect(0, 0, p, d * 7);

  let q = p / 12;
  let r = d * 7 / 10;

  for(let j = 0; j < 11; j++){
    for(let k = 0; k < 9; k++){
      for(let l = -4; l < 6; l++){
        if(j == k + 2 * l){
          fill(255);
          star(q * (j + 1), r * (k + 1), r - 6);
        }
      }
    }
  }

  function star(cx,cy,r){
    beginShape();
    for(let i = 0; i < 5; i++){
      const theta = TWO_PI * i * 2 / 5 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
