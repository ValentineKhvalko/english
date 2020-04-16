import EventObserver from '@app/EventObserver';

class Mode {
    constructor (element) {
        this.mode = 'train';
        this.selectLinkObserver = new EventObserver();
        this.element = element;
        this.element.addEventListener('click', () => this.selectLink())
    }

    selectLink () { 
        const nextMode = this.mode === 'train' ? 'play': 'train';
        this.selectLinkObserver.broadcast(nextMode);
        this.mode = nextMode;
    }
}

export default Mode;