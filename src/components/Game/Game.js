class Game {
    constructor(playList, element) {
        this.element = element;
        this.playList = playList;
        this.answers = [];
        this.cursor = 0;
        this.isFinish = false;
    }

    start() {
        this.shuffle(this.playList);
        setTimeout(() => (this.playAudio()), 1000);
    }

    checkOptoin(option) {
        if (this.cursor === this.playList.length - 1) {
            setTimeout(() => (this.finish()), 1000);
            return false;
        }

        if(this.answers.some((elem) => elem.word === option && !elem.isError) ) {
            return false;
        }

        const card = this.playList.find(({ word }) => word === option);
        const isCorrectAnswer = card.word === this.playList[this.cursor].word;
        const imgStar = document.createElement('img');
        imgStar.classList.add('imgStar');

        this.answers.push({
            word: option,
            isError: !isCorrectAnswer
        });

        if (isCorrectAnswer) {
            new Audio(require(`@assets/audio/correct.mp3`).default).play();
            imgStar.src = require('@assets/img/gold_star.png').default;
            document.querySelector('.starsBlock').prepend(imgStar);
            this.cursor++;
            document.querySelector(`[card-word=${option}]`).classList.add('inactive');
            setTimeout(() => (this.playAudio()), 1000);
        
        } else {
            imgStar.src = require('@assets/img/star.png').default;
            document.querySelector('.starsBlock').prepend(imgStar);
            new Audio(require(`@assets/audio/error.mp3`).default).play();
        }
    } 
    
    playAudio() {
        new Audio(require(`@assets/${this.playList[this.cursor].audioSrc}`).default).play();
    }

    finish() {
        const errors = this.answers.filter(({ isError }) => isError);
        if (errors.length === 0) {
            new Audio(require(`@assets/audio/success.mp3`).default).play();
            this.element.innerHTML = `
                <div class = "success">
                    <p>You Win</p>
                    <img src = ${require('@assets/img/success.jpg').default}>
                </div>
            `;
            setTimeout(()=> (window.location.reload()), 5000);
        } else {
            console.log(require('@assets/img/failure.jpg'))
            new Audio(require('@assets/audio/failure.mp3').default).play();
            this.element.innerHTML = `
                <div class="failure">
                    <p>${errors.length} errors</p>
                    <img src=${require('@assets/img/failure.jpg').default}>
                </div>
            `;
            setTimeout(()=> (window.location.reload()), 5000);
        }
    }

    shuffle(arr){
        var j, temp;

        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

export default Game;