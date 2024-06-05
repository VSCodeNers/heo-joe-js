// 백준 - 가장 긴 바이토닉 부분 수열(11054)
let leftDp = [];
let rightDp = [];
let list = [];

const solution = ( N ) => {
  leftDp = new Array(N).fill(-1);
  rightDp = new Array(N).fill(-1);

  for(let i = 0; i < N; i++) {
    leftUp(i);  // 왼쪽 수열 체크
    rightDown(i); // 오른쪽 수열 체크
  }
  
  let max = 0;
  for(let i = 0; i < N; i++) {
    // 1을 더하는 이유: 왼쪽, 오른쪽을 나누는 기준인 가운데 수도 포함해야 함
    max = Math.max(max, leftDp[i] + rightDp[i] + 1);
  }

  console.log(max);
};

// 왼쪽 오름차순
const leftUp = (num) => {
  // 탐색하지 않은 위치
  if(leftDp[num] == -1) {
    leftDp[num] = 0;

    for(let i = num - 1; i >= 0; i--) {
      // 왼쪽에서 본인보다 작은 수 발견
      if(list[num] > list[i]) {
        // 해당 수를 포함하는 게 더 수열이 길지 확인
        leftDp[num] = Math.max(leftDp[num], leftUp(i) + 1);
      }
    }
  }

  return leftDp[num];
}

// 오른쪽 내림차순
// 왼쪽 오름차순
const rightDown = (num) => {
  // 탐색하지 않은 위치
  if(rightDp[num] == -1) {
    rightDp[num] = 0;

    for(let i = num + 1; i < rightDp.length; i++) {
      // 오른쪽에서 본인보다 작은 수 발견
      if(list[num] > list[i]) {
        // 해당 수를 포함하는 게 더 수열이 길지 확인
        rightDp[num] = Math.max(rightDp[num], rightDown(i) + 1);
      }
    }
  }

  return rightDp[num];
}

// 테스트용
/*
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const N = parseInt(input[0]);
list = input[1].split(' ').map(el => parseInt(el));

solution(N);
*/

// 제출용
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = parseInt(input[0]);
  list = input[1].split(' ').map(el => parseInt(el));

  solution(N);
  process.exit();
});