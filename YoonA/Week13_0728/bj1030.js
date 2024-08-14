const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [s, N, K, R1, R2, C1, C2] = input[0].split(' ').map(Number);

// 주어진 위치(x, y)가 시간 s에서 검정색인지 흰색인지 판별
// 시간(s)의 각 단계에서 현재 레벨의 크기(size)와 검정 영역 시작 및 끝 좌표(centerStart, centerEnd)를 계산함
// => 현재 좌표가 검정색 영역 내에 있는지 확인하고, 그렇다면 true를 반환 / 그렇지 않으면 좌표를 다음 레벨로 변환
const isBlack = (s, x, y, N, K) => {
    while (s > 0) {
        let size = Math.pow(N, s - 1);                      // 현재 레벨의 각 정사각형의 크기
        let centerStart = Math.floor((N - K) / 2) * size;   // 중심부 검정색 사각형의 시작 좌표
        let centerEnd = centerStart + K * size - 1;         // 중심부 검정색 사각형의 끝 좌표
        
        // 현재 좌표가 검정색 사각형 내부에 있다면
        if (x >= centerStart && x <= centerEnd && y >= centerStart && y <= centerEnd) {
            // 검정색이면 true를 반환
            return true; 
        }
        
        // 좌표를 다음 레벨로 변환
        x = x % size;
        y = y % size;
        s--;
    }
    // 흰색이면 false를 반환
    return false; 
}

// 주어진 범위 (R1, R2, C1, C2) 내의 프렉탈 패턴을 생성
// isBlack 호출해서 각 위치 별 색상 확인하고 0 or 1을 배열에 추가함
const generateFractal = (s, N, K, R1, R2, C1, C2) => {
    let result = [];
    // 범위 내 각 행 처리
    for (let i = R1; i <= R2; i++) {
        let row = [];
        // 범위 내 각 열 처리
        for (let j = C1; j <= C2; j++) {
            // 각 위치에 대해 isBlack 함수를 호출하여 검정색인지 흰색인지 확인함
            if (isBlack(s, i, j, N, K)) {
                // 검정색이면 1을 추가하고, 흰색이면 0을 추가
                row.push('1'); 
            } else {
                row.push('0');
            }
        }
        // 각 행을 문자열로 변환하여 결과 배열에 추가
        result.push(row.join(''));
    }
    // 최종 프렉탈 패턴을 반환
    return result;
}

// 프렉탈 패턴을 출력
const printFractal = (s, N, K, R1, R2, C1, C2) => {
    let fractal = generateFractal(s, N, K, R1, R2, C1, C2);
    for (let row of fractal) {
        // 각 행을 출력
        console.log(row); 
    }
}

printFractal(s, N, K, R1, R2, C1, C2);