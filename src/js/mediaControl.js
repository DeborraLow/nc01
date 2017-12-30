// function mediaControl() {

// 	//TODO: last minute check if there are several videos on one page

// 	var video = document.querySelector('.js-video');
	
	
	
// 	if(video) {

// 		var videoWrapper = document.querySelector('.js-media-wrapper');
// 		var playPause = document.querySelector('.js-play-pause');
// 		var seekBar = document.querySelector('.js-seek-bar');
// 		var seekBarW = seekBar.getBoundingClientRect().width;;
// 		var fullscreen = document.querySelector('.js-fullscreen');
// 		var videoDuration;
// 		var videoDurationElement = document.querySelector('.js-media-duration');

// 		video.addEventListener('durationchange', function() {
// 			console.log('duration change');
//     		videoDuration = video.duration;
//     		init();
// 		});


// 		function init() {

// 			videoDurationElement.innerHTML = secondsToMinuteAndSeconds(videoDuration);


// 			playPause.addEventListener('click', function() {

// 				if(video.paused == true) {

// 					video.play();

// 				} else {

// 					video.pause();
// 				}

// 				playPause.classList.toggle('pause');
				
// 			})

// 			fullscreen.addEventListener('click', function() {

// 				if (videoWrapper.requestFullscreen) {

// 					videoWrapper.requestFullscreen();

// 				} else if (videoWrapper.mozRequestFullScreen) {

// 		    		videoWrapper.mozRequestFullScreen();

// 				} else if (videoWrapper.webkitRequestFullscreen) {

// 		    		videoWrapper.webkitRequestFullscreen();

// 				}

// 			});

// 			// seekBar.addEventListener("change", function() {
		  
// 		 //  		var time = videoDuration * (seekBar.value / 100);
// 		 //  		video.currentTime = time;

// 			// });

// 			// // Update the seek bar as the video plays
// 			// video.addEventListener("timeupdate", function() {

// 			// 	var value = (video.currentTime / videoDuration) * seekBarW;
// 			// 	seekBarThumb.style.transform = 'translateX(' + value + 'px)';
				
// 			// });

// 			// // Pause the video when the slider handle is being dragged
// 			// seekBar.addEventListener("mousedown", function() {
// 			// 	video.pause();
// 			// });

// 			// // Play the video when the slider handle is dropped
// 			// seekBar.addEventListener("mouseup", function() {
// 			// 	video.play();
// 			// });

// 			// Event listener for the seek bar
// 			seekBar.addEventListener("change", function() {
// 			 	// Calculate the new time
// 			 	var time = videoDuration * (seekBar.value / 100);

// 			 	// Update the video time
// 			 	video.currentTime = time;
// 			});


// 			// Update the seek bar as the video plays
// 			video.addEventListener("timeupdate", function() {
//   				// Calculate the slider value
//   				var value = (100 / videoDuration) * video.currentTime;

//   				// Update the slider value
//   				seekBar.value = value;
// 			});


// 			// Pause the video when the slider handle is being dragged
// 			seekBar.addEventListener("mousedown", function() {
// 				video.pause();
// 				playPause.classList.remove('pause');
// 			});


// 			// Play the video when the slider handle is dropped
// 			seekBar.addEventListener("mouseup", function() {
// 				video.play();
// 				playPause.classList.add('pause');
// 			});


// 		}

// 		function secondsToMinuteAndSeconds(second) {
// 			var minute = Math.round(second / 60);
// 			var second = Math.round(second - minute * 60);

// 			return minute + ':' + second;
// 		}

		
// 	}

// }
