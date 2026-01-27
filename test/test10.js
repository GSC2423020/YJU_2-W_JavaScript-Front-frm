const kim = {name: "kim"};
const lee = {name: "lee"};
const jung = {name: "jung"};

function sayHello(msg1, msg2, msg3) {
    console.log(this.name + " Hello!" + msg1 + msg2 + msg3);
}

const input1 = [1, 2, 3] // array
const input2 = [10, 20, 30] // array
const input3 = [100, 200, 300] // array

sayHello(); // undefined Hello!undefinedundefinedundefined
sayHello.call(kim, input1); // kim Hello!1,2,3undefinedundefined
sayHello.apply(lee, input2); // lee Hello!102030

const newFunction = sayHello.bind(jung);
newFunction(input3); // jung Hello!100,200,300undefinedundefined