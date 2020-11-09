// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  noStroke();
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let green = color('rgb(0, 204,102)');
  let purple = color('rgb(210, 77, 255)');
  let q = w + p * 2;
  let r = h + p * 2;
  fill(purple);
    ellipse(40, 44 + r / 2, r);
  fill(purple);
    ellipse(38 + q, 44 + r / 2, r);
  fill(green);
   ellipse(40, 40 + r / 2, r);
  fill(green);
    ellipse(40 + q, 40 + r / 2, r);
  fill(green);
   rect(40, 40, q, r);
  fill(purple);
   rect(40, 40 + r, q, p * 2);
  fill(255);
   text(t, p + 40, h + 40)
  fill(purple);
   triangle(135, 40 + r, 140, 60 + r, 145, 40 + r);
}
