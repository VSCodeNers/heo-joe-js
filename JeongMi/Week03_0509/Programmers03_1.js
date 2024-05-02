// 프로그래머스 - 튜플(Lv.2)
function solution(s) {
  // 맨앞과 맨뒤의 {{, }}를 제거하고 },{ 기준으로 자르기
  let list = s.replace("{{", "").replace("}}", "").split("},{");
  
  // 집합 내 원소 / , 기준으로 자르기
  let tuples = [];
  for (let i = 0; i < list.length; i++) {
    tuples.push(list[i].split(","));
  }
  
  // 원소의 개수를 기준으로 오름차순 정렬
  tuples.sort((o1, o2) => {
    if (o1.length > o2.length) {
      return 1;
    } else {
      return -1;
    }
  });
  
  let answer = [];
  
  // 중복제거를 위한
  const set = new Set();

  // 튜플 배열을 돌면서 result에 push
  for (let tuple of tuples) {
    for (let v of tuple) {
      if (!set.has(v)) {
        set.add(v);
        // 문자로 저장되어 있기 때문에 정수로 변환
        answer.push(parseInt(v));
      }
    }
  }
  
  
  return answer;
}