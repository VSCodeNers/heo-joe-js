// 백준 - 거짓말(1043)
let N, M;
let knowTrue;
let partyGraph;
let visited;

const find = (x) => {
  if (parent[x] === x) return x;
  return parent[x] = find(parent[x]);
}

const union = (x, y) => {
  x = find(x);
  y = find(y);
  if (x !== y) {
    parent[y] = x;
  }
}

const solution = ( input ) => {
  [ N, M ] = input.shift().split(' ').map((o) => parseInt(o));
  parent = Array(N + 1).fill(0).map((_, idx) => idx);

  let trueInfo = input.shift().split(" ").map(Number);
  let trueCount = trueInfo[0];
  let truePeople = trueInfo.slice(1);

  let parties = [];
  
  for (let i = 0; i < M; i++) {
    let line = input[i].split(' ').map(Number);
    let partySize = line[0];
    let partyMembers = line.slice(1);
    parties.push(partyMembers);

    for (let j = 1; j < partySize; j++) {
      union(partyMembers[0], partyMembers[j]);
    }
  }

  // 진실을 아는 사람들끼리도 합치기
  let trueRoot = truePeople[0];
  for (let i = 1; i < trueCount; i++) {
    union(trueRoot, truePeople[i]);
  }

  // 과장된 이야기를 할 수 있는 파티의 수를 센다
  let answer = 0;
  for (let i = 0; i < M; i++) {
    let party = parties[i];
    let possible = true;

    for (let j = 0; j < party.length; j++) {
      if (find(party[j]) === find(trueRoot)) {
        possible = false;
        break;
      }
    }

    if (possible) answer++;
  }

  console.log(answer);;
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