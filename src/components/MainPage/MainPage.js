import EventObserver from '@app/EventObserver';
import './style.scss';

class MainPage {
    constructor(config) {
        this.container = config.element;
        this.titleCards = config.list;
        this.cards = config.cards;
        this.selectLinkObserver = new EventObserver();
    }

    mount() {
        this.titleCards.forEach(({title, href}) => { 
            const link = document.createElement('a');
            link.classList.add('main-link');
            link.addEventListener('click', (() => {
                this.selectCard({title, href});
            }));
            
            const image = document.createElement('img');
            image.src = require(`@assets/${this.cards[title][0].image}`).default;
            image.classList.add('main-img');
    
            const titleCard = document.createElement('p');
            titleCard.innerHTML = title;
            
            link.append(image);
            link.append(titleCard)
            this.container.append(link);
        })
    }

    unmount() {
        this.container.innerHTML = '';
    }
      
    selectCard (title) { 
        this.selectLinkObserver.broadcast(title);
    }
}

export default MainPage;