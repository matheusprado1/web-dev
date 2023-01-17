//variável que exibe um número aleatório entre 1 e 6;
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//variável que seleciona o seletor
let img1 = document.querySelector('.img1')
//adiciona o atribute de acordo com o randomNumber
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png')

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let img2 = document.querySelector('.img2')
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png')

let title = document.querySelector('h1')

if(randomNumber1 > randomNumber2) {
  title.innerHTML = '🚩 Player 1 Wins!'
} else if(randomNumber2 > randomNumber1) {
  title.innerHTML = 'Player 2 Wins! 🚩'
} else {
  title.innerHTML = 'Draw!'
}