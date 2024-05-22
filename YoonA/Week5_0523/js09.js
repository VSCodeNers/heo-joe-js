// 호텔 대실

function solution(book_time) {
    let room = [];
    
    const toMinute = (time) => {
        // 가운데 : 자르고 시간 시간 => 분으로 바꿔줌
        const [hour, minute] = time.split(":");
        return hour * 60 + Number(minute);
    }
    
    // 시간 빠른 순으로 정렬
    book_time.sort().forEach(([start, end]) => {
        // 입실, 퇴실 시간을 분으로 변환
        const startTime = toMinute(start);
        // 퇴실 시간은 + 청소시간 10분도 더해줘야 하므로
        const endTime = toMinute(end) + 10;
        
        // 사용 중인 방 중, endTime이 startTime보다 더 작은 방이 있는지 봄
        const idx = room.findIndex((i) => i <= startTime);
        
        if (idx === -1) {
            // 사용중인 방 중, 조건에 맞는 방이 없다면? 
            // 새로운 방 추가
            room.push(endTime);
        } else {
            // 사용중인 방 중, 조건에 맞는 방이 있다면?
            // 기존 방의 종료시각 업데이트
            room[idx] = endTime;
        }
    });
    return room.length;
}