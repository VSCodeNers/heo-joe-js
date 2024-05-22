// 프로그래머스 - 호텔 대실(Lv.2)
function solution(book_time) {
  // 시간을 분 단위로 체크 24 * 60
  let times = Array(1440).fill(0);
  
  for(let i = 0; i < book_time.length; i++) {
    let [startHour, startMinute] = book_time[i][0].split(':');
    let start = parseInt(startHour) * 60 + parseInt(startMinute);
    
    let [endHour, endMinute] = book_time[i][1].split(':');
    let end = parseInt(endHour) * 60 + parseInt(endMinute) + 10;
    
    // 해당 시간대에 방이 필요하면 증가
    for(let j = start; j < end && j < 1440; j++) {
      times[j]++;
    }
  }
  
  // 제일 많이 필요한 방의 수
  return Math.max(...times);
}  