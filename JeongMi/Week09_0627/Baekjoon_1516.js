// 백준 - 게임 개발(1516)
const solution = ( input ) => {
  const N = parseInt(input[0])

  let graph = Array.from({length: N + 1}, () => []);
  let indegree = Array(N + 1).fill(0);  // 건물 진입차수
  let buildTime =  Array(N + 1).fill(0) // 건물 건설 시간

  for(let i = 1; i <= N; i++) {
    let build = input[i].replace(' -1', '').split(' ').map(el => parseInt(el))
    
    buildTime[i] = build[0];
    for(let j = 1; j < build.length; j++) {
      // 이어지는 노드
      graph[build[j]].push(i);
      // 들어오는 간선의 개수 = 진입차수
      indegree[i]++;
    }
  }

  let totalTime = Array(N + 1).fill(0); // 총 건설 시간
  let queue = [];

  for(let i = 1; i <= N; i++) {
    // 진입차수가 0 = 선건설 되어야 하는 건물이 없다 = 먼저 건설해도 된다
    if(indegree[i] == 0) {
      queue.push(i);
      // 해당 건물을 건설하는 데에 필요한 총 건설 시간 = 대기 시간이 없으므로 해당 건물 건설 시간만 고려
      totalTime[i] = buildTime[i];
    }
  }

  while(queue.length > 0) {
    const from = queue.shift();

    // from으로부터 이어지는 간선
    for(const next of graph[from]) {
      // 건설했으므로, 진입차수 감소
      indegree[next]--;

      // 먼저 건설되어야 하는 건물이 없게 됨
      if(indegree[next] == 0)
        queue.push(next);

      totalTime[next] = Math.max(totalTime[next], totalTime[from] + buildTime[next]);
    }
  }

  totalTime.shift(); // 0번 인덱스 제거
  console.log(totalTime.join('\n'));
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);