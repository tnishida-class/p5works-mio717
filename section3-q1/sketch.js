// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  noStroke();
  balloon("I love keyakizaka46",100 ,0 ,204 ,120);
}

function balloon(t, x, a, b, c){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let purple = color('rgb(210, 77, 255)');
  let q = w + p * 2;
  let r = h + p * 2;
  fill(purple);
    ellipse(x, (x + 4) + r / 2, r);
  fill(purple);
    ellipse((x - 2) + q, (x + 4) + r / 2, r);
  fill(a, b, c);
   ellipse(x, x + r / 2, r);
  fill(a, b, c);
    ellipse(x + q, x + r / 2, r);
  fill(a, b, c);
   rect(x, x, q, r);
  fill(purple);
   rect(x, x + r, q, p * 2);
  fill(255);
   text(t, p + x, h + x)
  fill(purple);
   triangle((x + q - 15), x + r, (x + q - 10), (x + 20) + r, (x + q - 5), x + r);
}
