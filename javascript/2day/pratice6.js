'use strict'
let flag = false;
while (!flag) {
  const str = prompt('문자열을 입력하시오(&:구분자사용)');
  if (str.indexOf('&') != -1 ){   //indexof : 해당 문자의 위치 반환
    flag = true;
    const array = str.split('&'); //split : 해당하는 기호를 기준으로 배열 분리
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }else{
    alert('&을 포함한 문자열을 입력하세요 !');
  }
}