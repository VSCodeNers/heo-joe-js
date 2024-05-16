// 귤 고르기

function solution(k, tangerine) {
    const arr = {};
    
    // tangerine 돌면서 이미 있는 값이 들어오면 + 1, 없는 값이면 arr에 넣어주고 1
    // [1, 3, 2, 5, 4, 5, 2, 3] => {1: 1, 2: 2, 3: 2, 4: 1, 5: 2}
    tangerine.forEach((x) => (arr[x] = (arr[x] || 0) + 1));
    
    // 가장 많은 개수를 가진 귤 크기를 선택하기 위해 내림차순 해줌
    // 내림차순 정렬한 값을 result 안에 넣음
    // [2, 2, 2, 1, 1] => 크기 2, 3, 5는 2개씩, 크기 1, 4는 1개만 있으므로
    const result = Object.values(arr).sort((a, b) => b - a);
    let count = 0;
    
    for (let i = 0; i < result.length; i++) {
        // 귤 크기의 개수만큼 k 차감하고
        // 귤 개수 count + 1
        // 한 상자의 k(6)개를 담으려고 하므로, 첫번째 result[0]부터 돌면서
        // k에서 -2, -2, -2씩 차감
        k -= result[i];
        count++;
        
        // k가 0이 되면 현재 서로 다른 종류 수 반환
        if (k <= 0)
            break;
    }
    
    return count;
}