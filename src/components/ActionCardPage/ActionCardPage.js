import Card from '@app/components/ActionCard';
import StartGameButton from '@app/components/StartGameButton';
import EventObserver from '@app/EventObserver';
import Game from '@app/components/Game';

class ActionCardPage {
  constructor({ element, title, cards }) {
    this.title = title;
    this.element = element;
    this.cards = cards;
    this.selectCardForGameObserver = new EventObserver();
    this.state = 'endGame';
    this.playList = [];
  }

  setTitle(title) {
    this.title = title;
  }

  setState(state) {
    this.state = state;
  }

  mount() {
    this.playList = [];
    const cardsPage = this.cards[this.title];
    const cardPageBlock = document.createElement('div');
    cardPageBlock.classList.add('cardPageBlock');
    cardsPage.forEach((card) => {
      new Card(card, cardPageBlock).blockRendering();
      this.playList.push(card);
    });

    const startGame = document.createElement('div');
    startGame.classList.add('startGame');
    const game = new Game(this.playList, this.element);

    const repeat = document.createElement('div');
    repeat.innerHTML = 'Repeat';
    repeat.classList.add('repeat');
    repeat.addEventListener('click', () => (game.playAudio()));
    const startGameButton = new StartGameButton(startGame);
    startGameButton.gameObserver.subscribe((playGame) => {
      if (playGame === 'startGame') {
        this.setState(playGame);
        startGame.innerHTML = 'Stop Game';
        game.start();
        this.element.append(repeat);
        startGame.style.display = "none";
      } else {
        this.setState(playGame);
        startGame.innerHTML = 'Start';
        repeat.remove();
      }
    });

    cardPageBlock.addEventListener('click', (event) => {
      if (this.state === 'startGame' && event.target.hasAttribute('card-word')) {
        game.checkOptoin(event.target.getAttribute('card-word'));
      }
    });

    document.querySelector('.starsBlock').innerHTML = '';
    startGame.innerHTML = 'Start';
    this.element.append(cardPageBlock);
    this.element.append(startGame);
  }

  unmount() {
    this.element.innerHTML = '';
  }
}

export default ActionCardPage;
