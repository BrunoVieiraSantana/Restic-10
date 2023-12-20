console.log('Questão 2')
const users = [
    {
        id: 1,
        name: 'Bruno Vieira',
        age: 26
    },
    {
        id: 2,
        name: 'Venus Qsmp',
        age: 70
    }
]

function findUserById(users, userId) {
    if (!Array.isArray(users)) {
        return "O primeiro parâmetro deve ser uma lista!";
    }

    if (typeof userId !== 'number') {
        return "O segundo parâmetro deve ser um número!";
    }
    const result = users.find(({ id }) => id === userId)
    return result
}

console.log(findUserById(users, 1))


