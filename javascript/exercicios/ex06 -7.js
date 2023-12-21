function innerJoin(list1, list2) {
  if (!Array.isArray(list1)) {
    return "O primeiro parâmetro deve ser uma lista!";
  }

  if (!Array.isArray(list2)) {
    return "O segundo parâmetro deve ser uma lista!";
  }

  const result = list1.filter(item => list2.includes(item));

  return result;
}

const numbers1 = [1, 2, 3, 3, 2, 4, 0];
const numbers2 = [1, 2, 3, 5, 10];

console.log(innerJoin(numbers1, numbers2));

console.log(innerJoin([], numbers2));


console.log(innerJoin(2, numbers2));
