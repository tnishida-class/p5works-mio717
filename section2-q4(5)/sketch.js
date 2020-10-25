// EU　旗
function setup(){
  const blue = color('rgb(0,0,128)');
  const yellow = color('rgb(255,204,0)');
  createCanvas(300, 200);
  background(blue);
  noStroke();

  for(let i = 0; i < 12; i++){
    fill(yellow);
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 65;
    let y = 100 + sin(theta) * 65;
    star(x, y, 10);
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
