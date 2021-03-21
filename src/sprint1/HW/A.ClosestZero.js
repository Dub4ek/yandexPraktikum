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
  '1 1 1 0 0 1 0 0 0 0 0 0\n'));