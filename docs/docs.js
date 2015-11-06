(function() {
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
        var d      = new Date(),
            hour   = d.getHours() % 12 || 12,
            minute = d.getMinutes();

        hourEl.innerHTML = hour;

        if (minute < 10) {
            minEl.innerHTML  = "0" + minute;
        } else {
            minEl.innerHTML  = minute;
        }
    }

    getLocalTime();
    changeNavStyle();

    setInterval(function() {getLocalTime();}, 60000);

    window.addEventListener('scroll', changeNavStyle);
})();