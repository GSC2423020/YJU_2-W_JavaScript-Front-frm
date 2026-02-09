// 모듈화 1 번째 방법 (선호)
export class Student {
    name = undefined;
    age = undefined;
    gender = undefined;
    constructor(argName, argAge, argGender) {
        this.name = argName;
        this.age = argAge;
        this.gender = argGender;
    }
}

// 모듈화 2 번째 방법
export {Foo};
class Foo {constructor(argName){this.name=argName;}}

// export default
export default class Button {constructor(argBtn){this.btn=argBtn;}}