// 백준 - X와 K(1322)
const solution = ( input ) => {
  const [ X, K ] = input.shift().split(' ').map((o) => BigInt(o));

  // X + Y와 X | Y가 같다는 것은 X & Y가 0이라는 것을 의미
  // 10101 + 01010 = 10101 | 01010
  // 이런식으로 1과 0의 위치가 완전히 반대되거나, 0일 경우에 해당 식이 성립됨
  // K번째를 구하려면, X를 2진수로 바꾼 거에서 1인 자리는 0으로 하고 0인 자리에 K의 2진수를 채워주면 됨

  let Y = 0n;
  let kIndex = 0n;

  for(let i = 0n; (K >> kIndex) != 0n; i++) {
    // X의 이진수에서 ((X >> i) & 1n): 현재 탐색하는 인덱스의 숫자
    // 1이라면? 0으로
    if(((X >> i) & 1n) != 0n) continue;
    // (K >> kIndex) & 1n) : K의 2진수에서 현재 탐색하는 위치의 숫자. 뒤에서부터 탐색
    // 해당 숫자를 i번째로 이동시키고
    // 0이든 1이든 OR 연산해주면 Y에 무조건 들어감
    Y |= ((K >> kIndex) & 1n) << i;
    kIndex++;
  }
  
  console.log(Y.toString());
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);