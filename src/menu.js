import menu from './pictures/menu.jpg'

const Menu = () => {
  const inermenu = document.createElement('div');
  inermenu.classList.add('menu', 'show');
  inermenu.id = 'menu';
  inermenu.innerHTML = `
  <img class="" src="${menu}">
  `;

  document.body.appendChild(inermenu)
};

export default Menu;