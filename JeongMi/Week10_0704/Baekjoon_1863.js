// 백준 - 스카이라인 쉬운거(1863)
const solution = ( input ) => {
  const N = parseInt(input.shift());
  let skylines = input.map((o) => o.split(" ").map((p) => parseInt(p)));

  // x좌표를 기준으로 오름차순 정렬
  skylines.sort((o1, o2) => o1[0] - o2[0]);

  let answer = 0;
  const stack = [];

  for(let i = 0; i < skylines.length; i++) {
    // 스택에 쌓인 값 = 제일 가까운 건물의 높이가 현재 체크 중인 건물의 높이보다 높은 경우
    // 해당 높이의 건물이 무조건 있는 것이므로 카운트
    while(stack[stack.length - 1] > skylines[i][1]) {
      answer++;
      stack.pop();
    }

    // 스택이 비어있거나, 가장 가까운 건물의 높이보다 낮으면 스택에 쌓기
    if(skylines[i][1] > 0 && (stack.length == 0 || stack[stack.length - 1] < skylines[i][1])) {
      stack.push(skylines[i][1]);
    }
  }

  // 남은 거
  answer += stack.length;

  console.log(answer);
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);