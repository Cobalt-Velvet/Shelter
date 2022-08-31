var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://api.openweathermap.org/data/2.5/weather?q=kita,jp&appid=10a590f15fae9a0e10e5b07fd4305eae&units=metric&lang=kr',
function(err, data) {
  if (err !== null) {
    alert('API를 받아오지 못했습니다.: ' + err);
  } else {
    alert('현재 온도는 ' + data.main.temp + '도 입니다');
  }
});