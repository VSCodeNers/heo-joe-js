// 평범한 배낭

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// n: 물건 개수, k: 최대 허용 무게
let [N, K] = input.shift().split(' ').map(Number);
// 각 물건의 무게, 가치 저장
const ItemInfo = input.map(v => v.split(' ').map(Number));
let dp = Array.from({ length: N + 1 }, () => Array.from({ length: K + 1 }, _ => 0));

// 물건을 하나씩 갱신.
for (let i = 1; i < ItemInfo.length + 1; i++) {
    // 현재 물건 무게랑 가치 저장
    const [W, V] = ItemInfo[i - 1];
    for (let j = 1; j < K + 1; j++) {
        // 현재 물건을 포함 했을 때 가치랑 포함하지 않았을 때 가치를 비교함
        // 더 큰 값을 dp에 넣음
        if (j - W >= 0) {
            dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
        } else {
            // 현재 물건 무게가 j보다 큰거면 => 현재 물건 포함 못하니까 걍 이전 값 사용
            dp[i][j] = dp[i - 1][j];
        }
    }
}
console.log(dp[N][K]);