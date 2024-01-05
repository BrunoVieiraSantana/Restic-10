document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const botoes = document.querySelectorAll('button');

    let expressaoAtual = '';
    let resultado = '';

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            lidarComClique(botao.innerText);
            atualizarDisplay();
        });
    });

    function lidarComClique(valor) {
        switch (valor) {
            case 'AC':
                expressaoAtual = '';
                resultado = '';
                break;
            case 'DEL':
                expressaoAtual = expressaoAtual.slice(0, -1);
                break;
            case '=':
                calcularResultado();
                break;
            default:
                expressaoAtual += valor;
        }
    }

    function calcularResultado() {
        try {
            resultado = avaliarExpressao(expressaoAtual);
            expressaoAtual = resultado.toString();
        } catch (erro) {
            resultado = 'Erro';
        }
    }

    function avaliarExpressao(expressao) {
        expressao = expressao.replace(/-\s*/g, '-');
        

        while (/\(/.test(expressao)) {
            expressao = expressao.replace(/\(([^()]+)\)/, function(match, subExpressao) {
                return avaliarSubExpressao(subExpressao);
            });
        }

        return avaliarSubExpressao(expressao);
    }

    function avaliarSubExpressao(subExpressao) {

        const regexMD = /(-?\d*\.?\d+)\s*([*/])\s*(-?\d*\.?\d+)/;
        while (regexMD.test(subExpressao)) {
            subExpressao = subExpressao.replace(regexMD, function(match, num1, operador, num2) {
                return realizarOperacao(parseFloat(num1), operador, parseFloat(num2));
            });
        }


        const regexAS = /(-?\d*\.?\d+)\s*([+\-])\s*(-?\d*\.?\d+)/;
        while (regexAS.test(subExpressao)) {
            subExpressao = subExpressao.replace(regexAS, function(match, num1, operador, num2) {
                return realizarOperacao(parseFloat(num1), operador, parseFloat(num2));
            });
        }

        return parseFloat(subExpressao);
    }

    function realizarOperacao(num1, operador, num2) {
        switch (operador) {
            case '*':
                return num1 * num2;
            case '/':
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    throw new Error('Divisão por zero');
                }
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            default:
                throw new Error('Operador inválido');
        }
    }

    function atualizarDisplay() {
        display.value = expressaoAtual;
    }
});
