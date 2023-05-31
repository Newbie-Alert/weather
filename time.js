const timeBox = document.querySelector('.time');
const secondsBox = document.querySelector('.seconds');


clock();
setInterval(clock, 1000);

function clock() {
  let date = new Date();
  let hour = (date.getHours().toString()).padStart(2, '0');
  let minutes = (date.getMinutes().toString()).padStart(2, '0');
  let seconds = (date.getSeconds().toString()).padStart(2, '0');
  timeBox.innerText = `${hour}:${minutes}`;
  secondsBox.innerText = `${seconds}`;
}