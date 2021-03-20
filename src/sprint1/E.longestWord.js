const longestWord = (data) => {
  const [length, sentence] = data.toString().split('\n');
  let max = 0;
  let maxIndex = -1;
  const lengthMap = sentence.trim().split(' ').filter(item => /[a-z]*/.test(item));

  if (parseInt(length, 10) === 0 || lengthMap.length === 0) {
    return ' \n0';
  }

  lengthMap.forEach((item, index) => {
    if (item.length > max) {
      max = item.length;
      maxIndex = index;
    }
  });
  return `${lengthMap[maxIndex]} \n${max}`;
};

console.log(longestWord('0\n     '));