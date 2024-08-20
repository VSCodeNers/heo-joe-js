const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input.shift().split(" ").map((v) => Number(v));
// 좌표는 저장 후, 오름차순 정렬
const coords = input.map((v) => Number(v)).sort((a, b) => a - b);

// left: 가능한 최소 거리(초깃값 1) / right: 가능한 최대 거리(초깃값 coords배열 마지막 요소)
let left = 1;               
let right = coords[coords.length - 1];
let answer = 0;

// 주어진 거리(dist)에서 공유기를 몇 개 설치할 수 있는가?
const count = (coords, distance) => {
    let endPosition = coords[0];        // 마지막으로 공유기 설치된 위치
    let cnt = 1;                        // 설치된 공유기의 개수

    // 각 좌표 coords[i]와 마지막 공유기 설치 위치의 간의 거리가 distance 이상이면
    // 공유기 설치 개수 + 1 하고, endPosition을 현재 좌표로 수정
    for (let i = 0; i < coords.length; i++) {
        if (coords[i] - endPosition >= distance) {
            cnt++;
            endPosition = coords[i];
        }
    }
    return cnt;
}

while(left <= right) {
    let mid = parseInt((left + right) / 2);         // 현재 탐색 범위의 중간 값
    // mid 거리로 C개 이상의 공유기를 설치할 수 있는지 확인
    // count 반환 값이 C 이상이라면 해당 거리(mid)로 설치 가능하다는 의미이므로
    // mid 저장하고, 더 먼 거리에서도 설치 가능한지 확인을 위해 left를 mid + 1로 
    // 안되면 거리가 너무 크다는 의미이므로 반대로 right를 mid - 1
    if (count(coords, mid) >= C) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(answer);