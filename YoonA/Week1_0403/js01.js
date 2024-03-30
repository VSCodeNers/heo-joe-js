// 다음 큰 숫자

function solution(n) {
    let num = n.toString(2).split(''); // 이진수로 변환
    let num2 = 0;
    
    // 1과 같은 경우만 남겨둠
    // 1의 개수 카운트
    let countOne = num.filter((one) => one === '1').length;     
    
    while(countOne !== num2) {
        ++n;
        // n보다 커야 하니 먼저 n+1함
        // 그 값을 2진수로 변환 + 1의 개수 세서 num2에 넣음
        num2 = n.toString(2).split('').filter((one) => one === '1').length;
    }
    
    return n;
}