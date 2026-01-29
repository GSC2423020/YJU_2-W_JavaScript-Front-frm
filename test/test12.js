class Student {
    
    // 2. INstance Member method
    // 3. Class Member variable
    // 4. Class Member method

    name = ""; // ES 2022
    
    // Constructor
    constructor(argName) {
        // 1. Instance Member variable
        this.name = argName;
    }
}

let std1 = new Student("Kim");
let std2 = new Student("Lee");

console.log(std1.name, std2.name) // Kim Lee