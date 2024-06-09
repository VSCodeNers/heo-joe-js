// 백준 - 주사위 굴리기(14499)
const solution = ( input ) => {
  let [ N, M, x, y, K ] = input[0].split(' ').map(el => parseInt(el));
  // 지도
  let map = [];
  for(let i = 1; i <= N; i++) {
    map.push(input[i].split(' ').map(el => parseInt(el)));
  }
  // 이동 명령
  // 0: 동쪽, 1: 서쪽, 2: 북쪽, 3: 남쪽
  const commands = input[N + 1].split(' ').map(el => (parseInt(el) - 1));
  
  // 명령에 따라 이동되는 칸 수 (동, 서, 북, 남)
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  // 주사위 칸에 적힌 수
  const dice = {
    top: 0,
    bottom: 0,
    front: 0,
    right: 0,
    back: 0,
    left: 0
  };
  
  // 명령에 따라 이동
  for(let i = 0; i < K; i++) {
    let moveX = x + dx[commands[i]];
    let moveY = y + dy[commands[i]];

    // 범위 벗어났는지 체크
    if(moveX < 0 || moveX >= N || moveY < 0 || moveY >= M) continue;

    // 좌표 이동
    x = moveX;
    y = moveY;

    // 주사위 굴리기
    const currentDice = Object.assign({}, dice); // 주사위 깊은 복사
    switch(commands[i]) {
      // 동 = 오른쪽으로 굴리기
      case 0:
        dice.top = currentDice.left;
        dice.left = currentDice.bottom;
        dice.bottom = currentDice.right;
        dice.right = currentDice.top;
        break;
      // 서 = 왼쪽으로 굴리기
      case 1:
        dice.top = currentDice.right;
        dice.right = currentDice.bottom;
        dice.bottom = currentDice.left;
        dice.left = currentDice.top;
        break;
      // 북 = 위로 굴리기
      case 2:
        dice.top = currentDice.front;
        dice.front = currentDice.bottom;
        dice.bottom = currentDice.back;
        dice.back = currentDice.top;
        break;
      // 남 = 아래로 굴리기
      case 3:
        dice.top = currentDice.back;
        dice.back = currentDice.bottom;
        dice.bottom = currentDice.front;
        dice.front = currentDice.top;
        break;
    }

    // 이동한 칸의 수가 0이면, 주사위의 바닥면에 쓰여있는 수가 칸에 복사
    if(map[x][y] == 0) {
      map[x][y] = dice.bottom;
    }
    
    // 이동한 칸의 수가 0이 아니면, 칸에 쓰여있는 수가 주사위 바닥면으로 복사 & 칸에 쓰여있는 수는 0이 됨.
    else {
      dice.bottom = map[x][y];
      map[x][y] = 0;
    }

    // 주사위 상단에 쓰여있는 값
    console.log(dice.top);
  }
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);