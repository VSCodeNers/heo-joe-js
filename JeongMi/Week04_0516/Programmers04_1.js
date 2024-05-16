// 프로그래머스 - 게임 맵 최단거리(Lv.2)

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let row = 0; // 행
let col = 0; // 열

const solution = (maps) => {
  row = maps.length;
  col = maps[0].length;
  
  let answer = bfs(maps);
  
  return answer;
}

const bfs = (maps) => {
  let queue = [[0, 0, 1]]; // x, y, 이동거리
  maps[0][0] = 0; // 지나간 자리 벽으로 박기 - 지나갔다는 표시
  
  while (queue.length > 0) {
    let [x, y, d] = queue.shift();

    // 적 팀 진영 도착
    if (x == row - 1 && y == col - 1) {
      return d;
    }

    // 상하좌우 이동
    for (let i = 0; i < 4; i++) {
      var moveX = x + dx[i];
      var moveY = y + dy[i];
      
      // 범위 벗어가나거나, 벽이거나 이미 방문한 곳이면 패스
      if(moveX < 0 || moveX >= row || moveY < 0 || moveY >= col || maps[moveX][moveY] == 0) continue;

      queue.push([moveX, moveY, d + 1]); // 이동
      maps[moveX][moveY] = 0; // 지나간 자리 벽으로 박기 - 지나갔다는 표시
    }
  }
  
  // 적팀 진영에 도착하지 못함
  return -1;
}