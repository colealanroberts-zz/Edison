(function() {
    // Global Time Var
    var initialResetTime,
        ranOnce = false;

    // Elements
    var nav           = document.querySelector('nav'),
        logo          = document.querySelector('.logo__type'),
        heroIntroText = document.querySelector('.hero-unit__text--intro'),
        heroIntroBtn  = document.querySelector('.hero-unit__btn'),
        heroWatch     = document.querySelector('.hero-unit__watch');

    // Intro Text
    setTimeout(function() {heroIntroText.style.opacity = 1}, 800);
    setTimeout(function() {heroIntroBtn.style.opacity = 1}, 1000);
    setTimeout(function() {heroWatch.style.opacity = 1}, 1800);

    function changeNavStyle() {
        var windowPos = window.scrollY;
        if (windowPos > 600) {
            nav.classList.add('opaque');
            logo.classList.add('opaque');
        } else if (windowPos < 660) {
            nav.classList.remove('opaque');
            logo.classList.remove('opaque');
        }
    }

    function getLocalTime() {
        // Elements
        var hourEl = document.querySelector('.hero-unit__watch__time--hour'),
            minEl  = document.querySelector('.hero-unit__watch__time--minute');

        // Time
        var t      = new Date(),
            hour   = t.getHours() % 12 || 12,
            minute = t.getMinutes(),
            sec    = t.getSeconds();

        hourEl.innerHTML = hour;

        if (minute < 10) {
            minEl.innerHTML  = "0" + minute;
        } else {
            minEl.innerHTML  = minute;
        }

        // Check to see if the timer is running
        if (ranOnce === false) {
            initialResetTime = 60 - sec;
            console.log(initialResetTime);
        }

        // If the timer receives 60 - 60 then set it to 1000ms to account for this
        if (initialResetTime === 0) {
            initialResetTime = 1;
        }
    }

    if (ranOnce === false) {
        setInterval(function() {
            ranOnce = true;
            initialResetTime = 60;
            getLocalTime();
        }, initialResetTime * 1000);

    } else if (ranOnce === true) {
        setInterval(function() {
            getLocalTime();
        }, initialResetTime * 1000);
    } else {
        console.log("We've encountered some kind of error");
    }

    // Init
    getLocalTime();
})();