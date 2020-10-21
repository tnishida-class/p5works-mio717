// 小手調べ
function setup(){
  createCanvas(200,200);
  noFill();
  let x = 100;
  for(let i = 0; i < 10; i++){
    if(i < 5){
      stroke(0,0,255);
    }
    else{
      stroke(255,0,0);
    }
    ellipse(x,x,(i+1)*10);
  }
    // BLANK[1]
}
