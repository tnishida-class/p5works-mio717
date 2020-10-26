// ボスニア・ヘルツェゴヴィナ　国旗
function setup() {
  const blue = color('rgb(19,19,134)');
  const yellow = color('rgb(255,204,0)');
  createCanvas(300,150);
  noStroke();
  background(blue);

  let m = width / 61;
  let n = height / 8;

  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 10; j++){
      if(i == j - 1){
        star(4 * m * i + 55, n * j - 20, m + 8);
      }
    }
  }

  function star(cx, cy, r){
    fill(255);
    beginShape();
    for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
    }
    endShape(CLOSE);
  }
  fill(yellow);
  let k = 80;
  triangle(k, 0, 3 * k, 0, 3 * k, height);

}
