(function() {
    // Detect all user inputs

    function getAllInputs() {
        var inputs = document.getElementsByClassName('input-block__input');

        for (var i = 0, l = inputs.length; i < l; i++) {
            inputs[i].addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.classList.add('dirty');
                } else {
                    this.classList.remove('dirty');
                }
            });
        }
    }

    function submitCallback(dataObj) {
        var d = dataObj;
        console.log('Object received' + d);
    }

    function submitInfo(type, url, isAsync) {
        var request = new XMLHttpRequest();
        request.open(type, url, isAsync);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                submitCallback(data);
            } else {
                console.log("We've reached the target server, but it returned an error");
            }
        }

        request.onerror = function() {
            console.log("We've received a connection error");
        }

        request.send();
    }

    function addEvent(evnt, el, fn) {
        if (el.addEventListener) {
            el.addEventListener(evnt, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on'+evnt, fn);
        } else {
            el[evnt] = fn;
        }
    }

    function replacePhoneImage() {
        var dataPhone = document.querySelector('[data-phone-image]'),
            userImage = document.querySelector('.phone-hero__user-image');

        console.log(dataPhone.dataset.phoneImage);
        var urlStr = 'url(' + dataPhone.dataset.phoneImage + ')';

        userImage.style.backgroundImage = urlStr;
    }

    // Fire functions
    getAllInputs();
    replacePhoneImage();

    var logo = document.querySelector('.logo');
    addEvent('click', logo, function() {
        submitInfo('GET', 'http://uifaces.com/api/v1/random', true);
    });
})();