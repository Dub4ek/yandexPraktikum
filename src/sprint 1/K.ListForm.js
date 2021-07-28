const listForm=  (data) => {
  const [length, values, number] = data.toString().split('\n');
  const firstNumber = parseInt(values.split(' ').join(''), 10);

  return (firstNumber + parseInt(number)).toString().split('').join(' ');
};

console.log(listForm('2\n' +
  '9 5\n' +
  '17'))