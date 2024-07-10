const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = +input[0];
const buildings = [0].concat(input[1].split(' ').map(Number));
let answer = Array(N + 1).fill(0);

// 모든 건물의 오른쪽, 왼쪽 건물 중 볼 수 있는 건물들 구함
// + 그 중 최댓값 업데이트 하면서 뺑뺑이
for (let i = 1; i <= N; i++) {
    let rightMax = -Infinity;
    let leftMin = Infinity;
    const x1 = i;
    const y1 = buildings[i];
    // 오른쪽 볼 수 있는 빌딩 수
    // 앞에 빌딩보다 기울기가 낮은 빌딩은 보이지 않기 때문에
    // i번째 건물에서 가까운 건물부터 기울기를 계산함 (j)
    // 앞에서 나온 최대 기울기보다 크면 볼 수 있는 count + 1
    for (let j = i; j <= N; j++) {
        if (i === j) continue;
        const x2 = j;
        const y2 = buildings[j];
        const incline = (y2 - y1) / (x2 - x1);  // 기울기 구함
        if (incline > rightMax) {
            // i번째 빌딩에서 볼 수 있는 빌딩 수를 answer에 저장
            answer[i]++;
            rightMax = incline;
        }
    }
    // 왼쪽 볼 수 있는 빌딩 수
    // 앞에 빌딩보다 기울기가 낮은 빌딩만 보이기 때문에
    // 오른쪽 구하던 거랑 반대로
    for (let j = i; j >= 1; j--) {
        if (i === j) continue;
        const x2 = j;
        const y2 = buildings[j];
        const incline = (y2 - y1) / (x2 - x1);
        if (incline < leftMin) {
            // i번째 빌딩에서 볼 수 있는 빌딩 수를 answer에 저장
            answer[i]++;
            leftMin = incline;
        }
    }
    
}
// 가장 많은 고층빌딩이 보여야 하므로 answer에서 최댓값 출력
console.log(Math.max(...answer));