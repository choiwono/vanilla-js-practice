const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard;
let lockBoard = false;
let secondCard;

function filpCard() {

    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    hasFlippedCard = false;
    secondCard = this;
    
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', filpCard)
    secondCard.removeEventListener('click', filpCard)

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard = false;
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        // order 속성은 플렉스 또는 그리드 컨테이너안에서 현재 요소의 배치 순서를 결정한다.
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();

cards.forEach(card => card.addEventListener('click', filpCard));