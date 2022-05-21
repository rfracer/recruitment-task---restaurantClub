import Splide from '@splidejs/splide';
import { Player } from './Player';
import { Playlist } from './Playlist';
import { splideSettings as settings } from './helpers/splideSettings';
class App {
  constructor() {
    this.showMoreButton = document.getElementById('show-more-button');
    this.showMoreViewContainer = document.getElementById('show-more-view');
    this.showMoreButton.addEventListener('click', () => this.showMoreHandler());

    this.closeShowMoreButton = document.getElementById('close-show-more');
    this.backToMainViewButton = document.getElementById(
      'back-to-main-view-btn'
    );
    this.closeShowMoreButton.addEventListener('click', () =>
      this.closeShowMoreHandler()
    );
    this.backToMainViewButton.addEventListener('click', () =>
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
