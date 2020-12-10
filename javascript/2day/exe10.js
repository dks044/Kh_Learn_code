const box = new Object();
box.color = "red";
box.size = 10;
box.amount = 0;
box.fill = function(){
  this.amount += 2;
}
box.consume = function(){
  this.amount -= 2;
}

// (2) 다음 주석에 지정된 대로 자바스크립트 코드를 작성하라
box.fill();
console.log(box.amount);
box.consume();
console.log(box.amount);

// (3) 
console.log(box);