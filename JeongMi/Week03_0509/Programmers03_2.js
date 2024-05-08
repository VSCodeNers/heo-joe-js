// 프로그래머스 - k진수에서 소수 개수 구하기(Lv.2)
const solution = (n, k) => {
  // n을 k진수로 변환
  let num = n.toString(k)
  
  // 0을 기준으로 나누기
  let list = num.split("0")
  
  let answer = 0;
  for(let i = 0; i < list.length; i++) {
      
    // 소수인 경우
    if(list[i] != "" && isPrime(parseInt(list[i])))
      answer++;
  }
  
  return answer;
}

// 소수인지 아닌지 판별
const isPrime = (num) => {
  if(num < 2) return false;
  
  // 약수가 있으면 소수 아님
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i == 0)
      return false
  }
  
  return true
}