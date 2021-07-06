const redundantLetter = (data) => {
  const [string1, string2] = data.toString().split('\n');
  const lettersMap = {};

  (string1.concat(string2)).split('').forEach(item => {
    if (lettersMap.hasOwnProperty(item)) {
      lettersMap[item] += 1;
    } else {
      lettersMap[item] = 1;
    }
  });

  let result;
  for (let key in lettersMap) {
    if (lettersMap[key] % 2 !== 0) {
      result = key;
    }
  }

  return result;
};

console.log(redundantLetter('go\n' +
  'ogg'))