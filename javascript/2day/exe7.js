const text = "Web Pro gram ing";
let result = text.length;
console.log(result);
result = text[2];
console.log(result);
result = text.split(" ").length; //공백으로 구분해서 반환 / 3 배열요소 3개만 추출
console.log(result);
result = text.replace("Web","HTML5");
console.log(result);
result = text.charAt(4);
console.log(result);

console.log(Math.floor(Math.random()*10)+1); //1~10 사이의 난수

// 강사: 리터렬 표현방식은 중괄호로~~

const Student = {
  id : 1,
  name : "kitae",
  grade : 3.9
};
console.log(Student);
console.log(Student.id);
console.log(Student.name);
console.log(Student.grade);