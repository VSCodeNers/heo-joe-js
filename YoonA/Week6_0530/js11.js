// 롤케이크 자르기

function solution(topping) {
    let answer = 0;
    
    const map = new Map();
    const bro = new Set();
    
    // 토핑 개수 담음
    for(let i = 0; i < topping.length; i++)
        map.has(topping[i]) ? map.set(topping[i], map.get(topping[i]) + 1) : map.set(topping[i], 1);
    
    // 토핑의 개수만큼 반복
    for(let i = 0; i < topping.length; i++) {
        // 담긴 토핑을 하나씩 빼서 형한테 줌
        let count = map.get(topping[i]) - 1;
        bro.add(topping[i]);
        
        // 토핑의 개수가 0이 되면 삭제하고, 남아 있으면 하나씩 뺌
        count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
         
        // 남아있는 토핑의 종류가 곧 동생의 토핑의 종류니까 
        // 형 토핑의 개수랑 동생 토핑의 개수 비교해서 같으면 방법 하나 추가 (= answer를 증가)
        if(bro.size === map.size) answer++;
    }
    
    return answer;
}