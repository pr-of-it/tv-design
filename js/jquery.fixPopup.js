$(function(){
	$.fn.scrollPopup = function(options){
		var opts = $.extend({}, $.fn.scrollPopup.options, options);

		return this.each(function(){
			var $popup = $(this);

			var checkPosition = function(){
				if($(window).height() > $popup.outerHeight() || $popup.is(":not(:visible)"))
				{
					$popup.addClass('fixedPopup');
					console.log('add');
					$popup.css('top', opts.scrollOffset);
//					return;
				} else {
					$popup.css('top', $(window).scrollTop() + opts.scrollOffset);
					$popup.removeClass('fixedPopup');
					console.log('remove');
				}
			};checkPosition();
			$(window).resize(function(){
				checkPosition();
			});
			$(window).on("scroll mousewheel", function (e) {
				if($(window).height() > $popup.outerHeight() || $popup.is(":not(:visible)"))
				{
					$popup.addClass('fixedPopup');
					return;
				}

				var popupTop = $popup.offset().top,
					popupBottom = popupTop + $popup.outerHeight() + opts.scrollOffset,
					windowTop = $(window).scrollTop(),
					windowHeight = $(window).height(),
					windowBottom = windowTop + windowHeight;

				if(windowBottom > popupBottom)
				{
//					console.log('down');
					$(document).scrollTop(Math.floor(popupBottom - windowHeight));
				} else {
					if(windowTop < popupTop - opts.scrollOffset)
					{
//						console.log('up');
						$(document).scrollTop(Math.floor(popupTop - opts.scrollOffset));
					}
				}
			});
		});
	};

	$.fn.scrollPopup.options = {
		scrollOffset : 10
	};

//	$(".popup__data_image").scrollPopup({scrollOffset : 20});
});