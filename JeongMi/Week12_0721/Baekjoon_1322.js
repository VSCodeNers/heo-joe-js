// 백준 - X와 K(1322)
const solution = ( input ) => {
  const [ X, K ] = input.shift().split(' ').map((o) => parseInt(o));

  
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);