import Splide from '@splidejs/splide';
import { Player } from './Player';
import { Playlist } from './Playlist';
import { splideSettings as settings } from './helpers/splideSettings';
class App {
  constructor() {
    this.showMoreViewContainer = document.getElementById('show-more-view');

    const showMoreButton = document.getElementById('show-more-button');
    showMoreButton.addEventListener('click', () => this.showMoreHandler());

    const closeShowMoreButton = document.getElementById('close-show-more');
    closeShowMoreButton.addEventListener('click', () =>
      this.closeShowMoreHandler()
    );

    const backToMainViewButton = document.getElementById(
      'back-to-main-view-btn'
    );
    backToMainViewButton.addEventListener('click', () =>
      this.closeShowMoreHandler()
    );
  }
  init() {
    new Splide('.splide', settings).mount();
    this.player = new Player();
    this.playlist = new Playlist();
  }
  showMoreHandler() {
    this.showMoreViewContainer.classList.add('isActive');
  }
  closeShowMoreHandler() {
    this.showMoreViewContainer.classList.remove('isActive');
  }
}

const app = new App();
app.init();
