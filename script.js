const apiKey = "18cfa749576204d45f6c036bbf0b7678";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let currentCity = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');
let weather = document.querySelector('.weather');
let error = document.querySelector('.error');


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){

      error.style.display = "block";
      weather.style.display = "none";

  } else {

      let data = await response.json();
      
      // console.log(data);
    
      currentCity.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + '°c';
      humidity.innerHTML = data.main.humidity + '%';
      wind.innerHTML = data.wind.speed + ' km/h';
    
      if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/clouds.png";
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
      }
    
      weather.style.display = 'block';
      error.style.display = 'none';
  }
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(searchBox.value);
  searchBox.value = ""
})


