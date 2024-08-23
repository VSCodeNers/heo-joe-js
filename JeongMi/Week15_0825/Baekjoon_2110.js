// 백준 - 공유기 설치(2110)
const solution = ( input ) => {
  const [ N, C]  = input[0].split(' ').map(Number);
  let houses = input.slice(1, N + 1).map(Number);

  // 오름차순 정렬
  houses.sort((a, b) => a - b);

  let low = 1; // 최소 거리의 최소값
  let high = houses[N-1] - houses[0] + 1; // 최소 거리의 최대값

  let answer = 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    // 설치 가능한 공유기 개수가 C보다 작으면, 거리 좁히기
    if (wifi(mid) < C) {
      high = mid;
    } else {
      low = mid + 1;
      answer = mid; // 일단 거리가 mid일 때 공유기 C개 설치 가능하므로 체크
    }
  }

  console.log(answer);

  function wifi(d) {
    let cnt = 1;
    let preHouse = houses[0]; // 제일 가까운 곳에 설치한 공유기

    for (let i = 1; i < houses.length; i++) {
      // 거리가 d 이상
      if (houses[i] - preHouse >= d) {
        cnt++;
        preHouse = houses[i];
      }
    }

    return cnt;
  }
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);