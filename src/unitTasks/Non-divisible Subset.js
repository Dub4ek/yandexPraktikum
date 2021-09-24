function solution(k, s) {
  const elementsSet = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if ((s[i] + s[j]) % k !== 0) {
        collection.push(s[i], s[j])
      }
    }
  }

  console.log(collection)
}

console.log(solution(3, [1,7,2,4]))