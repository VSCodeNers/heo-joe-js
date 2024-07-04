let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input.shift();

const data = input.map((value) => +value.split(" ")[1]);
let stack = [];
let count = 0;

data.map((v) => {
    // 현재 높이 v가 스택 맨 위보다 작다면? => 스택에서 값 꺼내고 count 증가
    // => stack의 맨 위의 값이 현재 값보다 작을때까지 반복
    while (stack.length !== 0 && v < stack[stack.length - 1]) {
        stack.pop();
        count++;
    }

    // 현재 높이가 0보다 커야하고,
    // stack이 비어있거나 stack의 맨 위의 값보다 현재 값이 클 때 
    // => 스택에 현재 높이 추가함
    if (v > 0 && (stack.length === 0 || v > stack[stack.length - 1])) {
        stack.push(v);
    }
});

// 남은 스택 길이를 count에 더해서 결과 출력
console.log(count + stack.length);