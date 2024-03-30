// 연속 부분 수열 합의 개수

function solution(elements) {
    let arr = [...elements, ...elements];
    let set = new Set();
    
    // sum 값을 구함
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j + i < arr.length; j++) {
            // 부분수열의 합을 set 안에 넣음
            let sum = arr.slice(j, j + i).reduce((a, b) => a + b, 0);
            set.add(sum);
        }
    }
    // set의 길이가 곧 수열의 개수이므로
    return set.size;
}