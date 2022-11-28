// https://api.openweathermap.org/data/2.5/weather?lat=49.133333&lon=6.166667&appid=217ae87b8776acc3fc53b69492625152&units=metric

// https://api.openweathermap.org/data/2.5/forecast?lat=49.133333&lon=6.166667&appid=217ae87b8776acc3fc53b69492625152&units=metric

// URL icon
// `http://openweathermap.org/img/wn/${icon}@2x.png`

// fetch de l'API pour récupérer les données via l'url
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.133333&lon=6.166667&appid=217ae87b8776acc3fc53b69492625152&units=metric"
)
  .then((res) => res.json())
  // récupération de la réponse et éxécution du code
  .then((data) => {
    console.log(data);
  })
  // Récupération de l'erreur et affichage d'un message si problème sur l'API
  .catch((err) => {
    console.log(err);
    document.querySelector(".container").innerhtml = "ERREUR";
    console.log("erreur dans l'API");
  });

const date = new Date();
let dateFr = date.toLocaleString("fr-FR", {
    weekday: "long",
  })

  console.log(dateFr);

// fonction view, qui va afficher l'HTML en fonction de la réponse
function displayWeather() {
  return `   <div class="day">
  <div class="day__text">
    <h2 class="day__text__selected">Mardi</h2>
    <p class="day__text__date">16 Nov 2022</p>
    <p class="day__text__location">Metz, FR</p>
  </div>
  <div class="day__weather">
    <div class="day__weather__icon">PNG</div>
    <h1 class="day__weather__temperature">9°C</h1>
    <h3 class="day__weather__weather">Nuageux</h3>
  </div>
</div>
<div class="description">
  <div class="description__text">
    <div class="description__text__precipitation description__text__card">
      <h3 class="description__text__title">PRECIPITATION</h3>
      <p class="description__text__value">50%</p>
    </div>
    <div class="description__text__humidity description__text__card">
      <h3 class="description__text__title">HUMIDITY</h3>
      <p class="description__text__value">20%</p>
    </div>
    <div class="description__text__wind description__text__card">
      <h3 class="description__text__title">WIND</h3>
      <p class="description__text__value">20km/h</p>
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
