window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const audioStop = document.querySelectorAll('audio');
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (e.keyCode === 32) {
    audioStop.forEach(wav => {
      wav.pause();
    });
  }
  if (!audio) return; // stops function;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  audio.classList.add('playing');
});
window.addEventListener('keyup', e => {
  const key = document.querySelectorAll('.key');
  key.forEach(keyUp => {
    keyUp.classList.remove('playing');
  });
});
