let listaEquipamentos = [];

function adicionarEquipamento() {
    const equipamentoSelecionado = document.getElementById('equipamento').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const duracao = parseFloat(document.getElementById('duracao').value);
    const duracaoDias = parseFloat(document.getElementById('duracao-dias').value);

    const informacoesEquipamento = {
        equipamento: equipamentoSelecionado,
        quantidade: quantidade,
        duracao: duracao,
        duracaoDias: duracaoDias
    };

    listaEquipamentos.push(informacoesEquipamento);
    exibirListaEquipamentos();
    calcularOrcamento();
}

function exibirListaEquipamentos() {
    const containerListaEquipamentos = document.getElementById('lista-equipamentos');
    containerListaEquipamentos.innerHTML = '<h3>Equipamentos Adicionados:</h3>';

    listaEquipamentos.forEach((informacoesEquipamento, index) => {
        const textoEquipamento = informacoesEquipamento.quantidade + ' ' + informacoesEquipamento.equipamento +
            `(s) - ${informacoesEquipamento.duracao} ${obterTextoDuracao(informacoesEquipamento.duracao)} (${informacoesEquipamento.duracaoDias} ${obterTextoDias(informacoesEquipamento.duracaoDias)})`;

        containerListaEquipamentos.innerHTML += `
            <p class="item-equipamento">
                <img src="delete.png" alt="Excluir" onclick="removerEquipamento(${index})" class="icone-excluir">
                Equipamento ${index + 1}: ${textoEquipamento}
            </p>`;
    });
}

function removerEquipamento(index) {
    exibirModalExclusao(index);
}

function exibirModalExclusao(index) {
    const modal = document.getElementById('modalExclusao');
    const overlayModal = document.getElementById('overlayModalExclusao');
    const fecharModal = document.getElementById('fecharModalExclusao');

    modal.style.display = 'block';
    overlayModal.style.display = 'block';

    // MDN - block -  O elemento gera uma caixa de elemento de bloco, gerando quebras de linha antes e depois do elemento quando no fluxo normal.

    fecharModal.onclick = function() {
        modal.style.display = 'none';
        overlayModal.style.display = 'none';
    };

    // MDN - none - Desativa a exibição de um elemento para que não tenha efeito no layout (o documento é renderizado como se o elemento não existisse). Todos os elementos descendentes também têm sua exibição desligada. Para que um elemento ocupe o espaço que normalmente ocuparia, mas sem realmente renderizar nada, use a propriedade

    overlayModal.onclick = function() {
        modal.style.display = 'none';
        overlayModal.style.display = 'none';
    };

    const botaoConfirmarExclusao = document.getElementById('confirmarExclusao');
    botaoConfirmarExclusao.onclick = function() {
        listaEquipamentos.splice(index, 1);
        exibirListaEquipamentos();
        calcularOrcamento();
        modal.style.display = 'none';
        overlayModal.style.display = 'none';
        
    };
}

// Operador Condicional Ternário
function obterTextoDuracao(duracao) {
    return duracao === 1 ? 'mês' : 'meses';
}

function obterTextoDias(duracaoDias) {
    return duracaoDias === 1 ? 'dia' : 'dias';
}

function calcularOrcamento() {
    const precos = {
        desktop: 100,
        laptop: 80,
        impressora: 20,
        monitor: 50,
        teclado: 15,
        mouse: 10,
        roteador: 30,
        scanner: 40,
        'hd-externo': 25,
        projetor: 70,
        'caixas-de-som': 30,
        webcam: 25,
        tablet: 60,
        smartphone: 50,
        'placa-de-video': 120,
        'fone-de-ouvido': 20,
        'impressora-scanner': 50,
        'monitor-externo': 60,
        'adaptador-wifi': 15,
        'cadeira-escritorio': 40,
        'luminaria-mesa': 12,
        'mesa-escritorio': 80
    };
    let precoTotal = 0;

    listaEquipamentos.forEach(informacoesEquipamento => {
        const mesesTotais = informacoesEquipamento.duracao + informacoesEquipamento.duracaoDias / 30;
        precoTotal += precos[informacoesEquipamento.equipamento] * informacoesEquipamento.quantidade * mesesTotais;
    });

    document.getElementById('resultado').innerHTML = `<p>Total estimado: R$ ${precoTotal.toFixed(2)}</p>`;
}
