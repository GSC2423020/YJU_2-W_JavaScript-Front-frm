// Higher order function 고차 함수
// -> 함수를 인자 값으로 받는다.

let myList = [10, 20, 30];

function forEach(argList, argFn) {

    for (const value of argList) {
        argFn(value);
    }
}

let myFn = function (argValue) {
    console.log(argValue);
};

forEach(myList, myFn); // 10 20 30