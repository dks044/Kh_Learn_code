'use strict';  // 스크립트 입력 모드
const array = new Array(5);

let i = 0;
while(i < array.length) { 
let tmp = prompt('임의의 정수를 입력하세요');
  if(!isNaN(parseInt(tmp))) { //isNaN : value가 숫자이면 true 리턴
    array[i++] = tmp; 
  }else{
    alert('정수를 입력하세요');
  }
}
console.log(array);
console.log(array.reverse());