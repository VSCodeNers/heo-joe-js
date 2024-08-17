// 백준 - 거짓말(1043)
let N, M;
let knowTrue;
let partyGraph;
let visited;

const solution = ( input ) => {
  [ N, M ] = input.shift().split(' ').map((o) => parseInt(o));
  knowTrue = Array(N + 1).fill(false);
  input.shift().split(" ").map(o =>
    knowTrue[parseInt(o)] = true
  );

  party = [];
  partyGraph = Array(N + 1).fill(Array(N + 1).fill(false));
  for(let i = 0; i < M; i++) {
    let line = input.shift().split(" ").map(o => parseInt(o));
    party.push(line);
    for(let j = 1; j < line[0]; j++) {
      for(let k = j + 1; k <= line[0]; k++) {
        partyGraph[line[j]][line[k]] = true;
        partyGraph[line[k]][line[j]] = true;
      }
    }
  }

  let answer = 0;
  for(let i = 0; i < M; i++) {
    let possible = true;
    for(let j = 1; j <= party[i][0]; j++) {
      visited = Array(N + 1).fill(false);
      visited[j] = true;
      if(checkParent(party[i][j])) {
        possible = false;
        break;
      }
    }

    if(possible) answer++;
  }

  console.log(answer);
}

const checkParent = ( person ) => {
  for(let i = 1; i <= N; i++) {
    if(!visited[i] & partyGraph[person][i]) {
      visited[i] = true;

      if(knowTrue[i]) return true;
      if(checkParent(i)) return true;
    }
  }

  return false;
}

/*
테스트용: __dirname + '/input.txt'
제출용: '/dev/stdin'
*/
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input);