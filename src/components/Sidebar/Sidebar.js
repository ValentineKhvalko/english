import EventObserver from '@app/EventObserver';
import './style.scss';

let hideSidebar = () => null;


class Sidebar {
    constructor(config) {
        this.state = {};
        this.element = config.element;
        this.state.list = config.list || [];
        this.mount();
        this.selectLinkObserver = new EventObserver();
    }

    show(event) {
        document.querySelector('#sidebar').style.transform  = 'translateX(320px)';
        this.state.view = 'visible';
        event.stopPropagation();
        hideSidebar = () => {
            this.hide();
        };
        document.addEventListener('click', hideSidebar);
    }

    hide() {
        document.querySelector('#sidebar').style.transform  = 'translateX(0px)';
        this.state.view = 'hide';
        document.removeEventListener('click', hideSidebar);
    }

    mount() {
        this.state.list.forEach(({ title, href }) => {
            const titleBlock = document.createElement('li');
            titleBlock.innerHTML = `<a href='#'>${title}<a>`;
            titleBlock.addEventListener('click', (() => {
                this.selectLink({ title, href });
        }));
            this.element.append(titleBlock);
        });
    }

    unmount() {
        this.element.innerHTML = '';
    }

    selectLink (title) { 
       this.selectLinkObserver.broadcast(title);
    }
}

export default Sidebar;