const Navbar = () => {
  const navigation = document.createElement('div');
  navigation.classList.add('navbar');
  const navul = document.createElement('ul');
  navul.classList.add('navlink');
  navul.innerHTML = `
  <li class="link menu-tabs"=#home">Home</li>
  <li class="link menu-tabs"="#about">About</li>
  <li class="link menu-tabs"="#menu">Menu</li>
  <li class="link menu-tabs"=#contact">Contact</li>
  `

  navigation.appendChild(navul);
  document.body.appendChild(navigation)
}

export default Navbar