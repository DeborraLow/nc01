// function scrollIndicator() {

   

//     var indicator = document.querySelector('.js-scroll-indicator');
//     var scrollPosToHeightRatio;

//     var content = document.querySelector('.js-content-height');
//     contentH = content.getBoundingClientRect().height;

   

//     scrollPosToHeightRatio = Math.min((window.scrollY + window.innerHeight) / contentH, 1);
//     indicator.style.transform = 'scaleX(' + scrollPosToHeightRatio + ')';

//     console.log('scrollPosToHeightRatio ' + scrollPosToHeightRatio);



//     window.addEventListener('scroll', function(e) {

//         if(indicator.getBoundingClientRect().top <= 0) {
//             scrollPosToHeightRatio = Math.min((window.scrollY + window.innerHeight) / (contentH + indicator.getBoundingClientRect().top), 1);
//             indicator.style.transform = 'scaleX(' + scrollPosToHeightRatio + ')';
//         }

//     });
// }


