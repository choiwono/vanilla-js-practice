const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

function filpCard() {
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    }
}

cards.forEach(card => card.addEventListener('click', filpCard));