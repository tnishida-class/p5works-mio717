// 小手調べ
function setup(){
  noFill();
  let x = 50;
  for(let i = 0; i < 10; i++){
    ellipse(x,x,(i+1)*10);
    if(i < 4){
      stroke(255,0,0);
    }
    else{
      stroke(0,0,255);
    }

  }
    // BLANK[1]
}
