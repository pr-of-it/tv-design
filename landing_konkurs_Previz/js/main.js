$( document ).ready(function() {

	$('.condition__text').click(function(){
		var target = $("#section2");
  			
  				var top = target.offset().top;
  				top = top - 106 
    		$('html,body').animate({
      			scrollTop: top
    		}, 500);
  								
	});

	$('#land_full_inf').click(function(){
		$('#terms_popup').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#terms_popup').fadeOut();
		});
	});
	$('.conditions1').click(function(){
		$('#terms_popup').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#terms_popup').fadeOut();
		});
	});
	$('.open_reg_form').click(function(){
		$('#land_form').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#land_form').fadeOut();
		});
	});
	$('#login_link').click(function(){
		$('#land_form').fadeOut();
		$('#login_form').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#login_form').fadeOut();
		});
	});
	$('#registration_link').click(function(){
		$('#login_form').fadeOut();
		$('#land_form').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#land_form').fadeOut();
		});
	});
	$('#land_submit').click(function(){
		$('#sucsess_popup').fadeIn();
		$('.landing__popups__close').click(function(){
			$('#sucsess_popup').fadeOut();
		});
	});

});