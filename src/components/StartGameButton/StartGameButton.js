import EventObserver from '@app/EventObserver';

class StartGameButton {
    constructor (element) {
        this.mode = 'endGame';
        this.gameObserver = new EventObserver();
        this.element = element;
        this.element.addEventListener('click', () => this.startGame())
    }

    startGame () { 
        const nextMode = this.mode === 'endGame' ? 'startGame': 'endGame';
        this.gameObserver.broadcast(nextMode);
        this.mode = nextMode;
    }
}

export default StartGameButton;