const carrosselImagens = document.querySelector('.carrossel-imagens');
const imagens = document.querySelectorAll('.carrossel-imagens img');

let indiceAtual = 0; 
const totalImagens = imagens.length; 
const intervaloTroca = 4000; 

function mudarImagem() {
    indiceAtual++; 
    if (indiceAtual >= totalImagens) {
        indiceAtual = 0;
    }

    const deslocamento = -(indiceAtual * 113) + '%';
    carrosselImagens.style.transform = `translateX(${deslocamento})`;
}
setInterval(mudarImagem, intervaloTroca);