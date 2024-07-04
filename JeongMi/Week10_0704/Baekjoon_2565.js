// 백준 - 전깃줄(2565)
const solution = ( input ) => {
  const N = parseInt(input.shift());
  let arr = input.map((o) => o.split(" ").map((p) => parseInt(p)));

  let dp = Array(N).fill(1);
  let answer = 0;
  
  // A 전봇대의 전깃줄을 기준으로 오름차순 정렬
  arr.sort((o1, o2) => o1[0] - o2[0]);

  for(let i = 1; i < N; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i][1] > arr[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  answer = N - Math.max(...dp);
  console.log(answer);
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);