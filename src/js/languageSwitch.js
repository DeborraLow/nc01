document.addEventListener("DOMContentLoaded", function() {

        var languageSwitchEn = document.querySelector('.js-language-switch-en');
        var languageSwitchIn = document.querySelector('.js-language-switch-in');
        

        languageSwitchEn.addEventListener( 'click', function() {
            document.body.classList.remove('language-in');
            document.body.classList.add('language-en');
        });


        languageSwitchIn.addEventListener( 'click', function() {
            document.body.classList.remove('language-en');
            document.body.classList.add('language-in');
        });




    });
