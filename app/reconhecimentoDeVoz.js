window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'en';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute){
elementoChute.innerHTML = `
    <div>You said</div>
    <span class="box">${chute}</span>
` }

recognition.addEventListener('end', () => recognition.start())





