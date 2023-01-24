function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Invalid number</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += '<div>Out of bounds</div>';
        return;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Nice! You got it!</h2>
        <h3>The secret number was ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Play Again</button>
        `        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>The secret number is <i class="fa-sharp fa-solid fa-arrow-down"></i></div>        
        `
    }
    else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `        
        <div>The secret number is <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
        }
})