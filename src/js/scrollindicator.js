(function(){

    var indicator = document.querySelector('.js-scroll-indicator');
    var scrollPosToHeightRatio;

    var content = document.querySelector('.js-content-height');
    var contentH = content.getBoundingClientRect().height;

    scrollPosToHeightRatio = (window.scrollY + window.innerHeight) / contentH;
    indicator.style.transform = 'scaleX(' + scrollPosToHeightRatio + ')';



    window.addEventListener('scroll', function(e) {

        if(indicator.getBoundingClientRect().top <= 0) {
            scrollPosToHeightRatio = (window.scrollY + window.innerHeight) / (contentH + indicator.getBoundingClientRect().top);
            indicator.style.transform = 'scaleX(' + scrollPosToHeightRatio + ')';
        }

    });

}());


/*
TODO: find a general solution that also fits landing page, so one 
that accounts for the scroll indicator not being on the top of the document
*/