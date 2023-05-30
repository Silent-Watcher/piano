'use strict';
const $$ = document;
const pianoKeys = $$.querySelectorAll('.piano-keys .key');
const volumeSlider = $$.querySelector('.volume-slider input[type=range]');
const keysCheckBox = $$.querySelector('.keys-checkbox input');

let audio = new Audio('audio/a.wav');
const validKeys = [
  'a',
  'w',
  's',
  'e',
  'd',
  'f',
  't',
  'g',
  'y',
  'h',
  'u',
  'j',
  'k',
  'o',
  'l',
  'p',
  ';',
];

function playTune(key) {
  if (isCorrectKey(key)) {
    let clickedKey = document.querySelector(`[data-key="${key}"]`);
    audio.src = `audio/${key}.wav`;
    audio.play();
    clickedKey.classList.add('active');
    setTimeout(() => clickedKey.classList.remove('active'), 150);
  }
}

function isCorrectKey(key) {
  return validKeys.includes(key) ? true : false;
}

window.addEventListener('load', () => {
  pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
  });
  $$.addEventListener('keydown', (event) => {
    playTune(event.key);
  });
  volumeSlider.addEventListener('input',handleVolume)
  keysCheckBox.addEventListener('click' , showHideKeys)
});

function handleVolume(event){
    audio.volume = event.target.value
}

function showHideKeys(){
    pianoKeys.forEach(key=> key.classList.toggle('hide'));
}