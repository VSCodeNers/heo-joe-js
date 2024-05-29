// 뒤에 있는 큰 수 찾기

function solution(numbers) {
    let answer = [];
    let stack = [];     
    
    while(numbers.length) {
        // 스택에 담긴게 없으면? 현재 수가 제일 큰 거니까 -1
        // 현재 수를 스택에 담고 numbers에서 뻄
        if (!stack.length) {
            answer.push(-1);
            stack.push(numbers.pop());
        } 
        // 스택에 담긴게 있으면? 
        else {
            // 스택에 있는 값 비교해서 가장 가까이 있는 큰 수 찾음
            if (stack[stack.length - 1] > numbers[numbers.length - 1]) {
                // 큰 수 찾았으면 그걸 answer에 담고 numbers에서 뻄
                answer.push(stack[stack.length - 1]);
                stack.push(numbers.pop());
            } else {
                stack.pop();
            }
        }
    }
    return answer.reverse();
}