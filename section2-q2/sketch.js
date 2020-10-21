// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)↓
      for(let x = -5; x < 5; x++){
        if(i == j+2*x+1){
          fill('rgb(128,128,128)');
          rect(size*i,size*j,size,size);
          if(j < 3){
            fill(255,0,0);
            ellipse(size*(i+(1/2)),size*(j+(1/2)),size);
          }
          else if(j > 4){
            fill(0,0,0);
            ellipse(size*(i+(1/2)),size*(j+(1/2)),size);
          }
        }
      }
     }
   }
  }
