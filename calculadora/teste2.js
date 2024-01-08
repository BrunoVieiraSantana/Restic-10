var equation = '-5.0 + 9.34 - 6.0 * -2.1 * 3.1 / -2.0';

var newEquation = equation.replace(/(?!^-)[+*\/-](\s?-)?/g, '+$1');

console.log(newEquation);