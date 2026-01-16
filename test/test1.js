print = console.log;

function sayHello() {
    print("Hello1");
}

function helloSomething() {
    let name = "GSC";
    function bar() {
        print("Hello2" + name);
    }
    return bar;
}

let foo = helloSomething();
foo();