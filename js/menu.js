jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.mok-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.mok-header').hasClass('is-fixed')) {
		    		$('.mok-header').addClass('is-visible');
		    	} else {
		    		$('.mok-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.mok-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.mok-header').hasClass('is-fixed')) $('.mok-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.mok-primary-nav-trigger').on('click', function(){
		$('.mok-menu-icon').toggleClass('is-clicked'); 
		$('.mok-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.mok-primary-nav').hasClass('is-visible') ) {
			$('.mok-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.mok-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});