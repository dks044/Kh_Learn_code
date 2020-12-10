console.log('hello world~!');

// 한줄주석
/* 여러줄 주석 */

// 변수 선언
// es6 이전 버전(에크마스트립트) 
var name = '홍길동';

// es6 이후 버전
let x = 10;
let y = 20;

console.log(x + y);

// 상수
const z = 30;
// z = 40;

// 함수 선언문
// 호이스팅 : 함수선언문은 위로 끌어올림.
let result = sum(x,y);
console.log(result);

function sum(a,b){
  let result;
  result = a + b;
  return result;
}


// 함수 표현식
// 하지만, 함수 표현식은 39행을 위로 올리면 실행이 되지 않는다.
let result2 = function(a,b) {
  let result;
  result = a + b;
  return result;
}
console.log(result2(x,y));

//함수표현식(람다식)
let result3 = (a,b) => {a+b};
console.log(result3(x,y));





// 배열 생성 2가지 방법
const array = [1,2,3,4,5];
const array2 = new Array(1,2,3,4,5);

console.log(array.toString());
console.log(array2.toString());

// js에서 배열은 '동적'으로 요소 추가 가능
array[5] = 6;
console.log(array.toString());
console.log(array.length);
array.length = 3;
console.log(array.toString());

array.length = 10;
console.log(array.toString());

array[7] = 8;
console.log(array.toString());

//빈 배열 생성
let array3 = [];
array4 = new Array();

array3[0] = 1;
array3[1] = 2;
array3[2] = 3;
console.log(array3.toString());
array3[5] = 6;
console.log(array3.toString());
console.log(array3.length);

// array3 = ['a','b','c'];
//const 쓰면 오류걸림

//객체 생성
//1) 리터링 표현식
//중괄호{}는 객체, 대괄호[]는 배열
const person = {
  name: '홍길동',
  age: 25,
  eat:function(){
    console.log('먹다');
  },
  smile:function(){
    console.log('웃다');
  }

};
console.log(person.name);
console.log(person.age);
person.eat();
person.smile();
person.bloodType = 'a';
console.log(person);
//2) new object()로 객체생성
const person2 = new Object();
person2.name = '홍길순';
person2.age = 20;
person2.smile = function(){
  console.log('웃다');
}
person2.eat = function(){
  console.log('먹다');
}
console.log(person2);
person2.eat();
person2.smile();
//3) {} 빈객체 생섣 (자바처럼)
const person3 = {};
person3.name = '홍피즈';
person3.age = 26;
person3.smile = function(){
  console.log('웃다');
}
person3.eat = function(){
  console.log('cs먹다');
}
console.log(person3);

//4) 생성자 함수 : 동일 타입의 인스턴스를 여러개 만들떄 사용.
function Person(name,age){
  this.name = name;
  this.age = age;
  this.smile = function(){
    console.log('웃다');
  };
  this.eat = function(){
    console.log('먹다');
  };
}

const person10 = new Person('야스오',40);
const person11 = new Person('다리우스',42);
const person12 = new Person('이렐리아',29);

console.log(person10);
console.log(person11);
console.log(person12);
//5) class : 생성자함수의 syntax sugar(설탕문법)   (자바의 클래스랑 틀리고)
class Person20 {
  //생성자
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  smile(){
    console.log('웃다');
  }
  eat(){
    console.log('먹다');
  }
}
const person30 = new Person20('피즈동',10);
const person31 = new Person20('피즈서',20);
const person32 = new Person20('피즈남',30);
console.log(person30);
console.log(person31);
console.log(person32);
console.log(person30.smile());
console.log(person30.eat());