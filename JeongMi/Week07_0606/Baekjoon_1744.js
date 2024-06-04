// 백준 - 수 묶기(1744)
const solution = ( input ) => {
  const N = input[0];
  let num = input.slice(1);

  let answer = 0;

  let positive = []; // 양수 (2 이상)
  let negative = []; // 0과 음수
  
  // 음수, 양수 분리
  for(i of num) {
    if(i > 1) {
      positive.push(i);
    }
    else if(i <= 0) {
      negative.push(i);
    }
    else {
      // 1인 경우, 곱하는 것보다 그냥 더하는 게 더 큼!
      answer += i;
    }
  }

  // 양수는 내림차순
  positive.sort((o1, o2) => {
    return o2 - o1;
  });
  // 음수는 오름차순
  negative.sort((o1, o2) => {
    return o1 - o2;
  });
  

  // 양수는 큰 값 곱하기
  for(let i = 0; i < positive.length; i+= 2) {
    // 곱할 수가 남음
    if(i + 1 < positive.length) {
      answer += positive[i] * positive[i + 1];
    }
    else {
      answer += positive[i];
    }
  }
 
  // 음수는 작은 값 곱하기
  for(let i = 0; i < negative.length; i+= 2) {
    // 곱할 수가 남음
    if(i + 1 < negative.length) {
      answer += negative[i] * negative[i + 1];
    }
    else {
      answer += negative[i];
    }
  }

  console.log(answer);
};

// 테스트용
/*
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);
*/
// 제출용
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on("line", (line) => {
  input.push(parseInt(line))
}).on("close", () => {
  solution(input);
  process.exit();
});