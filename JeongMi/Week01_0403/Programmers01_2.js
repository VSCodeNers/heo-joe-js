// 프로그래머스 - 연속 부분 수열 합의 개수(Lv.2) / JavaScript
function solution(elements) {
  let nums = [];
  let len = elements.length;
  
  for(let i = 1; i <= len; i++) {
    elements.map((e, idx) => {
      // 길이가 i인 연속 부분 수열
      let sum = 0;
      for(let j = 0; j < i; j++) {
        sum += elements[(idx + j) % len];
      }
      nums.push(sum);
    });
  }
  
  return new Set(nums).size;
}