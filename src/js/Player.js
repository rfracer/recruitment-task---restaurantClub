import { PlayerChart } from './PlayerChart';

export class Player {
  isActive = false;

  constructor() {
    this.playerChart = new PlayerChart(this.isActive);
    this.playButton = document.getElementById('play-btn');
    this.playButtonIcon = document.getElementById('play-btn-icon');
    this.playButton.addEventListener('click', () => this.changeHandler());
  }

  barProgress() {}

  changeHandler() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.playButtonIcon.src = './img/active.png';
      this.playerChart.generateChart();
    } else {
      this.playButtonIcon.src = './img/unactive.png';
      this.playerChart.stopChart();
    }
  }
}
