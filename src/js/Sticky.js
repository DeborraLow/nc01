// function sticky() {

// 	var indicator = document.querySelector('.js-fix-indicator');
// 	var toBeFixedList = document.querySelectorAll('.js-fix');
// 	var body = document.querySelector('body');
// 	var done = false;
	

// 	if(indicator) {

// 		var indicatorDistFromTop = indicator.offsetTop;

// 		window.addEventListener(
// 			'scroll',
// 			function() {


// 				//check if the indicator has reached the top
// 				if(window.pageYOffset >= indicatorDistFromTop && !done) {
// 					done = true;
// 					body.classList.add('sticky');
// 					body.classList.add('no-intro');
// 					//window.scrollTo(0, 0);
// 					window.scrollTo(0, window.innerHeight);
// 				} 
// 			}
// 		);

// 	}

	
// }
