const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
const T = parseInt(input[index++].trim(), 10);                  // 테스트 케이스 개수
const results = [];

for (let t = 0; t < T; t++) {
  const N = parseInt(input[index++].trim(), 10);                // 동전의 가지 수
  const coins = input[index++].trim().split(' ').map(Number);   // 동전 종류
  const M = parseInt(input[index++].trim(), 10);                // 목표 금액

  const dp = Array(M + 1).fill(0);
  // 0원 만드는 방법은 하나뿐이므로
  dp[0] = 1;

  // 각 동전을 사용할 떄마다 금액 j를 만드는 법의 수를 계산
  for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j <= M; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  results.push(dp[M]);
}

results.forEach(result => console.log(result));