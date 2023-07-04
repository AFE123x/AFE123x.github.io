checkTime();
function checkTime() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
  
    var currentTimeInSeconds = (currentHour * 3600) + (currentMinute * 60) + currentSecond;
  
    var startTimeInSeconds = (7 * 3600); // 7:00 am in seconds
    var endTimeInSeconds = (18 * 3600); // 6:00 pm in seconds
  
    if (currentTimeInSeconds >= startTimeInSeconds && currentTimeInSeconds <= endTimeInSeconds) {
        document.body.style.backgroundImage = "url('background.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('Nightbackground.jpg')";
    }
  }
