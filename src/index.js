import '@app/styles/index.scss';
import cards from '@app/models/cards';
import CardLink from '@app/components/CardLink';

// console.log(cards);

document.body.innerHTML = CardLink({
  imageURL: require(`@assets/${cards['Action (set A)'][0].image}`).default,
  title: 'Action (set A)',
  mode: 'play',
  href: '/cards'
});
