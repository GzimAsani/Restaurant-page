import contact from './pictures/location.png';

const Contact = () => {
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('show');
  contactInfo.id = 'contact';
  const locationPicture = document.createElement('div');
  locationPicture.classList.add('contact-info');
  locationPicture.innerHTML = `
  <h1 class="mt-5 mar">Check our location below</h1>
  <img class="contact-pic" src="${contact}">
  <h4 class= "mt-4">Street:  Braće Frašeri, Preševo, Serbia</h4>
  <h4>Working hours: 9AM - 11PM Everyday</h4>
  `;
  contactInfo.appendChild(locationPicture);
  document.body.appendChild(contactInfo);
};

export default Contact;