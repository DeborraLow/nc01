(function(){

	var indicator = document.querySelector('.js-fix-indicator');
	var toBeFixedList = document.querySelectorAll('.js-fix');
	var body = document.querySelector('body');

	if(indicator) {

		var indicatorDistFromTop = indicator.offsetTop;

		window.addEventListener(
			'scroll',
			function() {


				//check if the indicator has reached the top
				if(window.pageYOffset >= indicatorDistFromTop) {
					body.classList.add('sticky');
				} else {
					body.classList.remove('sticky');
				}
			}
		);

	}

	
}())

