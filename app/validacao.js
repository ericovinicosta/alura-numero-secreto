ChuteEhValido = (chute) => {
    const numero = +chute;
    if (chuteEhGameOver(chute)) {
        document.body.innerHTML = `
          <h2>O Jogo Acabou!</h2>
          <h3>O número secreto era ${numeroSorteado}</h3>
          <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>   
        `;
        document.body.classList.add('erro');
        document.body.classList.add('game-over');
        return;
    }
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        const spanChute = elementoChute.querySelector('.box');
        spanChute.classList.add('erro');
        return;
    }
    if (chuteDentroDoLimite(numero)) {
        elementoChute.innerHTML += `<div>Valor deve estar entre ${menor_valor} ou ${maior_valor}</div>`;
        return;
    }
    if (chuteCerto(numero)) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSorteado}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else {
        if (numero < numeroSorteado) {
            elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>        
            `;
        } else {
            elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>        
            `;
        }
    }
}

const chuteEhGameOver = (chute) => {
    return chute.toLowerCase() === 'game over';
};

const chuteForInvalido = (numero) => {
    return Number.isNaN(numero);
}

const chuteDentroDoLimite = (numero) => {
    return numero > maior_valor || numero < menor_valor;
}

const chuteCerto = (numero) => {
    return numero === numeroSorteado;
}

document.body.addEventListener('click', elemento => {
    if (elemento.target.id === 'jogar-novamente') {
        window.location.reload();
    }
});