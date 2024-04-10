// n^2 배열 자르기

function solution(n, left, right) {
    let answer = [];
    
    while(left <= right) {
        // answer 배열에 left부터 1씩 높여가면서 right까지 넣어줌
        answer.push(Math.max(Math.floor(left / n), left % n) + 1);
        left++;
    }
    
    return answer;
}