function makeDelay(argMs) {
    // 현재 시간을 저장
    const start = Date.now();

    // 지정한 밀리초가 지날 때까지 반복
    // (CPU를 계속 점유하는 동기 방식 지연)
    while (Date.now() - start < argMs) {
        // 아무 작업도 하지 않음
    }
}

console.log("10");

console.log("20");

setTimeout(() => {console.log("50");}, 1000);

console.log("30");

makeDelay(5000);

console.log("40");