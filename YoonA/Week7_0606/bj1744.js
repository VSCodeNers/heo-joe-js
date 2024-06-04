// 수 묶기
const [ _, ...array ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(v => +v);

const solution = (array) => {
    const positive = array.filter(num => num > 0).sort((a, b) => b - a);
    const negative = array.filter(num => num <= 0).sort((a, b) => a - b);
    let answer = 0;

    // 양수인 경우
    for (i = 0; i < positive.length; i += 2) {
        if (i === positive.length - 1) {
            // 마지막 숫자면 곱하고 더하고 계산할게 없으니 걍 넣음
            answer += positive[i];
        // 두 수를 곱한 것보다 더한게 더 큰 지 확인함. ex) 1이 있으면 더하는게 더 크므로
        // 곱한게 크면 곱해서 answer에, 더한게 크면 더해서 answer에
        } else if (positive[i] * positive[i + 1] > positive[i] + positive[i + 1]) {
          answer += positive[i] * positive[i + 1];
        } else {
          answer += positive[i] + positive[i + 1];
        }
    }
    // 음수인 경우
    for (i = 0; i < negative.length; i += 2) {
        // 음수일 때 곱하면 무조건 더한 것보다 커지므로 두 수를 곱해서 더하면 됨
        // 양수랑 똑같이 마지막 숫자면 그냥 더해줌
        if (i === negative.length - 1) {
            answer += negative[i];
        } else {
            answer += negative[i] * negative[i + 1];
        }
    }
      
    console.log(answer);
}
solution(array);