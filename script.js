const bolas = document.getElementsByClassName('ball');
const cor = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const scoreboard = document.getElementById(('score'));
let score = 0;

function gerarCores() {
  let r;
  let g;
  let b;
  const selecionado = Math.floor(Math.random() * 6);

  for (let i = 0; i < bolas.length; i += 1) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    bolas[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (selecionado === i) {
      cor.innerHTML = `rgb(${r}, ${g}, ${b})`;
    }
  }

  resposta.innerHTML = 'Escolha uma cor';
}

function checarResposta() {
  if (this.style.backgroundColor === cor.innerText) {
    resposta.innerHTML = 'Acertou!';
    score += 3;
    scoreboard.innerHTML = `Placar: ${score}`;
  } else {
    resposta.innerHTML = 'Errou! Tente novamente!';
  }
}

gerarCores();
reset.addEventListener('click', gerarCores);

for (let i = 0; i < bolas.length; i += 1) {
  bolas[i].addEventListener('click', checarResposta);
}
