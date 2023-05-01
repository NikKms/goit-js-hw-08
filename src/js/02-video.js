import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const vimeoPlayer = new Player('vimeo-player');
const currentTime =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))?.seconds || 0;

function setToLocalStorage({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ seconds }));
}

function savedTime() {
  vimeoPlayer.setCurrentTime(currentTime);
}

vimeoPlayer.on(
  'timeupdate',
  throttle(time => setToLocalStorage(time), 1000)
);

vimeoPlayer.element.addEventListener('load', savedTime);
