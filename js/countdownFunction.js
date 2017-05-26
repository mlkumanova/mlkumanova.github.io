'use strict';

(function countdown() {
    const countDownDate = new Date("May 20, 2020 15:00:00").getTime();

    var x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
        document.getElementById("countdownText").innerHTML = days + " Days, " + hours + " hours, " + minutes + " minutes " + "and " + seconds + " seconds, ";


        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Time is up!";
            let text = document.getElementById("countdownText");
            text.removeChild(text.firstChild);
            let secondText = document.getElementById("secondText");
            secondText.removeChild(secondText.firstChild);
        }
    }, 10);
})();