const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor de A: ', (a) => {
  rl.question('Digite o valor de B: ', (b) => {
    rl.question('Digite o valor de C: ', (c) => {
      rl.question('Digite o valor de D: ', (d) => {

        const A = parseInt(a);
        const B = parseInt(b);
        const C = parseInt(c);
        const D = parseInt(d);

        const DIFERENCA = A * B - C * D;

        console.log(` DIFERENCA = ${DIFERENCA}`);

        rl.close();
      });
    });
  });
});
