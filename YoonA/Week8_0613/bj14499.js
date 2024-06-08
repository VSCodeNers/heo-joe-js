const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const info = input[0].split(" ");
// n, m 지도 크기
const n = Number(info[0]);
const m = Number(info[1]);
// x, y 주사위 위치
const x = Number(info[2]);
const y = Number(info[3]);
// k 명령 개수
const k = Number(info[4]); 

const map = [];
for (let i = 1; i <= n; i++) {
    // 지도의 각각 행을 숫자로 변환해서 넣음
    map.push(input[i].split(" ").map(Number));
}

// 명령어
const orders = input[n + 1].split(" ").map(Number);

// 주사위 초기 상태
// 순서대로 위, 아래, 왼, 오, 앞, 뒤
const dice = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  front: 0,
  back: 0
};

// 주사위 이동
const moveDice = (direction) => {
    const { top, bottom, left, right, front, back } = dice;
    // 동쪽으로 이동 (= 동쪽으로 돌면)
    // 왼쪽면 -> 위쪽면 / 오른쪽면 -> 바닥쪽면 / 바닥쪽면 -> 왼쪽면 / 위쪽면 -> 오른쪽면
    if (direction === 1) {
        dice.top = left;
        dice.bottom = right;
        dice.left = bottom;
        dice.right = top;
    // 사쪽으로 이동 (= 서쪽으로 돌면)
    // 오른쪽면 -> 위쪽면 / 왼쪽면 -> 바닥쪽면 / 위쪽면 -> 왼쪽면 / 바닥쪽면 -> 오른쪽면
    } else if (direction === 2) {
        dice.top = right;
        dice.bottom = left;
        dice.left = top;
        dice.right = bottom;
    // 북쪽으로 이동 (= 북쪽으로 돌면)
    // 앞쪽면 -> 뒤쪽면 / 뒤쪽면 -> 바닥쪽면 / 바닥쪽면 -> 앞쪽면 / 위쪽면 -> 뒤쪽면
    } else if (direction === 3) { 
        dice.top = front;
        dice.bottom = back;
        dice.front = bottom;
        dice.back = top;
    // 남쪽으로 이동 (= 남쪽으로 돌면)
    // 뒤쪽면 -> 위쪽면 / 앞쪽면 -> 바닥쪽면 / 위쪽면 -> 앞쪽면 / 바닥쪽면 -> 뒤쪽면
    } else if (direction === 4) {
        dice.top = back;
        dice.bottom = front;
        dice.front = top;
        dice.back = bottom;
  }
};

// 이동 방향에 따라 좌표 변화
// 동, 서, 북, 남
const dx = [0, 0, -1, 1]; 
const dy = [1, -1, 0, 0];

// 현재 x, y 위치
let currX = x;
let currY = y;

for (let i = 0; i < orders.length; i++) {
    // 현재 명령어
    const direction = orders[i]; 

    // 이동한 x, y 위치
    const nextX = currX + dx[direction - 1];
    const nextY = currY + dy[direction - 1];

    // 이동한 위치가 지도를 벗어나지 않은 경우
    if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
        moveDice(direction);

        // 이동한 위치에 따라 주사위, 지도 값 변경
        if (map[nextX][nextY] === 0) {
            // 지도가 0이면 주사위 바닥 값 넣음
            map[nextX][nextY] = dice.bottom;
        } else {
            // 지도가 0이 아니면 지도 값을 주사위 바닥면으로 넣고
            // 지도 값은 0으로
            dice.bottom = map[nextX][nextY];
            map[nextX][nextY] = 0;
        }

        console.log(dice.top);

        // 현재 위치를 이동한 그 위치로 변경
        currX = nextX;
        currY = nextY;
    }
}
