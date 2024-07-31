// 백준 - 프렉탈 평면(1030)
let s, N, K, R1, R2, C1, C2;
let answer;
const solution = ( input ) => {
  [ s, N, K, R1, R2, C1, C2 ] = input.shift().split(' ').map((o) => parseInt(o));
  answer = new Array(51).fill(0);
  for(let i = 0; i < 51; i++) {
    answer[i] = new Array(51).fill(0);
  }
  
  fractal(0, 0, Math.pow(N, s), false);

  for(let i = 0; i <= R2 - R1; i++) {
    let printLine = ""
    for(let j = 0; j <= C2 - C1; j++) {
      printLine += answer[i][j].toString();
    }
    console.log(printLine);
  }
}

const fractal = ( x, y, size, isBlack ) => {
  if(x > C2 || x + size <= C1 || y > R2 || y + size <= R1) return; // 범위 벗어나면 패스

  // 분할 끝
  if(size == 1) {
    answer[y - R1][x - C1] = isBlack ? 1 : 0;
    return;
  }

  let nextSize = size / N;
  let black = [(N - K) / 2, N - (N - K) / 2];
  for(let i = 0; i < N; i++) {
    let nextY = y + nextSize * i;
    for(let j = 0; j < N; j++) {
      let nextX = x + nextSize * j;
      fractal(nextX, nextY, nextSize, isBlack || (i >= black[0] && i < black[1])&& (j >= black[0] && j < black[1]));
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