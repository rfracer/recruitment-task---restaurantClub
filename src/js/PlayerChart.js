import { randomNumber } from './helpers/utilities';

export class PlayerChart {
  constructor() {
    this.chart = document.getElementById('player-chart');
  }

  generateItem() {
    const item = document.createElement('div');
    item.classList.add('player-chart__item');
    const randomHeight = randomNumber(30, 100);
    item.style.height = `${randomHeight}%`;
    this.chart.appendChild(item);
  }
}
