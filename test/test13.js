class Student { // ES6
    constructor() { // constructor function
        this.x = 2;
    }
}

function Bar() { // Legacy, constructor function
    this.x = 20;
}

std1 = new Student();
bar1 = new Bar();
console.log(std1.prototype === bar1.prototype);