const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input.shift());
const solution = input.shift().split(" ").map(Number).sort((a, b) => a - b);

// 배열 양 끝
let left = 0;
let right = N - 1;

let tempSum = Number.MAX_SAFE_INTEGER;  // 현재 찾은 가장 작은 합을 저장
let answer = "";                        // 이때까지 찾은 가장 작은 합을 저장

while (left < right) {
  let sum = solution[left] + solution[right];

  // 현재 계산된 값이 지금까지 찾은 가장 작은 합보다 더 작은 경우
  // 가장 작은 합을 갱신함
  if (tempSum > Math.abs(sum)) {
    tempSum = Math.abs(sum);
    answer = [solution[left], solution[right]];
  }

  // 합이 0보다 작으면 합을 증가시키기 위해 왼쪽 포인터 증가
  // 0보다 크거나 같으면 합을 감소시키기 위해 오른쪽 포인터 증가
  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

// 숫자 쌍을 오름차순 정렬 후 출력
console.log(answer.sort((a, b) => a - b).join(" "));