import { clothes, weather } from './data.js';

const loacation = document.querySelector('.main-location')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.weather-info');
const mintemp = document.querySelector('.min');
const maxtemp = document.querySelector('.max');

const recommend = document.querySelector('.clothes-list');


function geoSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const API_KEY = 'c2684dc6e51e111896f45de6f039e43b';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url).then(res => res.json())
    .then(data => {
      console.log(data);
      loacation.innerHTML = `${data.name}`
      temperature.innerHTML = `현재 기온: ${(data.main.temp).toFixed()}도`;
      mintemp.innerHTML = `최저 기온: ${(data.main.temp_min).toFixed()}도`;
      maxtemp.innerHTML = `최고 기온: ${(data.main.temp_max).toFixed()}도`;
      console.log(data.weather[0].id);
      if (data.weather[0].id == 800) {
        weatherIcon.innerHTML = `${weather[0].laundry}`;
      } else if (data.weather[0].id >= 801 && data.weather[0].id <= 804) {
        weatherIcon.innerHTML = `${weather[0].cloud}`;
      } else if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
        weatherIcon.innerHTML = `${weather[0].rainy}`;
      } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
        weatherIcon.innerHTML = `${weather[0].heavyRain}`;
      }
      console.log((data.main.temp).toFixed());
      let presentWeather = clothes.find(el =>
        el.temperature.find(temp =>
          temp == (data.main.temp).toFixed()));
      presentWeather.recommend.forEach(item => {
        recommend.innerHTML += `<div class="clothes">${item}</div>`
      })
    });
}

function geoFailed() {
  console.log("Can't find location");
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFailed);


