let ordem = [];
let ordemClicado = [];
let pontos = 0;

//cria uma ordem aleatória
let ordemAleatoria = () => {
    let ordemCor = Math.floor(Math.random() * 4);

    ordem[ordem.length] = ordemCor;

    ordemClicado = [];
    
    for (let i in ordem) {
        let elementoCor = criarElementoCor(ordem[i]);

        acenderCor(elementoCor, Number(i) + 1);
    }
}

//acende a próxima cor
let acenderCor = (elemento, tempo) => {
    tempo *= 500;

    setTimeout(() => {
        elemento.classList.add('selecionado');

        setTimeout(() => {
            elemento.classList.remove('selecionado');
        }, 250);
    }, tempo);
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let verificarOrdem = () => {
    for (let i in ordemClicado) {
        if (ordemClicado[i] != ordem[i]) {
            exibirFimDeJogo();
            break;
        }
    }
    
    if (ordemClicado.length == ordem.length) {        
        proximoNivel();
    }
}

//função para o clique de uma cor
let clique = (cor) => {
    ordemClicado[ordemClicado.length] = cor;

    criarElementoCor(cor).classList.add('selecionado');

    setTimeout(() => {
        criarElementoCor(cor).classList.remove('selecionado');
        
        verificarOrdem();
    }, 250);        
}

//função que retorna a cor
let criarElementoCor = (cor) => {
    switch (cor) {
        case 0:
            return azul;
        case 1:
            return amarelo;
        case 2:
            return vermelho;
        case 3:
            return verde;
    }
}

//função para o próximo nível do jogo
let proximoNivel = () => {
    pontos++;

    ordemAleatoria();
}

//função para quando perde
let exibirFimDeJogo = () => {
    alert(`Pontuação: ${pontos}!\n Vocé perdeu o jogo!\n Clique em OK para iniciar um novo jogo!`);

    ordem = [];
    ordemClicado = [];
    
    iniciarJogo();
}

//função para iniciar o jogo
let iniciarJogo = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');

    pontos = 0;
    
    proximoNivel();
}

//0 = azul, 1 = amarelo, 2 = vermelho e 3 = verde
//obtendo os elementos
const azul = document.getElementById('azul');
const amarelo = document.getElementById('amarelo');
const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');

//eventos de clique para as cores
azul.onclick = () => clique(0);
amarelo.onclick = () => clique(1);
vermelho.onclick = () => clique(2);
verde.onclick = () => clique(3);

//iniciando o jogo
iniciarJogo();