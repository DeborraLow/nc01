(function(){

	console.log('expand project overview');

	var expandProjectOverviewButton = document.querySelector('.js-expand-project-overview');
	var modelSelectors = document.querySelector('.js-model-selector');
	var projectOverview = document.querySelector('.js-landing-expandable');


	expandProjectOverviewButton.addEventListener(
		'click',
		function() {

			console.log('clicked');

			modelSelectors.classList.add('tr-move-down');

			modelSelectors.classList.add('vertical');

			modelSelectors.classList.add('tr-move-in');

			projectOverview.classList.add('tr-expand');

			expandProjectOverviewButton.classList.add('tr-fade-out');
		}
	);

}())