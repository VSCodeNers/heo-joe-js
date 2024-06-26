// 백준 - 동전(9084)
const solution = ( input ) => {
  const T = parseInt(input[0]);
  for(let i = 0; i < T; i++) {
    const N = parseInt(input[i * 3 + 1]); // 동전의 가지수
    const coin = input[i * 3 + 2].split(' ').map(el => parseInt(el)); // 동전의 각 금액
    const M = parseInt(input[i * 3 + 3]); // 만들어야 할 금액

    let dp = Array(M + 1).fill(0); // dp[금액]
    dp[0] = 1;

    for(let i = 0; i < N; i++) {
      for(let j = coin[i]; j <= M; j++) {
        // coin[i]를 썼을 때 만들 수 있는 경우의 수 누적
        dp[j] += dp[j - coin[i]];
      }
    }

    console.log(dp[M]);
  }
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);