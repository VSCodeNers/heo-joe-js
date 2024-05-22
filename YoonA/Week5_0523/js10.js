// 방문 길이

function solution(dirs) {
    // 위, 아래, 오른쪽, 왼쪽 방향
    let move = { 
        U: [0, 1], 
        D: [0, -1], 
        R: [1, 0], 
        L: [-1, 0]
    };
    
    let now = [0, 0];
    let moveList = new Set();
    
    for (let dir of dirs) {
        let nextX = now[0] + move[dir][0];
        let nextY = now[1] + move[dir][1];
        
        // 다음 위치 확인
        // 범위 넘어나면 다음으로 넘어감
        if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) {
            continue;
        }
        
        // ex. [0, 0] -> [0, 1]이랑 [0, 1] -> [0, 0]으로 이동한 경로
        // 두 경로를 모두 Set에 추가하여 가는 경로와 돌아오는 경로를 동일한 경로로 간주
        moveList.add(`${now[0]}${now[1]}${nextX}${nextY}`);
        moveList.add(`${nextX}${nextY}${now[0]}${now[1]}`);
        
        // 현재 위치를 다음 위치로 바꿈 (자리 이동)
        now = [nextX, nextY];
    }
    
    // 경로를 양방향으로 저장해놨으니 /2 해주어야 함
    return moveList.size / 2;
}