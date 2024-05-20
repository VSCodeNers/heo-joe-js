// 프로그래머스 - 호텔 대실(Lv.2)
function solution(book_time) {
  // 시간을 분 단위로 체크 24 * 60
  let times = new Array(1440);
  times.fill(0);
  
  for(let i = 0; i < book_time.length; i++) {
    let start = parseInt(book_time[i][0].substr(0, 2)) * 60; // 시 -> 분
    start += parseInt(book_time[i][0].substr(3, 5)); // 분

    let end = parseInt(book_time[i][1].substr(0, 2)) * 60; // 시 -> 분
    end += parseInt(book_time[i][1].substr(3, 5)); // 분
    
    // 해당 시간대에 방이 필요하면 증가
    for(let j = start; j < end + 10 && j < 1440; j++) {
        times[j]++;
    }
  }
  
  // 오름차순으로 정렬하면 맨 뒤에 제일 많이 필요한 방의 수가 나옴
  times.sort();
  
  return times[1439];
}  