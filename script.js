document.addEventListener('DOMContentLoaded', () => {
    const btnSimular = document.getElementById('btn-simular');
    const inputMudas = document.getElementById('num-mudas');
    const divResultados = document.getElementById('resultado-simulacao');
    const txtCarbono = document.getElementById('res-carbono');
    const txtCreditosNovos = document.getElementById('res-creditos-novos');
    const cardCreditos = document.getElementById('card-creditos');
    let creditosAtuaisBase = 145.20;

    
    if (btnSimular && inputMudas && divResultados) {
        btnSimular.addEventListener('click', () => {
            const qtdMudas = parseInt(inputMudas.value);

            if (isNaN(qtdMudas) || qtdMudas <= 0) {
                alert('Insira uma quantidade válida de mudas (maior que 0).');
                return;
            }

            const co2Sequestrado = qtdMudas * 15;
            const novosCreditos = co2Sequestrado / 1000;

            if (txtCarbono) txtCarbono.textContent = co2Sequestrado.toLocaleString('pt-BR');
            if (txtCreditosNovos) txtCreditosNovos.textContent = novosCreditos.toFixed(2);

            if (cardCreditos) {
                const novoTotalGlobal = creditosAtuaisBase + novosCreditos;
                cardCreditos.textContent = novoTotalGlobal.toFixed(2);
            }

            divResultados.classList.remove('hidden');
        });
    }

    
    const btnMenuDash = document.getElementById('btn-menu-dashboard');
    const barraLateral = document.getElementById('barra-lateral');

    if (btnMenuDash && barraLateral) {
        btnMenuDash.addEventListener('click', () => {
            barraLateral.classList.toggle('aberto-mobile');
        });
    }
});
