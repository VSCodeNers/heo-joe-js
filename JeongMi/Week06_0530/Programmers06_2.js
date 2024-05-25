// 프로그래머스 - 뒤에 있는 큰 수 찾기(Lv.2)
class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }

  pop() {
    if (this.arr.length <= 0) return null;
    else return this.arr.pop();
  }
  
  peek() {
    return this.arr[this.arr.length - 1];
  }
  
  isEmpty() {
    if(this.arr.length == 0) return true;
    else return false;
  }
}

const solution = (numbers) => {
  let answer = [];
  const stack = new Stack();

  for(let i = numbers.length - 1; i >= 0; i--){
    while(!stack.isEmpty()){
      // 뒷 숫자 중에 큰 수가 나왔다면 뒷 큰수
      if(stack.peek() > numbers[i]){
        answer[i] = stack.peek();
        break;
      }
      // 뒷 큰수가 아직 안 나왔다면 다음 숫자로 탐색
      // 현재 탐색 중인 수보다 뒤에 있으면서 작은 수이므로 버려도 됨
      // = 앞에 나올 수의 뒷 큰수가 될 수 없음
      stack.pop();
    }

    // stack에 들어있는 수(=현재 수의 뒤에 있는 수) 중에 큰 수가 없을 경우
    if(stack.isEmpty())
      answer[i] = -1;

    // 현재 인덱스 숫자 추가
    stack.push(numbers[i]);
  }

  return answer;
}