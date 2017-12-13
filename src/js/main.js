/*
Call all functions from here depending on what page we are on

 - home
 - project
 - about

 */


(function() {

	document.addEventListener("DOMContentLoaded", function() {

		var GLOBAL_BODY = document.querySelector('body');
		var GLOBAL_CONTENT;
		var GLOBAL_CONTENT_H;
		var GLOBAL_SCROLL_POS_TO_HEIGHT_RATIO;
		var GLOBAL_INDICATOR;

		
		// LANDING PAGE
		if(GLOBAL_BODY.classList.contains('landing-page')) {

			scrollIndicator();
			expandProjectOverview();
			//introAnimation();
			//infoPanel();
			modelInteraction();
			sticky();
			filterSelector('landing');

		}

		//ABOUT PAGE
		else if (GLOBAL_BODY.classList.contains('about-page')) {

			scrollIndicator();
			aboutNavigation();
			filterSelector('about');

		}

		//PROJECT PAGE
		else {

			scrollIndicator();
			mediaControl();
			filterSelector('project');

		}

		//pageTransition();

		function filterSelector(type) {

			var filterSelectorList = document.querySelectorAll('.js-filter-selector');
			var filterSelectorListLength = filterSelectorList.length;
			var currentlyActiveIndex = 0;


			for(var i = 0; i < filterSelectorListLength; i++){

				(function(j) {

					filterSelectorList[i].addEventListener(
						'click',
						function(e) {

							filterSelectorList[currentlyActiveIndex].classList.remove('active');
							GLOBAL_BODY.classList.remove('filter-' + currentlyActiveIndex);

							currentlyActiveIndex = j;

							filterSelectorList[j].classList.add('active');
							GLOBAL_BODY.classList.add('filter-' + j);
						}
					);

				}(i));
				
			}
		}

		
	})

}())


function scrollIndicator() {

    GLOBAL_INDICATOR = document.querySelector('.js-scroll-indicator');
    GLOBAL_CONTENT = document.querySelector('.js-content-height');
    
    updateContentH();
    updateScrollIndicator();
    

    window.addEventListener('scroll', function(e) {

        if(GLOBAL_INDICATOR.getBoundingClientRect().top <= 0) {
        	removeTransitionToScrollIndicator();
            updateScrollIndicator();
        }

    });
}


function aboutNavigation() {

	var navigationItemList = document.querySelectorAll('.js-about-nav-item');


	if(navigationItemList) {

		var navigationItemListLength = navigationItemList.length;
		var previousSection = document.querySelector('[data-section]:not(.hidden)');
		var previousNavigationItem = navigationItemList[0];

		for(var i = 0; i < navigationItemListLength; i++) {

			navigationItemList[i].addEventListener(
				'click',
				function(e) {

					previousSection.classList.add('hidden');
					previousNavigationItem.classList.remove('active');

					var referencedSectionDataAttr = e.target.dataset.referencedSection;

					var referencedSection = document.querySelector('[data-section=' + referencedSectionDataAttr + ']');

					referencedSection.classList.remove('hidden');
					e.target.classList.add('active');

					previousSection = referencedSection;
					previousNavigationItem = e.target;

					setTimeout(function(){ 
						addTransitionToScrollIndicator();
						updateContentH();
						updateScrollIndicator();
					}, 100);

				}
			)
		}
	}

}


function updateContentH() {
	GLOBAL_CONTENT_H = GLOBAL_CONTENT.getBoundingClientRect().height;
}

function updateScrollIndicator() {
	GLOBAL_CONTENT_H = GLOBAL_CONTENT.getBoundingClientRect().height;

	GLOBAL_SCROLL_POS_TO_HEIGHT_RATIO = Math.min((window.scrollY + window.innerHeight) / GLOBAL_CONTENT_H, 1);
    GLOBAL_INDICATOR.style.transform = 'scaleX(' + GLOBAL_SCROLL_POS_TO_HEIGHT_RATIO + ')';

}


function addTransitionToScrollIndicator() {
	GLOBAL_INDICATOR.classList.add('transition');
}


function removeTransitionToScrollIndicator() {
	GLOBAL_INDICATOR.classList.remove('transition');
}




