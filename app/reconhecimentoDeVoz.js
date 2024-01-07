/*seletore usados*/
const elementoChute = document.querySelector('#chute');
/*ativa o speechAPI*/
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

const exibeChuteNaTela = chute => {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}
const onSpeak = (msg) => {
    let chute = msg.results[0][0].transcript;
    exibeChuteNaTela(chute);
    ChuteEhValido(chute);
}
recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => {
    recognition.start();
})