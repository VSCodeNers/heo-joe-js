// k진수에서 소수 개수 구하기

function solution(n, k) {
    // 순서
    // k진수로 바꿈 -> 0 기준으로 나눔 -> 나눈 값이 소수인지 아닌지 판별 -> 소수인 값들 세기
    
    let answer = 0;
    // n을 k진수로 변환하고 0 기준 자름
    let array = n.toString(k).split('0');
    
    for (let i = 0; i < array.length; i++) {
        // 소수 찾는 함수에 array[i]번째 넣어서 true면 answer + 1;
        if (FindPrimeNums(array[i]) === true) 
            answer++;
    }
    return answer;
}

function FindPrimeNums(number) {
    number = Number(number);
    // 0 or 1은 소수 아님 => false 반환
    if (number <= 1) 
        return false;
    
    // 2로 나누어지면 소수 아님 => but 2는 소수이므로 true, 나머지 경우는 false 반환
    if (number % 2 === 0) 
        return number === 2 ? true : false;
    
    // number % i 해서 나머지가 0이면 소수 아님 => false 반환
    for (let i = 3; i <= Math.sqrt(number); i++) {
        if (number % i === 0) 
            return false;
    }
    return true;
}