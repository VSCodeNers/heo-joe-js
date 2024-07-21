const [X, K] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map((v) => BigInt(v));

let y = 0n;         // 결과값 Y
let kBitIdx = 0n;   // K의 비트 인덱스
let xBitIdx = 0n;   // X의 비트 인덱스

// K의 모든 비트를 처리할 때까지 반복 (K가 0 될 때까지)
while ((K >> kBitIdx) > 0n) {
    // X의 현재 비트가 0인지 확인
    // == X의 xBitIdx 위치 비트가 0인지?
    if ((X & (1n << xBitIdx)) === 0n) {
        // K의 비트를 X의 비트가 0인 위치에 순서대로 채워넣어서 K번쨰로 작은 Y를 구하는 과정

        // K의 현재 비트를 Y의 해당 위치에 복사
        // 1) K >> kBitIdx: K를 kBitIdx만큼 오른쪽으로 이동시켜 K의 kBitIdx 위치 비트를 가장 오른쪽(LSB)으로 이동
        // 2) (K >> kBitIdx) & 1n: AND 연산을 통해 LSB만 추출 (= kBitIdx 위치의 비트를 가져옴)
        // 3) ((K >> kBitIdx) & 1n) << xBitIdx: 추출한 비트를 xBitIdx 위치로 이동
        y |= ((K >> kBitIdx) & 1n) << xBitIdx;
        // K의 다음 비트로 이동
        kBitIdx++; 
    }
    // X의 다음 비트로 이동
    xBitIdx++;
}

console.log(y.toString());