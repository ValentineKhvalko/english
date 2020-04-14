import './style.scss';

class Card {
  constructor(card, parentElem) {
    this.imageURL = card.image;
    this.word = card.word;
    this.audio = card.audioSrc;
    this.translation = card.translation;
    this.parentElem = parentElem;
  }

  blockRendering() {
    //Create Elements
    const mainCard = document.createElement('div');
    mainCard.classList.add('main-card');
    const flipper = document.createElement('div');
    flipper.classList.add('flipper');
    const front = document.createElement('div');
    front.classList.add('front');
    const back =document.createElement('div');
    back.classList.add('back');
    const image = document.createElement('img');
    image.src = require(`@assets/${this.imageURL}`).default;
    const backImage = document.createElement('img');
    backImage.src = require(`@assets/${this.imageURL}`).default;
    const word = document.createElement('p');
    word.innerHTML= `${this.word}`
    const rotate = document.createElement('img');
    rotate.src = require(`@assets/img/rotate.png`).default;
    rotate.classList.add('rotate');
    const translation = document.createElement('p');
    translation.innerHTML = `${this.translation}`;
    
    //Append elems in DOM 
    front.append(image);
    front.append(word);
    front.append(rotate);
    back.append(backImage);
    back.append(translation);
    flipper.append(front);
    flipper.append(back);
    mainCard.append(flipper);
    this.parentElem.append(mainCard);

    image.addEventListener('click', this.play.bind(this));

    rotate.addEventListener('click', function() {
      flipper.style.transform = 'rotateY(180deg)';
    });

    back.addEventListener('mouseleave', function(){
      flipper.style.transform = 'rotateY(0deg)';
    });

  }

  play () { 
    new Audio(require(`@assets/${this.audio}`).default).play(); return false;
  }

}

export default Card;
