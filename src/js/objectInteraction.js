// function objectInteraction() {


// 	var objectInteractionArea = document.querySelector('.js-object-interaction-area');

// 	if(objectInteractionArea) {

// 		var object = document.querySelector('.js-3d-object');
// 		var objectInteractionAreaWidth = objectInteractionArea.getBoundingClientRect().width;
// 		var nrOfSegments = 90; //minus one

// 		objectInteractionArea.addEventListener('mousemove', function(e) {
// 			objectRotateAnimation(e.clientX);
// 		})

// 		function objectRotateAnimation(mousePosX) {

// 			var ratio = Math.round(mousePosX / objectInteractionAreaWidth * nrOfSegments) / nrOfSegments * 100;

// 			return (
// 				TweenMax.to('.js-3d-object', 0.01, 
// 				{
// 				    backgroundPosition: '0 ' + ratio + '%', 
// 				    ease: SteppedEase.config(1)
// 				})
// 			)

// 		}

// 	}

// }


// function isLoadedObject() {
// 	var object = document.querySelector('.js-3d-object');

// 	//remove body class when filter selector has been clicked
// 	//document.body.classList.remove('loaded-sprite');

// 	imagesLoaded( object, { background: true }, function() {
// 	    document.body.classList.add('sprite-loaded');
// 	    objectInteraction();
// 	});

// }