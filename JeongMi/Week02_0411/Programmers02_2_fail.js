// 프로그래머스 - n^2 배열 자르기(Lv.2) -> 45.0 / 100.0 런타임 에러
function solution(n, left, right) {
  let answer = [];
  
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      let num = Math.max(i + 1, j + 1);
      answer.push(num);
    }
  }
  
  answer = answer.slice(left, right + 1);
  
  return answer;
}