const Navbar = () => {
  const navigation = document.createElement('div');
  navigation.classList.add('navbar');
  const navul = document.createElement('ul');
  navul.classList.add('navlink');
  navul.id = 'navbar';
  navul.innerHTML = `
  <li class="link" data-tab-target="#home">Home</li>
  <li class="link" data-tab-target="#menu">Menu</li>
  <li class="link" data-tab-target="#contact">Contact</li>
  `;

  navigation.appendChild(navul);
  document.body.appendChild(navigation);
};

export default Navbar;