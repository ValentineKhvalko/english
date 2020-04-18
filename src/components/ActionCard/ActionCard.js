import './style.scss';

class Card {
  constructor(card, parentElem, onClick) {
    // this.onClick = onClick;
    this.card = card;
    this.imageURL = card.image;
    this.word = card.word;
    this.audio = card.audioSrc;
    this.translation = card.translation;
    this.parentElem = parentElem;
  }

  blockRendering() {
    //Create Elements
    const mainCard = document.createElement('div');
    // mainCard.addEventListener('click', () => this.onClick());
    mainCard.classList.add('main-card');
    const front = document.createElement('div');
    front.classList.add('front');
    const back =document.createElement('div');
    back.classList.add('back');
    const image = document.createElement('img');
    image.src = require(`@assets/${this.imageURL}`).default;
    image.classList.add('cardImage');
    const playImg = document.createElement('img');
    playImg.src = require(`@assets/${this.imageURL}`).default;
    playImg.classList.add('playImg');
    playImg.setAttribute('card-word', this.word);
    const backImage = document.createElement('img');
    backImage.src = require(`@assets/${this.imageURL}`).default;
    backImage.classList.add('cardImage');
    const word = document.createElement('p');
    word.classList.add('word');
    word.classList.add('none');
    word.innerHTML= `${this.word}`
    const rotate = document.createElement('img');
    rotate.src = require(`@assets/img/rotate.png`).default;
    rotate.classList.add('rotate');
    rotate.classList.add('none');
    const translation = document.createElement('p');
    translation.classList.add('word');
    translation.classList.add('none');
    translation.innerHTML = `${this.translation}`;

    //Append elems in DOM 
    front.append(image);
    front.append(playImg);
    front.append(word);
    front.append(rotate);
    back.append(backImage);
    back.append(translation);
    mainCard.append(front);
    mainCard.append(back);
    this.parentElem.append(mainCard);

    image.addEventListener('click', this.play.bind(this));

    rotate.addEventListener('click', function() {
      mainCard.style.transform = 'rotateY(180deg)';
    });

    back.addEventListener('mouseleave', function(){
      mainCard.style.transform = 'rotateY(0deg)';
    });

  }

  play () { 
    new Audio(require(`@assets/${this.audio}`).default).play(); return false;
  }

  choosedMode () {
    if(mode === 'train') {
      this.parentElem.classList.add('train-mod');
    }
  }

}

export default Card;
