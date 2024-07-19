// 백준 - X와 K(1322) - 시간 초과
const solution = ( input ) => {
  const [ X, K ] = input.shift().split(' ').map((o) => parseInt(o));

  let Y = 0;
  let cnt = 0;
  
  while(cnt < K) {
    Y++;
    if((X + Y) == (X | Y)) cnt++;
  }

  console.log(Y);
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);