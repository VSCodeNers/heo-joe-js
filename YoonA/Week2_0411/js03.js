// 할인 행사

function solution(want, number, discount) {
    let result = 0;  
    
    discount.forEach((value, idx) => {
        let corre = 0;                                          // 일치되는 수량/제품 수
        let discountSub = [...discount].slice(idx, idx + 10);   // discount를 10개씩 끊음
        
        // 만약 discountSub의 길이가 10을 넘지 않으면 10일 연속이 불가능 하므로 바로 result 출력
        if (discountSub.length < 10) {
            return result;
        }
        
        // want랑 discountSub에 개수/제품명 같은게 있는 경우는 corre+1
        for (let i = 0; i < want.length; i++) {
            if ([...discountSub].filter(item => 
                item == want[i]).length == number[i]) {
                corre++;
            }
            else break;
        }
        // corre가 want 길이가 같은거면 모든 과일이 원하는 개수만큼 있다는 의미이므로 
        // 날짜 일수(result) + 1
        if (corre == want.length) {
            result++;
        }
    });
    return result;
}