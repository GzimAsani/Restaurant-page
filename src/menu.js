

const Menu = () => {
  const inermenu = document.createElement('div')
  inermenu.classList.add('menu')
  inermenu.classList.add('show')
  inermenu.innerHTML = `
  <h1>Gzimm</h1>
  `
  document.body.appendChild(inermenu)
};

export default Menu;