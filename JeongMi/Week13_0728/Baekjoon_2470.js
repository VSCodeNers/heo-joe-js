// 백준 - 두 용액(2470)
const solution = ( input ) => {
  const N = parseInt(input.shift());
  let liquid = input.shift().split(" ").map(el => parseInt(el));

  liquid = liquid.sort((o1, o2) => o1 - o2); // 오름차순 정렬

  let min = 0;
  let max = N - 1;

  let answer = [min, max, Infinity];

  while(min < max) {
    let mix = liquid[min] + liquid[max];

    // 0에 더 근접한 값인지 확인
    if(Math.abs(mix) < answer[2]) {
      answer[0] = liquid[min];
      answer[1] = liquid[max];
      answer[2] = Math.abs(mix);
    }

    if(mix < 0) { // 용액의 합이 0보다 작을 때는 작은 값을 키우기
      min++;
    }
    else { // 용액의 합이 0보다 클 때는 큰 값을 줄이기
      max--;
    }
  }

  console.log(answer[0] + " " + answer[1]);
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);