const factorisation = (data) => {
  let n = parseInt(data, 10);

  let primes = [];
  for (let i = 2; i <= n; i++) {
    primes[i] = true;
  }
  let p = 2;
  const values = [];

  do {
    while(n % p === 0) {
      n = n / p;
      values.push(p);
    }

    for (let i = 2 * p; i <= n; i += p) {
      primes[i] = false;
    }

    for (let i = p; i <= n; i++) {
      if (primes[i] && i > p) {
        p = i;
        break;
      }
    }

  } while (n > 1);

  return values.join(' ');
};

console.log(factorisation('34280'))