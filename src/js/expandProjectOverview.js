function expandProjectOverview(){

	var expandProjectOverviewButton = document.querySelector('.js-expand-project-overview');
	var objectSelectors = document.querySelector('.js-object-selector');
	var projectOverview = document.querySelector('.js-landing-expandable');


	expandProjectOverviewButton.addEventListener(
		'click',
		function() {


			objectSelectors.classList.add('tr-move-down');

			objectSelectors.classList.add('vertical');

			objectSelectors.classList.add('tr-move-in');

			projectOverview.classList.add('tr-expand');

			expandProjectOverviewButton.classList.add('tr-fade-out');
		}
	);

}