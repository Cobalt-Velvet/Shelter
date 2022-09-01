function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kita,jp&appid=10a590f15fae9a0e10e5b07fd4305eae&units=metric&lang=kr')
    .then(response => response.json())
    .then(function(json) {
      let city = document.getElementById('city');
      let weather = document.getElementById('weather');
      let temperature = document.getElementById('temperature');
      let humidity = document.getElementById('humidity');
      let pressure = document.getElementById('pressure');
    
      city.textContent = json.name;
      weather.textContent = json.weather[0].main;
      temperature.textContent = json.main.temp;
      humidity.textContent = json.main.humidity;
      pressure.textContent = json.main.pressure;
    })
    .catch(function(error) {
      console.log('ERROR: ' + error);
    });
  }

  window.addEventListener('load', function() {
    getWeather()
});