
//西暦y年m月d日が何曜日か
function setup(){
   dayOfWeek(2001,1,13)//好きな年月日を入力してください
}

function isLeapYear(y){
        return(y % 4 == 0) && (y % 100 != 0) ||(y % 400 == 0);
}


function dayOfYear(y,m,d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y,i);
  }
  return count + d;
}

function daysInMonth(y,m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfWeek(y,m,d){
   let c = 0;
  for(let i = 1970; i < y; i++){
    if (isLeapYear(i)) {
      c += 366;
    }
    else{
      c += 365;
    }
　}

  let my = c + dayOfYear(y,m,d) - 1;

    console.log(y+"年"+m+"月"+d+"日は");

  if(my % 7 == 0){
    console.log("木曜日です");
  }
  else if(my % 7 == 1){
    console.log("金曜日です");
  }
  else if(my % 7 == 2){
    console.log("土曜日です");
  }
  else if(my % 7 == 3){
    console.log("日曜日です");
  }
  else if(my % 7 == 4){
    console.log("月曜日です");
  }
  else if(my % 7 == 5){
    console.log("火曜日です");
  }
  else if(my % 7 == 6){
    console.log("水曜日です");
  }
}
