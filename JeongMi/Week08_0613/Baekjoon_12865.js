//  백준 - 평범한 배낭(12865)
const solution = ( input ) => {
  const [ N, K ] = input[0].split(' ').map(el => parseInt(el));
  // 물건의 정보
  const things = [];
  for(let i = 1; i <= N; i++) {
    things.push(input[i].split(' ').map(el => parseInt(el)));
  }

  const dp = Array.from(Array(N), () => Array(K + 1).fill(0))

  for(let i = 0; i < N; i++) {
    // 최대 무게
    for(let j = 1; j <= K; j++) {
      // i번째 물건을 담을 수 없는(X) 경우
      if(things[i][0] > j) {
        // i-1번째에서의 최대 가치와 동일
        dp[i][j] = i == 0 ? 0 : dp[i - 1][j];
      }
      // i번째 물건을 담을 수 있는(O) 경우
      else {
        // i번째 물건을 담는 것과 안 담는 것 중 더 큰 값 구하기
        // 담을 경우 = i번째 물건을 담고 남는 무게에서의 최대 가치 + i번째 물건의 가치
        dp[i][j] = i == 0 ?
          0
          :
          Math.max(
            dp[i - 1][j - things[i][0]] + things[i][1],
            dp[i - 1][j]
          );
      }
    }
  }

  console.log(dp[N - 1][K]);
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);