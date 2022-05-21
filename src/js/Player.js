import { PlayerChart } from './PlayerChart';
import { PlayerProgressBar } from './PlayerProgressBar';
import padStart from 'string.prototype.padstart';

export class Player {
  isActive = false;
  //Time in sec
  currentTimeValue = 0;
  totalTitmeValue = 261; //4:21

  constructor() {
    this.playerChart = new PlayerChart();
    this.progressBar = new PlayerProgressBar(this.totalTitmeValue);
    const playButton = document.getElementById('play-btn');
    this.playButtonIcon = document.getElementById('play-btn-icon');
    this.playerCurrentTime = document.getElementById('player-current-time');
    playButton.addEventListener('click', () => this.changeHandler());
  }

  playMusic() {
    this.interval = setInterval(() => {
      this.currentTimeValue++;
      this.playerChart.generateItem();
      this.progressBar.updateProgressBar(this.currentTimeValue);
      this.displayCurrentTime(this.currentTimeValue);
    }, 1000);
  }

  stopMusic() {
    clearInterval(this.interval);
  }

  displayCurrentTime(currentTime) {
    const minutes = Math.floor(currentTime / 60).toString();
    const seconds = (currentTime % 60).toString().padStart(2, '0');

    if (seconds < 10) {
    }

    this.playerCurrentTime.textContent = minutes + ':' + seconds;
  }

  changeHandler() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.playButtonIcon.src = './img/active.png';
      this.playMusic();
    } else {
      this.playButtonIcon.src = './img/unactive.png';
      this.stopMusic();
    }
  }
}
