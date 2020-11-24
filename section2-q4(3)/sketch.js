// バーレーン　国旗
function setup() {
  const red = color('rgb(179, 0, 0)');
  createCanvas(300, 180);
  noStroke();
  background(red);
  let h = height;

  let x = width * 1/4;
  fill(255);
   rect(0, 0, x, h);

  let y = width * 3/8;

  fill(255);
  for(let i = 0; i < 5; i++){
  let z = 2 * i;
   triangle(x, h * (z/10), y, h * ((z+1)/10), x, h * ((z+2)/10));
  }
}
