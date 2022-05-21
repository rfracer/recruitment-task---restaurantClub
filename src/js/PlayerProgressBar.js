export class PlayerProgressBar {
  constructor(totalValue) {
    this.totalValue = totalValue;

    this.progressBarValue = document.getElementById('progress-bar-value');
  }

  updateProgressBar(currentValue) {
    this.progressBarValue.style.width = `${
      (currentValue / this.totalValue) * 100
    }%`;
  }
}
