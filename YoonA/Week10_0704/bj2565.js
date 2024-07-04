let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());                       
let arr = input.map((v) => v.split(" ").map(Number));
let dp = Array.from({ length: N }, () => 1);
let answer = 0;

// 시작 위치가 랜덤이니까 오름차순 정렬 해줌
arr = arr.sort((a, b) => a[0] - b[0]);

// 가장 긴 증가 부분 수열의 길이 구함
for (let i = 1; i < N; i++) {
    count = 0;
    for (let j = 0; j < i; j++) {
        if (arr[i][1] > arr[j][1]) {
            // dp[i]는 i에서 끝나는 가장 긴 증가 부분 수열의 길이를 저장
            // dp[j] + 1은 j에서 끝나는 수열에 arr[i]를 추가한 경우의 길이
            // dp[i]와 dp[j] + 1 중 더 큰 값을 dp[i]에 저장하여 갱신
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

// 부분 수열을 전체 길이 N에서 뺀 값이 정답이라고 함
answer = N - Math.max(...dp);
console.log(answer);