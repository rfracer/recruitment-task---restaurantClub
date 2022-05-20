import { randomNumber } from './helpers/utilities';

export class PlayerChart {
  constructor(isActive) {
    this.isActive = isActive;
    this.chart = document.getElementById('player-chart');
  }

  generateItem() {
    const item = document.createElement('div');
    item.classList.add('player-chart__item');
    const randomHeight = randomNumber(40, 100);
    item.style.height = `${randomHeight}%`;
    this.chart.appendChild(item);
  }
  generateChart() {
    this.interval = setInterval(() => this.generateItem(), 1000);
  }
  stopChart() {
    clearInterval(this.interval);
  }
}
