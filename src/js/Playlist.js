export class Playlist {
  isOpen = false;

  constructor() {
    const showPlaylistButton = document.getElementById('show-playlist-btn');
    const hidePlaylistButton = document.getElementById('hide-playlist-btn');
    this.playlistWindow = document.getElementById('playlist');

    showPlaylistButton.addEventListener('click', () =>
      this.openPlaylistHandler()
    );
    hidePlaylistButton.addEventListener('click', () => {
      this.hidePlaylistHandler();
    });
  }

  openPlaylistHandler() {
    this.isOpen = true;
    this.playlistWindow.classList.add('isActive');
  }

  hidePlaylistHandler() {
    this.isOpen = false;
    this.playlistWindow.classList.remove('isActive');
  }
}
