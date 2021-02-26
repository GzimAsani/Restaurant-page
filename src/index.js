import './style.css';
import Navbar from './navbar';
import Home from './homepage';
import Menu from './menu';
import Contact from './contact';

const initialize = () => {
  Navbar();
  Home();
  Menu();
  Contact();
};

initialize();

const tabs = document.querySelectorAll('[data-tab-target]');
const tabcontent = document.querySelectorAll('.show');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcontent.forEach((content) => {
      content.classList.remove('active');
    });
    target.classList.add('active');
  });
});