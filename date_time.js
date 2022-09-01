function setClock(){
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth()+1;
    var date = dateInfo.getDate();
    let time1 = document.getElementById("time")
    time1.textContent = hour + ":" + min  + ":" + sec;
    let date1 = document.getElementById("date")
    date1.textContent = year + ", " + month + ", " + date;
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}


// function getWeather() {

//     fetch('https://api.openweathermap.org/data/2.5/weather?q=kita,jp&appid=10a590f15fae9a0e10e5b07fd4305eae&units=metric&lang=kr')
//     .then(response => response.json())
//     .then(function(json) {
//       let city = document.getElementById('city');
//       let weather = document.getElementById('weather');
//       let temperature = document.getElementById('temperature');
//       let humidity = document.getElementById('humidity');
//       let pressure = document.getElementById('pressure');
    
//       city.textContent = json.name;
//       weather.textContent = json.weather[0].main;
//       temperature.textContent = json.main.temp;
//       humidity.textContent = json.main.humidity;
//       pressure.textContent = json.main.pressure;
//     })
//     .catch(function(error) {
//       console.log('ERROR: ' + error);
//     });
//   }

  window.onload = function(){
    setClock();
    // getWeather();
    setInterval(setClock,500);
}
