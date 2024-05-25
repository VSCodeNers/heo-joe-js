// 프로그래머스 - 롤케이크 자르기(Lv.2)
const solution = (topping) => {
  const left = new Set();  // 왼쪽 조각의 토핑 가짓수
  const right = new Set(); // 오른쪽 조각의 토핑 가짓수
  
  const cnt = new Array(10001).fill(0); // 토핑별 개수
  
  let answer = 0;
  
  // if(topping.length == 1) return 0;
  
  topping.map(t => {
    left.add(t);
    cnt[t]++; // 해당 토핑의 개수 카운트
  });
  
  topping.map(t => {
    // 왼쪽 조각에 해당 토핑이 아직 남아있음
    if(cnt[t] > 0) cnt[t]--;
    // 왼쪽 조각에 해당 토핑이 이제 없음
    if(cnt[t] == 0) left.delete(t);
    // 오른쪽 조각에 해당 토핑 추가
    right.add(t);
    // 두 조각의 토핑 가짓수 비교
    if(left.size === right.size) answer++;
  });
  
  return answer;
}