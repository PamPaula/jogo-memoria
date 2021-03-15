const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

//virando a carta
function flipCard() {
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

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

