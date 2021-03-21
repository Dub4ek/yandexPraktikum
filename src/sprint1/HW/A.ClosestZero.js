const closestZero = (data) => {
  const [length, numbers] = data.toString().split('\n');
  const numCollection = numbers.split(' ').map(item => parseInt(item, 10));
  const zerosPosition = numCollection
    .map((item, i) => item === 0 ? i : NaN)
    .filter(item => !isNaN(item));
  const getDistance = (index, col) => {
    let minDistance = Number.MAX_SAFE_INTEGER;

    col.forEach(item => {
      let distance = Math.abs(index - item);

      if (distance < minDistance) {
        minDistance = distance;
      }
    });

    return minDistance;
  };

  return numCollection.map((item, i) => {
    if (item !== 0) {
      return getDistance(i, zerosPosition);
    }

    return item;
  }).join(' ');
};

console.log(closestZero('6\n' +
  '0 7 0 9 4 8 4 0 7 5 6 7 8 20 0 1 1 0 3\n'));