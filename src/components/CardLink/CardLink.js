import './style.scss';

const CardLink = ({ imageURL, title, href, mode }) => `
  <a class="main-card main-card__${mode}" href="${href}">
    <img src="${imageURL}" alt="${title}">
    ${title}
  </a>
`;

export default CardLink;
