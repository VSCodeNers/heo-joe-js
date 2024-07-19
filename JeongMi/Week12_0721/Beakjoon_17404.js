// 백준 - RGB거리 2(17404)
const solution = ( input ) => {
  const N = parseInt(input.shift());

  let house = [];
  for(let i = 0; i < N; i++) {
    house.push(input.shift().split(" ").map(el => parseInt(el)));
  }

  let answer = Infinity;
  
  for(let first = 0; first < 3; first++) {
    let dp = [];

    let one = first == 0 ? house[0][0] : Infinity;
    let two = first == 1 ? house[0][1] : Infinity;
    let three = first == 2 ? house[0][2] : Infinity;

    // 첫번째 집
    let firstList = [one, two, three];

    dp.push(firstList);

    for(let i = 1; i < N; i++) {
      let line = [];
      // 이전 집과 같은 경우를 제외
      line.push(Math.min(dp[i-1][1], dp[i-1][2]) + house[i][0]);
      line.push(Math.min(dp[i-1][0], dp[i-1][2]) + house[i][1]);
      line.push(Math.min(dp[i-1][0], dp[i-1][1]) + house[i][2]);

      dp.push(line);
    }

    for(let i = 0; i < 3; i++) {
      if(first != i) answer = Math.min(dp[N - 1][i], answer);
    }
  }

  console.log(answer);
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);