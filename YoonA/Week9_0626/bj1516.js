const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 건물의 수 N 받아옴
const N = +input.shift();

// 각 건물 건설 시간, 선행 조건을 저장할 배열
const buildingTimes = [];   
const prerequisites = Array.from({ length: N + 1 }, () => []);

input.forEach((line, index) => {
  const data = line.split(' ').map(Number);
  // 첫번째 숫자 => 건물의 건설 시간
  buildingTimes[index + 1] = data[0];
  // 나머지 => 선행 조건 건물 번호
  // prerequisites 배열에 선행 조건 저장함
  for (let i = 1; i < data.length - 1; i++) {
    prerequisites[data[i]].push(index + 1);
  }
});

function solution(N, buildingTimes, prerequisites) {
    const indegrees = Array(N + 1).fill(0);     // 건물로 들어오는 간선 수
    const result = Array(N + 1).fill(0);        // 건물 짓는데 필요한 시간
    const queue = [];

    // 각 건물 선행 조건 개수 계산
    // 건물 i의 선행 조건 돌면서 선행 조건이 있다면 indegrees 증가
    for (let i = 1; i <= N; i++) {
        for (const next of prerequisites[i]) {
            indegrees[next]++;
        }
    }

    // 선행 조건이 없는 건물은 큐에 추가
    // 건물의 건설 시간은 result에 저장
    for (let i = 1; i <= N; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
            result[i] = buildingTimes[i];
        }
    }

    // 큐가 빌 때까지 위상 정렬
    // 각 건물의 최소 건설 시간을 계산함
    // 선행 조건 없는 건물부터 시작해서 각 건물 건설 시간이 최대 되도록
    while (queue.length > 0) {
        // 큐에서 선행 조건 없는 건물 꺼냄
        const current = queue.shift();
        for (const next of prerequisites[current]) {
            indegrees[next]--;
            result[next] = Math.max(result[next], result[current] + buildingTimes[next]);
            // 다음 건물 선행 조건이 모두 해결 됐으면 큐에 추가
            if (indegrees[next] === 0) {
                queue.push(next);
            }
        }
    }

    console.log(result.slice(1).join(' '));
}

solution(N, buildingTimes, prerequisites);
