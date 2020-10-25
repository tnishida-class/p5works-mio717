// ボスニア・ヘルツェゴヴィナ　国旗
function setup() {
  const blue = color('rgb(19,19,134)');
  const yellow = color('rgb(255,204,0)');
  createCanvas(300,150);
  noStroke();
  background(blue);

  let x = width / 4

  star(x - 7, 20, 15);

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
  triangle(x, 0, 3 * x, 0, 3 * x, height);

}
