function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  // let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
let arr = [5, 7, 3, 2, 9, 11];
console.log(solution(arr));
