import EventObserver from '@app/EventObserver';

const modes = {
    train: 'train',
    play: 'play'
}

export const defaultMode = modes.train;

class Mode {
    constructor (element) {
        this.mode = defaultMode;
        this.selectLinkObserver = new EventObserver();
        this.element = element;
        this.element.addEventListener('click', () => this.selectLink())
    }

    selectLink () { 
        const nextMode = this.mode === modes.train ? modes.play : modes.train;
        this.selectLinkObserver.broadcast(nextMode);
        this.mode = nextMode;
    }
}

export default Mode;