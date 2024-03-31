// 프로그래머스 - 다음 큰 숫자(Lv.2) / JavaScript
function solution(n) {
  // n을 2진수로 변환했을 때 1의 개수
  // n을 2진수로 변환 = n.toString(2)
  // 1로 매칭되는 것을 다 뽑아냄 = match(/1/g) // ex) "123133101" => {"1", "1", "1", "1"}
  // 원소가 1로만 이루어진 배열이 뽑아지는데, 이 길이를 구하면 1의 개수
  let countOne = n.toString(2).match(/1/g).length;
  
  // n에 1씩 더하면서 2진수로 변환했을 때 1의 개수가 같은 수를 탐색
  let answer = n;
  
  while(true) {
    answer++;
    if(answer.toString(2).match(/1/g).length == countOne) break;
  }
  
  return answer;
}