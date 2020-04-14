import Sidebar from '@app/components/Sidebar';
import Router from '@app/components/Router';
import cards, { titleCards } from '@app/models/cards';
import MainPage from '@app/components/MainPage';
import ActionCardPage from '@app/components/ActionCardPage';
import '@app/styles/index.scss';

const sidebar = new Sidebar({
    element: document.querySelector('.nav'),
    list: [
        { title: 'Main page', href: '/' },
        ...titleCards.map((title) => ({ title, href: '/cards' }))
    ]
});

const mainPage = new MainPage({ 
    element: document.querySelector('.main'), 
    list: titleCards.map((title) => ({ title, href: '/cards' })),    
    cards
});

const actionCardPage = new ActionCardPage({
    element: document.querySelector('.container'),
    title: titleCards[0],
    cards
});

const router = new Router([
    { 
        path: '/',
        default: true,
        component: mainPage
    },
    { 
        path: '/cards',
        component: actionCardPage
    },
]);

const navigateByLink = ({ title, href }) => {
    if(href === '/cards') {
        actionCardPage.setTitle(title);
    }
    router.navigate(href);
};

mainPage.selectLinkObserver.subscribe(navigateByLink);
sidebar.selectLinkObserver.subscribe(navigateByLink);

window.onpopstate = (data) => {
    console.log(data)
}

document.querySelector('.openbtn').addEventListener('click', sidebar.show.bind(sidebar));
document.querySelector('.closebtn').addEventListener('click', sidebar.hide.bind(sidebar));
