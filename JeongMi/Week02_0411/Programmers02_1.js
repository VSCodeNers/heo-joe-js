// 프로그래머스 - 할인 행사(Lv.2)
function solution(want, number, discount) {
  let answer = 0;
  
  for(let i = 0; i < discount.length - 9; i++) {
    let check = [...number];
    
    for(let j = i; j < i + 10; j++) {
      let idx = want.indexOf(discount[j]);
      
      if(idx != -1) {
        check[idx]--;
      }
    }
    
    answer++;
    for(let j = 0; j < check.length; j++) {
      if(check[j] > 0) {
        answer--;
        break;
      }
    }
  }
  
  return answer;
}