// function aboutNavigation() {

// 	var navigationItemList = document.querySelectorAll('.js-about-nav-item');


// 	if(navigationItemList) {

// 		var navigationItemListLength = navigationItemList.length;
// 		var previousSection = document.querySelector('[data-section]:not(.hidden)');
// 		var previousNavigationItem = navigationItemList[0];

// 		for(var i = 0; i < navigationItemListLength; i++) {

// 			navigationItemList[i].addEventListener(
// 				'click',
// 				function(e) {

// 					previousSection.classList.add('hidden');
// 					previousNavigationItem.classList.remove('active');

// 					var referencedSectionDataAttr = e.target.dataset.referencedSection;

// 					var referencedSection = document.querySelector('[data-section=' + referencedSectionDataAttr + ']');

// 					referencedSection.classList.remove('hidden');
// 					e.target.classList.add('active');

// 					previousSection = referencedSection;
// 					previousNavigationItem = e.target;

// 				}
// 			)
// 		}
// 	}

// }