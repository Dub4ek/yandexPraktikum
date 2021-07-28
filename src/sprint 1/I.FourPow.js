const fourPow = (data) => {
  let n = parseInt(data, 10);

  while (n % 4 == 0) {
    n /= 4;
  }

  return n == 1 ? 'True' : 'False';
};

console.log(fourPow('15'));