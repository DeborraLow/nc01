(function(){

    var indicator = document.querySelector('.js-scroll-indicator');
    var scrollPosToHeightRatio;

    var content = document.querySelector('.js-content-height');
    var contentH = content.getBoundingClientRect().height;

    console.log('contentH ' + contentH);
    console.log('window.scrollY ' + window.scrollY);
    console.log('window.innerHeight ' + window.innerHeight);


    window.addEventListener('scroll', function(e) {

      scrollPosToHeightRatio = (window.scrollY + window.innerHeight) / contentH;
      indicator.style.transform = 'scaleX(' + scrollPosToHeightRatio + ')';
    });

}());
