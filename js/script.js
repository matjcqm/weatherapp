// https://api.openweathermap.org/data/2.5/weather?lat=49.133333&lon=6.166667&appid=217ae87b8776acc3fc53b69492625152&units=metric

// https://api.openweathermap.org/data/2.5/forecast?lat=49.133333&lon=6.166667&appid=217ae87b8776acc3fc53b69492625152&units=metric

// URL icon
// `http://openweathermap.org/img/wn/${icon}@2x.png`

const container = document.querySelector(".container");
const weather = [];
// fetch de l'API pour récupérer les données via l'url
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=metz&appid=217ae87b8776acc3fc53b69492625152&units=metric&lang=fr`
)
  .then((res) => res.json())
  // récupération de la réponse et éxécution du codes
  .then((data) => {
    container.innerHTML = displayWeather(data);
    console.log(data);
  })

  // Récupération de l'erreur et affichage d'un message si problème sur l'API
  .catch((err) => {
    console.log(err);
    container.innerhtml = "ERREUR";
    console.log("erreur dans l'API");
  });

const date = new Date();
let jourFr = date.toLocaleString("fr-FR", {
  weekday: "long",
});

console.log(jourFr);

// fonction view, qui va afficher l'HTML en fonction de la réponse
function displayWeather(data) {
  return `   <div class="day">
  <div class="day__text">
    <h2 class="day__text__selected">Jour</h2>
    <p class="day__text__date">16 Nov 2022</p>
    <p class="day__text__location">${data.name}, ${data.sys.country}</p>
  </div>
  <div class="day__weather">
    <div class="day__weather__icon"><img src="http://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" alt="Icone météo"/></div>
    <h1 class="day__weather__temperature">${
      Math.round(data.main.temp * 10) / 10
    }°C</h1>
    <h3 class="day__weather__weather">${data.weather[0].description}</h3>
  </div>
</div>
<div class="description">
  <div class="description__text">
    <div class="description__text__tempfeels description__text__card">
      <h3 class="description__text__title">TEMP. RESSENTIE</h3>
      <p class="description__text__value">${
        Math.round(data.main.feels_like * 10) / 10
      } °C</p>
    </div>
    <div class="description__text__humidity description__text__card">
      <h3 class="description__text__title">HUMIDITE</h3>
      <p class="description__text__value">${data.main.humidity} %</p>
    </div>
    <div class="description__text__wind description__text__card">
      <h3 class="description__text__title">VENT</h3>
      <p class="description__text__value">${Math.round(
        data.wind.speed * 3.6
      )} km/h</p>
    </div>
  </div>
  <div class="description__otherday">
    <div class="description__otherday__card">
      <div class="description__otherday__icon">PNG</div>
      <p class="description__otherday__day">Mercredi</p>
      <p class="description__otherday__temperature">10°C</p>
    </div>
    <div class="description__otherday__card">
      <div class="description__otherday__icon">PNG</div>
      <p class="description__otherday__day">Jeudi</p>
      <p class="description__otherday__temperature">10°C</p>
    </div>
    <div class="description__otherday__card">
      <div class="description__otherday__icon">PNG</div>
      <p class="description__otherday__day">Vendredi</p>
      <p class="description__otherday__temperature">6°C</p>
    </div>
    <div class="description__otherday__card">
      <div class="description__otherday__icon">PNG</div>
      <p class="description__otherday__day">Samedi</p>
      <p class="description__otherday__temperature">4°C</p>
    </div>
  </div>
</div>`;
}
