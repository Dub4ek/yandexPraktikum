const GWorkFromHome = (data) => {
  let result = '';

  if (data === 0) {
    return 0;
  }

  while (data > 0) {
    result = data % 2 + result;
    data = Math.floor(data / 2);
  }

  return result;
};

console.log(GWorkFromHome(2));