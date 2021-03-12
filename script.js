const cards = document.querySelectorAll('.card');

//virando a carta
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})