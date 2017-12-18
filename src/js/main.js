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
		var GLOBAL_NAVIGATION_PANEL = document.querySelector('.js-navigation-panel');
		var GLOBAL_OBJECT_SELECTOR = document.querySelector('.js-object-selector');

		
		// LANDING PAGE
		if(GLOBAL_BODY.classList.contains('landing-page')) {

			window.scrollTo(0, 0);

			scrollIndicator();
			expandProjectOverview();
			introAnimation();
			//infoPanel();
			objectInteraction();
			sticky();
			filterSelector('landing');

			//handle barba fix elements
			GLOBAL_NAVIGATION_PANEL.classList.add('navigation-panel-home');
			GLOBAL_OBJECT_SELECTOR.classList.add('object-selector-home');


		}

		//ABOUT PAGE
		else if (GLOBAL_BODY.classList.contains('about-page')) {

			GLOBAL_BODY.classList.remove('no-scroll');

			scrollIndicator();
			aboutNavigation();
			filterSelector('about');

			//handle barba fix elements
			GLOBAL_NAVIGATION_PANEL.classList.remove('navigation-panel-home');
			GLOBAL_OBJECT_SELECTOR.classList.remove('object-selector-home');

		}

		//PROJECT PAGE
		else {

			GLOBAL_BODY.classList.remove('no-scroll');

			scrollIndicator();
			mediaControl();
			filterSelector('project');

			//handle barba fix elements
			GLOBAL_NAVIGATION_PANEL.classList.remove('navigation-panel-home');
			GLOBAL_OBJECT_SELECTOR.classList.remove('object-selector-home');

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




(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    setTimeout(function(){ 
						addTransitionToScrollIndicator();
						
						updateScrollIndicator();
					}, 100);
});

