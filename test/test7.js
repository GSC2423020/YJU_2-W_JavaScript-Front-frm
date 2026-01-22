let x = 1;

function a_1() {
    let y = 2;

    function  a_2() {
        let z = 3;
        y++;
        console.log(x, y, z);
    }
    return a_2; // 함수가 호출한 곳으로 전달됨.
    // return이 아니라 a_2();라면
    // 첫 번째 bar()에서 console.log(x, y, z)는 실행되지만,
    // 반환값이 없어 TypeError: bar is not a function
    // → 여기서 프로그램 멈춤 (두 번째 bar()는 실행도 못 함)
}

function b_1() {
    const bar = a_1(); // 폐쇄 함수로서 상태 값을 가진다.
    bar(); // a_2() -> 1, 3, 3
    bar(); // a_2() -> 1, 4, 3
}

b_1();