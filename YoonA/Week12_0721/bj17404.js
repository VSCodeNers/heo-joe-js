const INF = 1000000000;
let cost = [];
let N;

const dp = (first) => {
    let dp = Array.from({ length: 1000 }, () => Array(3).fill(0));

    // 첫 번째 집을 특정 색으로 칠했을 때의 초기 비용
    for (let i = 0; i < 3; i++) {
        // 첫 번째 집과 두 번째 집을 같은 색으로 칠할 수 없으므로
        // INF로 설정하여 해당 선택을 불가능하게 만듦
        if (i === first) 
            dp[1][i] = INF;
        // 첫 번째 집의 색으로 칠함
        else 
            dp[1][i] = cost[1][i] + cost[0][first];
    }

    // 최소 비용 계산
    // i번째 집을 각 색으로 칠하는 경우 (순서대로 빨, 초, 파))
    for (let i = 2; i < N; i++) {
        dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }

    let result = INF;
    // 첫 번째 집과 마지막 집의 색이 같은 경우를 제외하고 최소 비용 갱신
    for (let i = 0; i < 3; i++) { 
        if (i !== first)
            result = Math.min(result, dp[N - 1][i]);
    }
    return result;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

    N = parseInt(input[0], 10);     // 집의 개수
    cost = Array.from({ length: N }, (_, i) => input[i + 1].split(' ').map(Number));    // 색칠 비용

    let min_cost = INF;
    // 첫 번째 집의 색을 바꾸면서 최소 비용 갱신
    for (let i = 0; i < 3; i++) 
        min_cost = Math.min(min_cost, dp(i));

    console.log(min_cost);
}

main();