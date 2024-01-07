ChuteEhValido = (chute) => {
    const numero = +chute;
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
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

const chuteForInvalido = (numero) => {
    return Number.isNaN(numero);
}

const chuteDentroDoLimite = (numero) => {
    return numero > maior_valor || numero < menor_valor;
}

const chuteCerto = (numero) => {
    return numero === numeroSorteado;
}