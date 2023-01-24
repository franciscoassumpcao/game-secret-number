const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
console.log('Número secreto: ',numeroSecreto);

atualizarMenorMaiorValor();

function gerarNumeroAleatorio(){
return Math.round(Math.random()* maiorValor +1);
}

function atualizarMenorMaiorValor(){
    const elementoMenor =  document.getElementById('menor-valor');
    elementoMenor.innerHTML = menorValor;

    const elementoMaiorValor = document.getElementById('maior-valor');
    elementoMaiorValor.innerHTML = maiorValor;
}