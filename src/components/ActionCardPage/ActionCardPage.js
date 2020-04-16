import Card from '@app/components/ActionCard';

class ActionCardPage {
  constructor({ element, title, cards }) {
    this.title = title;
    this.element = element;
    this.cards = cards;
  }

  setTitle (title) {
    this.title = title;
  }

  mount () {
    const cardsPage = this.cards[this.title];
    const cardPageBlock = document.createElement('div');
    cardPageBlock.classList.add('cardPageBlock');
    cardsPage.forEach((card) => {
      new Card(card, cardPageBlock).blockRendering();
    });
    const startGame = document.createElement('div');
    startGame.classList.add('startGame');
    startGame.innerHTML = 'Start';
    this.element.append(cardPageBlock);
    this.element.append(startGame);
  } 

  unmount() {
    this.element.innerHTML = '';
  }

}

  export default ActionCardPage;