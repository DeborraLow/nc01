(function(){


	var filterSelectorList = document.querySelectorAll('.js-filter-selector');
	var filterSelectorListLength = filterSelectorList.length;
	var body = document.querySelector('body');


	for(var i = 0; i < filterSelectorListLength; i++){

		(function(j) {

			filterSelectorList[i].addEventListener(
				'click',
				function() {

					body.classList.remove('filter-1');
					body.classList.remove('filter-2');
					body.classList.remove('filter-3');
					body.classList.remove('filter-4');
					body.classList.remove('filter-5');
					body.classList.add('filter-' + j);
				}
			);

		}(i+1));
		
	}
}())