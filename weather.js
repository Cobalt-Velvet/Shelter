function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kita,jp&appid=10a590f15fae9a0e10e5b07fd4305eae&units=metric&lang=kr')
    .then(response => response.json())
    .then(function(json) {
      let temperature = document.getElementById('temperature');
      let feels_like = document.getElementById('feels_like');
      let city = document.getElementById('city');

      let weather = document.getElementById('weather');
      let description = document.getElementById('description');
      let humidity = document.getElementById('humidity');
      let clouds = document.getElementById('clouds');

      let icon = document.getElementById('icon');
      let sunrise = document.getElementById('sunrise');
      let sunset = document.getElementById('sunset');
      
      temperature.textContent = json.main.temp;
      feels_like.textContent = json.main.feels_like;
      city.textContent = json.name;

      weather.textContent = json.weather[0].main;
      description.textContent = json.weather[0].description;
      humidity.textContent = json.main.humidity;
      clouds.textContent = json.clouds.all;

      icon.textContent = json.weather[0].icon;
      sunrise.textContent = json.sys.sunrise;
      sunset.textContent = json.sys.sunset;

      
      
    })
    .catch(function(error) {
      console.log('ERROR: ' + error);
    });
  }

  window.addEventListener('load', function() {
    getWeather()
    setInterval(getWeather,60000);
});