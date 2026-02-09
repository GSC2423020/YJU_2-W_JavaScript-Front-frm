import { Student } from "./gsc/student.js";

let stdList = [];
stdList.push(new Student("Kim", 20, "M"));
stdList.push(new Student("Lee", 21, "M"));
stdList.push(new Student("Jung", 22, "F"));
stdList.push(new Student("Jeo", 23, "M"));

// 여자 이름 배열
stdList
    .filter(v => v.gender === "F")
    .forEach(v => console.log(v.name)); // ["Jung"]

// 남자 나이 합
let sumAge = stdList
    .filter(v => v.gender === "M")
    .reduce((acc, v) => acc += v.age, 0);
console.log(sumAge); // 64

// 모두 남자인가?
let whoIsMale = stdList
    .every(v => v.gender === "M");
console.log(whoIsMale); // false

// 나이 내림차순 (원본 유지)
let sortedList = stdList
    .sort((a, b) => b.age - a.age > 0);
console.log(sortedList); // (4) [Student, Student, Student, Student]