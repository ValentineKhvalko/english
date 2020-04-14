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
    cardsPage.forEach((card) => {
      new Card(card, this.element).blockRendering();
    })
  } 

  unmount() {
    this.element.innerHTML = '';
  }

}

  export default ActionCardPage;