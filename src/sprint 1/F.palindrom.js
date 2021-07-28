const palindrom = (data) => {
  const string = data.toString();
  const lettersSet = [];
  let symbolsCount = 0;

  for (let item of string) {
    const currentSymbol = item.toLowerCase();
    const charCode = currentSymbol.charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
      symbolsCount += 1;
      lettersSet.push(currentSymbol);
    }

  };

  let result = true;
  for (let i = 0; i < lettersSet.length / 2; i++) {
    result &= lettersSet[i] === lettersSet[lettersSet.length - i - 1];
  }

  return result ? 'True' : 'False';
};

console.log(palindrom('zo'));