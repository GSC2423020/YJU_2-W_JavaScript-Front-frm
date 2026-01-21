print = console.log;

let x = 2;
var a = 1;

function bar() {
    print(a);   
}

function outer(){
    let y = 2;
    // outer関数が実行されるときに
    function inner(){
        let z = 3;
        print(x, y, z);
    }
    return inner;
}

//  outer() の戻り値（inner 関数）を f に代入
const f = outer();
// inner 関数を実行
f();
