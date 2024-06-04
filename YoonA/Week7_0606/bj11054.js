// 가장 긴 바이토닉 부분 수열

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[n, array] = input;
n = Number(n);
array = array,split(' ').map(i => Number(i));

solution(, array);

const solution = (n, array) => {
    // 앞에서부터 시작하는, 뒤에서부터 시작하는 두 배열을 만듦
    const increaseDp = new Array(n).fill(1);
    const decreaseDp = new Array(n).fill(1);
    

    // 앞에서부터 배열 돌면서 증가하는 부분 수열 최대 길이 구함
    // 현재 값보다 큰 수를 연속해서 이어나가는 개수 저장하면 된다고 함
    for (let i = 1; i < n; i++) {
        let count = 1;
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i]) {
                count = Math.max(count, increaseDp[j] + 1);
            }
        }
        increaseDp[i] = count;
    }
    // 뒤에서부터 배열 돌면서 감소하는 부분 수열 최대 길이 구함
    for (let i = n - 2; i >= 0; i--) {
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[i]) {
                count = Math.max(count, decreaseDp[j] + 1);
            }
        }
        decreaseDp[i] = count;
    }
    // 두 부분 수열의 길이를 더함
    // 최대값 - 1을 해줌 => 앞뒤로 탐색하면서 한번씩 겹치기 때문에
    const answer = increaseDp.map((item, idx) => item + decreaseDp[idx]);
    console.log(Math.max(...answer) - 1);
}