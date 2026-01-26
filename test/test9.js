// this 깨짐
"use strict";
class Car {
    model = undefined;
    constructor(argModel) { this. model = argModel; }
    prtModel() {
        console.log(this.model);
    }
}

car1 = new Car("Y");
car1.prtModel(); // Y

const encar = car1.prtModel;
encar.call(car1); // -> Y
encar(); // undefined