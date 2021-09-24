function smallestUniqueSubstr(str) {
  let currentMap = new Map();
  let lastCollection = new Set();

  str.split('').forEach((item) => {
    if (!currentMap.has(item)) {
      currentMap.set(item, null);
    } else {
      lastCollection.add(item)
    }
  });

  lastCollection.forEach(item => {
    if (currentMap.has(item)) {
      currentMap.delete(item);
    }
  })

  return [...Array.from(currentMap.keys()), ...(Array.from(lastCollection).sort())].join('')
}

console.log(smallestUniqueSubstr('aba'))