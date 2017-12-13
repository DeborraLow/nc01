function modelInteraction() {

	var modelInteractionArea = document.querySelector('.js-model-interaction-area');

	if(modelInteractionArea) {

		var model = document.querySelector('.js-3d-model');
		var modelInteractionAreaWidth = modelInteractionArea.getBoundingClientRect().width;
		var nrOfSegments = 90; //minus one

		modelInteractionArea.addEventListener('mousemove', function(e) {
			modelRotateANimation(e.clientX);
		})

		function modelRotateANimation(mousePosX) {

			var ratio = Math.round(mousePosX / modelInteractionAreaWidth * nrOfSegments) / nrOfSegments * 100;

			return (
				TweenMax.to('.js-3d-model', 0.01, 
				{
				    backgroundPosition: '0 ' + ratio + '%', 
				    ease: SteppedEase.config(1)
				})
			)

		}

	}

}
