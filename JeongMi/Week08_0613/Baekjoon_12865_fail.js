//  백준 - 평범한 배낭(12865) - 시간초과
let max = 0, N, K;
const things = [];
let visited = [];

const solution = ( input ) => {
  [ N, K ] = input[0].split(' ').map(el => parseInt(el));
  // 물건의 정보
  for(let i = 1; i <= N; i++) {
    things.push(input[i].split(' ').map(el => parseInt(el)));
  }

  visited = new Array(N).fill(false);
  maxWeight(0, 0, 0);

  console.log(max);
}
const maxWeight = ( idx, weight, value ) => {
  if(weight > K) return;

  max = Math.max(max, value);

  for(let i = idx; i < N; i++) {
    if(!visited[i]) {
      visited[i] = true;
      maxWeight(i + 1, weight + things[i][0], value + things[i][1]);
      visited[i] = false;
    }
  }
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);