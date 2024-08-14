const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);									// N=전체 인원 수, M=파티 수
const truePerson = new Set(input.shift().split(' ').slice(1).map(Number));				// 진실을 아는 사람들 수와 번호
const participantInfo = input.map(line => line.split(' ').slice(1).map(Number));		// 각 파티에 참여하는 사람들 수, 참석자 번호
const edges = Array.from({ length: N + 1 }, () => []);									// 각 사람들 간의 연결 정보

// 파티를 기반으로 사람들을 연결
// ex. 파티에 1, 5번이 참석했다면 1번 사람 리스트에 5번 추가, 5번 사람 리스트에 1번 추가하는 식으로
participantInfo.forEach(party => {
    for (let i = 0; i < party.length; i++) {
        for (let j = i + 1; j < party.length; j++) {
            edges[party[i]].push(party[j]);
            edges[party[j]].push(party[i]);
        }
    }
});

// 진실을 아는 사람과 연결된 모든 사람들을 찾음
const visited = Array(N + 1).fill(false);

// BFS를 사용하여 맨 처음 시작 사람이랑 연결된 모든 사람을 찾고
// 그 사람들을 visited에 기록
// 직접 연결된 사람뿐만 아니라 간접적으로 연결된 사람도 모두 찾아서 표시
const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const current = queue.shift();
		// 진실을 아는 참여자와 연결된 모든 사람들을 순회
        for (const neighbor of edges[current]) {
			// 연결은 되었으나 방문 표시 없으면 방문 표시하고 큐에 추가
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
};

// 모든 진실을 아는 사람들을 기준으로 BFS 실행
// 진실을 아는 사람과 연결된 모든 사람을 찾음
truePerson.forEach(person => {
    if (!visited[person]) {
        bfs(person);
    }
});

// 진실을 아는 사람과 연결된 그룹에 속하지 않은 파티의 개수를 셈 (= 진실을 아는 사람과 직/간접적으로 연결되지 않은 파티의 수를 계산)
let answer = 0;
for (const party of participantInfo) {
	// 각 파티의 모든 사람이 visited 배열에 없다면 
	// 해당 파티에 참석한 사람들은 모두 진실을 아는 사람과 연결된 사람이 없으므로 거짓말 가능
    if (party.every(person => !visited[person])) {
        answer++;
    }
}

console.log(answer);
