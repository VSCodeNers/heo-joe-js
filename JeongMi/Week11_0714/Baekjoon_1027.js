// 백준 - 고층 건물(1027)
const solution = ( input ) => {
  const N = parseInt(input.shift());
  const building = input.shift().split(' ').map((o) => parseInt(o));
  let answer = 0;

  for(let i = 0; i < N; i++) {
    let cnt = 0;
    
    // 왼쪽
    let min = Infinity;
    for(let j = i - 1; j >= 0; j--){
      let temp = (building[j] - building[i]) / (j - i);
      if(min > temp) {
        cnt++;
        min = temp;
      }
    }
    
    // 오른쪽
    let max = -Infinity;
    for(let j = i + 1; j < N; j++) {
      let temp = (building[j] - building[i]) / (j - i);
      if(max < temp) {
        cnt++;
        max = temp;
      }
    }

    if(answer < cnt) answer = cnt;
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