// 백준 - 토마토(7569)
class Tomato {
  constructor(z, x, y, day) {
    this.z = z;
    this.x = x;
    this.y = y;
    this.day = day;
  }
}

const dx = [ 1, -1, 0, 0, 0, 0 ];
const dy = [ 0, 0, 1, -1, 0, 0 ];
const dz = [ 0, 0, 0, 0, 1, -1 ];

const solution = ( input ) => {
  const [ M, N, H ] = input.shift().split(" ").map(el => parseInt(el));
  let tomatoes = [];
  
  for(let i = 0; i < H; i++) {
    let box = [];
    for(let j = 0; j < N; j++) {
      box.push(input.shift().split(" ").map(el => parseInt(el)));
    }

    tomatoes.push(box);
  }

  const queue = [];
  let remainCnt = 0; // 안 익은 토마토 수
  for(let i = 0; i < H; i++) {
    for(let j = 0; j < N; j++) {
      for(let k = 0; k < M; k++) {
        if (tomatoes[i][j][k] === 1)
          queue.push(new Tomato(i, j, k, 0));
        else if (tomatoes[i][j][k] === 0)
          remainCnt++;
      }
    }
  }

  let index = 0;
  let answer = 0;
  while(queue.length > index) {
    const current = queue[index++];

    for(let i = 0; i < 6; i++) {
      const moveZ = current.z + dz[i];
      const moveX = current.x + dx[i];
      const moveY = current.y + dy[i];

      if(moveX < 0 || moveX >= N || moveY < 0 || moveY >= M || moveZ < 0 || moveZ >= H) continue;

      if(tomatoes[moveZ][moveX][moveY] === 0) {
        tomatoes[moveZ][moveX][moveY] = 1;
        queue.push(new Tomato(moveZ, moveX, moveY, current.day + 1));
        remainCnt--;
      }
    }

    answer = current.day;
  }

  // 남은 토마토가 있는지 체크
  if(remainCnt == 0) console.log(answer);
  else console.log(-1);
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(input);