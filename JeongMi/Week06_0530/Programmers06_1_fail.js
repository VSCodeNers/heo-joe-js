// 프로그래머스 - 롤케이크 자르기(Lv.2) - 시간 초과
const solution = (topping) => {
  let answer = 0;
  
  for(let i = 1; i < topping.length; i++) {
    const left = new Set(topping.slice(0, i)).size; // 왼쪽 조각의 토핑 가짓수
    const right = new Set(topping.slice(i)).size;   // 오른쪽 조각의 토핑 가짓수
    
    if(left == right) answer++;
  }
  
  return answer;
}