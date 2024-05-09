// 튜플

function solution(s) {
    let answer = [];

    // 맨 처음, 끝에 있는 중괄호 제거 / 가운데마다 있는 중괄호 기준 자름
    let array = s.replaceAll("{{","").replaceAll("}}","").split("},{");
    let array2 = [];
    
    // array 있는 값들을 , 기준으로 잘라서 array2에 넣음
    array.forEach((value) => {
        array2.push(value.split(","))
    });
    
    // 문자열 길이가 작은 순서대로 정렬함
    array2.sort((a, b) => {
        return a.length - b.length
    });
 
    // 순서대로 돌면서 중복된 값이 있는 경우 제외하고 answer 안에 넣음
    array2.forEach((value,index) => {
        value.forEach((element) => {
            if (!answer.includes(Number(element))) {
                answer.push(Number(element))
            }
        })
    });
    
    return answer;
}