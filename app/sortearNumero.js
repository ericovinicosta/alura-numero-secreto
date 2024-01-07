/*define os limites*/
const menor_valor = 1;
const maior_valor = 1000;
/*captura seletores*/
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

/*gera números aleatórios*/
const numeroSecreto = () => {
    return parseInt(Math.random() * maior_valor + 1);
}

/*atualiza os valores do limite*/
elementoMenorValor.innerHTML = menor_valor;
elementoMaiorValor.innerHTML = maior_valor

const numeroSorteado = numeroSecreto();

console.log(`Número Sorteado: ${numeroSorteado}`);
