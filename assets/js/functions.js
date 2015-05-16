

$(function() {

	//scroll to the clicked object in a time of 1 second.
smoothScrolling(1500);

//Bring in the project info slider
projectSlider();

workLoad();

});

function smoothScrolling(duration) {

	//Assign a click listener to the links containing a hash.
	$('a[href^="#"]').on('click', function(event) {

		//The clicked link is the traget.
		var target = $( $(this).attr('href'));

		//If the target exists, don't reload the page, just scroll down by the offset amount.
		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			//and do it over the provided time in ms.
			}, duration);
		}
	});
}

function projectSlider() {

	$('.thumb-unit').click(function() {

		$('.project-slider').css('left', '-100%');
		$('.detail-container').show();

	});

	$('.project-return').click(function() {

		$('.project-slider').css('left', '0%');
		$('.detail-container').hide(800);
	});

}

function workLoad() {



}


