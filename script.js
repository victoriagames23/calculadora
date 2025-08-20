let expressao = ''; // Variável para armazenar a expressão matemática

function adicionarAoVisor(valor) {
    const visor = document.getElementById('visor');
    visor.value += valor; // Adiciona o valor clicado ao visor
}

function limparVisor() {
    const visor = document.getElementById('visor');
    visor.value = ''; // Limpa o conteúdo do visor
    expressao = ''; // Reseta a expressão também
}

function calcular() {
    const visor = document.getElementById('visor');
    expressao = visor.value; // Pega a expressão atual do visor

    try {
        // Usa eval() para calcular a expressão. Cuidado com eval() em aplicações reais por questões de segurança!
        // Para uma calculadora simples, é o jeito mais rápido.
        const resultado = eval(expressao);
        visor.value = resultado; // Exibe o resultado no visor
        expressao = resultado; // Atualiza a expressão com o resultado para continuar calculando
    } catch (error) {
        visor.value = 'Erro'; // Se houver um erro (ex: divisão por zero), exibe 'Erro'
        expressao = ''; // Reseta a expressão em caso de erro
    }
}
