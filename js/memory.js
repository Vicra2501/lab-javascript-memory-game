

class MemoryGame {
  constructor(cards) {
    this.cards = [];
    this.pickedCards = [];
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed
  }

  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i] = Math.floor(Math.random(0.5, this.cards.length));
      return this.shuffleCards.push(this.cards[i])
    }
  }

  checkIfPair(card1, card2) {
    
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
