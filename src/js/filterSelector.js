// (function(){


// 	var filterSelectorList = document.querySelectorAll('.js-filter-selector');
// 	var filterSelectorListLength = filterSelectorList.length;
// 	var body = document.querySelector('body');
// 	var currentlyActiveIndex = 0;


// 	for(var i = 0; i < filterSelectorListLength; i++){

// 		(function(j) {

// 			filterSelectorList[i].addEventListener(
// 				'click',
// 				function(e) {

// 					filterSelectorList[currentlyActiveIndex].classList.remove('active');
// 					body.classList.remove('filter-' + currentlyActiveIndex);

// 					currentlyActiveIndex = j;

// 					filterSelectorList[j].classList.add('active');
// 					body.classList.add('filter-' + j);
// 				}
// 			);

// 		}(i));
		
// 	}
// }())