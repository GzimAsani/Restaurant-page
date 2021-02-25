import facebook from './pictures/facebook.png'

const Footer = () => {

  const footerDIv = document.createElement('div');
  footerDIv.classList.add('footer')
  const navLink = document.createElement('ul')
  navLink.classList.add('footer-links')

  navLink.innerHTML = `
  <img class="icon" src="${facebook}">
  `
  footerDIv.appendChild(navLink)
  document.body.appendChild(footerDIv)
}

export default Footer;