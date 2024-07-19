// 백준 - RGB거리 2(17404)
const solution = ( input ) => {
  const N = parseInt(input.shift());

  let house = [];
  for(let i = 0; i < N; i++) {
    house.push(input.shift().split(" ").map(el => parseInt(el)));
  }

  
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);