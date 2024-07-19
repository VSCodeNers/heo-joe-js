// 백준 - X와 K(1322) -> 9점에서 틀렸습니다
const solution = ( input ) => {
  const [ X, K ] = input.shift().split(' ').map((o) => parseInt(o).toString(2));

  // X + Y와 X | Y가 같다는 것은 X & Y가 0이라는 것을 의미
  // 10101 + 01010 = 10101 | 01010
  // 이런식으로 1과 0의 위치가 완전히 반대되거나, 0일 경우에 해당 식이 성립됨
  // K번째를 구하려면, X를 2진수로 바꾼 거에서 1인 자리는 0으로 하고 0인 자리에 K의 2진수를 채워주면 됨

  let index = K.length - 1;
  let Y = "";
  for(let i = X.length - 1; i >= 0; i--) {
    if(X.charAt(i) == '0' && index >= 0) 
      Y = K.charAt(index--).toString() + Y;
    else Y = "0" + Y
  }
  for(let i = index; i >= 0; i--) {
    Y = K.charAt(index--).toString() + Y;
  }
  console.log(Number(BigInt(`0b${Y}`)));
}
/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);