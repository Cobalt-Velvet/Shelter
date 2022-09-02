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
  window.onload = function(){
    setClock();
    setInterval(setClock,500);
}
