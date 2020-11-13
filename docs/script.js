'use strict'

const randomColor = () => {
  let sharpCode = '#';
  const chars = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    sharpCode += chars[Math.floor(Math.random() * chars.length)];
  }
  
  console.log(`HexCode = ${sharpCode}`);
  return sharpCode;
}

document.querySelector('#botonete').addEventListener('click', () => {
  document.documentElement.style.setProperty('--kolor', randomColor());
});