// 프로그래머스 - 방문 길이(Lv.2)
function solution(dirs) {
  let answer = 0;
  let mapRow = Array.from(Array(11), () => Array(10).fill(false)); // 행
  let mapCol = Array.from(Array(11), () => Array(10).fill(false)); // 열
  
  // 현재 위치 좌표
  let curX = 5, curY = 5;
  
  for(let i = 0; i < dirs.length; i++) {
    if(dirs.charAt(i) == 'U' && curY > 0) {
      curY--;
      if(!mapCol[curX][curY]) {
        answer++;
        mapCol[curX][curY] = true;
      }
    }
    else if(dirs.charAt(i) == 'D' && curY < 10) {
      if(!mapCol[curX][curY]) {
        answer++;
        mapCol[curX][curY] = true;
      }
      curY++;
    }
    else if(dirs.charAt(i) == 'R' && curX < 10) {
      if(!mapRow[curY][curX]) {
        answer++;
        mapRow[curY][curX] = true;
      }
      curX++;
    }
    else if(dirs.charAt(i) == 'L' && curX > 0) {
      curX--;
      if(!mapRow[curY][curX]) {
        answer++;
        mapRow[curY][curX] = true;
      }
    }
  }
  
  return answer;
}