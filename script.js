const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//virando a carta
function flipCard() {
    if(lockBoard) return; //trancando o tabuleiro
    if(this === firstCard) return; //não deixando clicar duas vezes na mesma carta

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

//vendo se o atributo é igual
function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

// desabilitando as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//desvirando as cartas
function unflipCards() {
    lockBoard = true; //trancando o tabuleiro

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false; //trancando o tabuleiro
    }, 1500);
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

