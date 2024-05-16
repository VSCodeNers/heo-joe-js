// 게임 맵 최단거리

function solution(maps) {                    
    const dx = [0, 0, 1, -1];       // x축
    const dy = [1, -1, 0, 0];       // y축
    const queue = [[0, 0, 1]];      // x, y, 이동한 칸
    
    while (queue.length) {
        const block = queue.shift();
        
        // 상대팀 진영에 도달한 경우 칸 수 return
        if (block[0] === maps[0].length - 1 && block[1] === maps.length - 1) {
            return block[2];
        }
        
        for (let i = 0; i < 4; i++) {
            const nextdx = block[0] + dx[i];
            const nextdy = block[1] + dy[i];
            
            // maps 범위 안에 있는 경우 + 방문하지 않은 경우
            if (nextdx >= 0 && nextdy >= 0 
                && nextdx < maps[0].length && nextdy < maps.length 
                && maps[nextdy][nextdx] === 1) {
                maps[nextdy][nextdx] = 0;       // 다음 칸으로 이동하고 이동 칸 수 + 1
                queue.push([nextdx, nextdy, block[2] + 1]);
            }
        }
    }
    return -1;
}