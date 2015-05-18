

$(function() {1

	//scroll to the clicked object in a time of 1 second.
smoothScrolling(1500);

//Bring in the project info slider
projectSlider();

workLoad();

//Client unit handling
clientUnits();

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

	//When the Thumbnail is clicked...
	$('.thumb-unit').click(function() {
		//Slide the slider object, which is twice the size of the screen over by 1 screen size.
		$('.project-slider').css('left', '-100%');
		//Display the detail container, this saves us having to deal 
		//with the extra length when it is not on screen.
		$('.detail-container').show();

	});

	//When the return object is clicked
	$('.project-return').click(function() {
		//Slide the slider back into original position (showing the projects grid).
		$('.project-slider').css('left', '0%');
		//Slowly fade the other container out to keep the transition looking smooth.
		$('.detail-container').hide(500);
	});

}

function workLoad() {



}

function clientUnits() {

	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');
	$('.clients-mobile-nav span').first().addClass('active-client');

	$('.client-logo, .clients-mobile-nav span').click(function() {

		var $this = $(this),
			$siblings = $this.parent().children(),
			position = $siblings.index($this);
			
		console.log(position);

		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');

		$siblings.removeClass('active-client');
		$this.addClass('active-client');
	});

	$('.client-next, .client-prev').click(function() {
		var $this = $(this),
			currentClient = $('.clients-conveyor').find('.active-client'),
			position = $('.clients-conveyor').children().index(currentClient),
			clientNumber = $('.client-unit').length;

		//console.log(currentClient, position, clientNumber);

		console.log(position);
		if($this.hasClass('client-next')) {	
			if(position < clientNumber - 1) {
			
				$('.active-client').removeClass('active-client').next().addClass('active-client')

			} else {

				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-client').first().addClass('active-client');

			}
		} else {
			if(position === 0) {
			
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-client').last().addClass('active-client');

			} else {

				$('.active-client').removeClass('active-client').prev().addClass('active-client')

			}
		}
	});	
}



