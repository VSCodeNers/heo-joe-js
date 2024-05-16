// 프로그래머스 - 귤 고르기(Lv.2)
function solution(k, tangerine) {
  let answer = 0;
  let count = new Array(10000001);
  count.fill(0);

  for(let i = 0; i < tangerine.length; i++) {
    count[tangerine[i]]++;
  }
  
  count.sort();

  // 가장 많은 크기의 귤부터 순서대로 담기
  for(let i = 10000000; i >= 1 && k > 0; i--) {
    k -= count[i];
    answer++;
  }

  return answer;
}