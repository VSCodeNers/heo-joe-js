const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// M: 상자 가로칸 수
// N: 상자 세로칸 수
// H: 쌓아올려지는 상자 수, z축 높이
const [M, N, H] = input.shift().split(" ").map(Number);
let tomatoes = [];

// 토마토 저장
for (let i = 0; i < H; i++) {
    let temp = [];
    for (let j = 0; j < N; j++) {
        temp.push(input[i * N + j].split(" ").map(Number));
    }
    tomatoes.push(temp);
}

const solution = () => {
    const dx = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, 1, -1, 0, 0];
    const dz = [0, 0, 0, 0, 1, -1];

    const bfs = () => {
        let unripeTomato = 0;   // 안 익은 토마토 수
        let answer = 0;
        const queue = [];

        for (let i = 0; i < H; i++) {
            for (let j = 0; j < N; j++) {
                for (let k = 0; k < M; k++) {
                    // 토마토가 익었다(1이다)면 큐에 push
                    // 맨 끝에 0은 현재 날짜
                    if (tomatoes[i][j][k] === 1) 
                        queue.push([i, j, k, 0]);
                    // 익지 않은 경우, 안 익은 토마토(unripeTomato) 개수 + 1
                    if (tomatoes[i][j][k] === 0) 
                        unripeTomato++;
                }
            }
        }

        let idx = 0;

        while (queue.length > idx) {
            const [z, x, y, day] = queue[idx++];

            for (let i = 0; i < 6; i++) {
                const nz = z + dz[i];
                const nx = x + dx[i];
                const ny = y + dy[i];

                // 토마토가 배열 범위 안 넘고
                if (nx >= 0 && ny >= 0 && nz >= 0 && nx < N && ny < M && nz < H) {
                    // 익지 않았다면?
                    if (tomatoes[nz][nx][ny] === 0) {
                        // 해당 토마토를 익게 함
                        // 해당 토마토의 위치를 큐에 넣어줌
                        // 토마토가 하나 익었으므로 익지 않은 토마토(unripeTomato) 수 하나 감소
                        tomatoes[nz][nx][ny] = 1;
                        queue.push([nz, nx, ny, day + 1]);
                        unripeTomato--;
                    }
                }
            }
            // 반복문 돌 때마다 현재 지난 날짜를 넣어줌
            answer = day;
        }
        // 끝까지 익지 않은 토마토가 있으면 -1 return
        // 없다면 걸린 일수(day) return
        return unripeTomato ? -1 : answer;
    };

    return bfs();
};

console.log(solution());