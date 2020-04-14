import cardsData from '@assets/cards';

export const titleCards = cardsData[0];
const allCards = cardsData.slice(1);

const cards = titleCards.reduce((acc, next, index) => {
  return { ...acc, [next]: allCards[index] }
}, {});

export default cards;
