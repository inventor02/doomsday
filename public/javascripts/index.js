var countdownDate = new Date("Apr 22, 2021 16:00:00");

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.title = "It is too late";
      document.getElementById("explosion").style.display = "block";
      document.getElementById("countdown").style.display = "none";
      return;
    }

    var hours = Math.floor((distance / (1000 * 60 * 60)));
    if (hours.toString().length < 2) hours = "0" + hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes.toString().length < 2) minutes = "0" + minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds.toString().length < 2) seconds = "0" + seconds;
    document.getElementById("clock").innerHTML = hours + ":"
    + minutes + ":" + seconds;
    document.title = hours + ":" + minutes + ":" + seconds + " until the NEA deadline";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("explosion").style.display = "none";
  }, 1000);