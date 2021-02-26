import stinet from './pictures/stinet.png'
import rest from './pictures/rest.jpg'
const Home = () => {

  const mainHome = document.createElement('div')
  mainHome.classList.add('picture', 'show', 'active')
  mainHome.id = 'home';
  mainHome.innerHTML = `
  <h1 class="fixed"> RESTAURANT 4 STINET </h1>
  <img class="homepic" src="${stinet}">
  <img class="homepic" src="${rest}">
  <button class="button">Reserve a table</button>
  `

  
  document.body.appendChild(mainHome)
}

export default Home;