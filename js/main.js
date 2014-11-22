var MainJsClass = function () {
	var scope = this;

    this.initNewsBlock = function() {
        var leftHeight = $('.top__left__news__block').height();
        var rightheight = $('.top__right__news__block').height();
        var imgHeight = $('.top__news__img').height();
        var padding = parseInt($('.top__news__info').css('paddingTop'), 10) + parseInt($('.top__news__info').css('paddingBottom'), 10);
        if ( leftHeight < rightheight ) {
            $('.top__news__info').css('height', (rightheight - imgHeight - padding) + 'px');
        }
        else {
            var $allnews = $('.top__right__news__block a.all__news');
            $allnews.addClass('absolute').css('margin-top', (leftHeight - $allnews.height()) + 'px');
        }
    };

	this.customDatepicker = function () {
		if($('.custom-datepicker').length){

			$(".custom-datepicker", "").datepicker({
				"format": "dd.m.yyyy",
				"weekStart": 1,
				"autoclose": true
			});
			$('.form__add-on').click(function(){
				$(this).prevAll('.datepicker').datepicker('show');
			});
			// Hide datepicker on scroll and resize

			var dtPckr = $('.custom-datepicker');
			$(window).scroll(function() {
				dtPckr.datepicker('hide');
			});

			$(".custom-datepicker").click(function(){
				$(this).css('color','#34495e')
			});
		};
		if($('.visible-datepicker').length){
			var datepicker = $(".visible-datepicker").datepicker();
			datepicker.datepicker('show');
		};
	};

	this.initWysiwyg = function () {
		if($('#wysiwyg').length){
			$('#wysiwyg').ckeditor({
				removePlugins: 'elementspath'
			});
		}

	};

	this.initStripe = function () {
		if($(".jsStripe").length){
			$(".jsStripe li:nth-child(even)").addClass('even');
		}
	};


    this.companyAlphabetSort = function () {
        if($(".alphabet_sort").length){
            $(".alphabet_sort").on('click', function() {

                if($(".alphabet_sort").hasClass('reverse')) {
                    $(".alphabet_sort").removeClass('reverse');
                    $(this).text('А - Я');
                }
                else {
                    $(".alphabet_sort").addClass('reverse');
                    $(this).text('Я - А');
                }
            });
        }
    };

	this.initCarousel = function () {
		if($('.slider__holder').length){
			$(".slider__holder").carouFredSel({
				width: 620,
				height: "variable",
				items: {
					visible: 1,
					width: 620,
					height: "variable"
				},
				onCreate: function() {
					$(this).trigger("currentPosition", function( pos ) {
						var txt = (pos+1) + " из " + $("> *", this).length;
						$("#slider_log").html( txt );
					});
				},
				scroll: {
					pauseOnHover: true,
					onBefore : function() {
						$(this).trigger("currentPosition", function( pos ) {
							var txt = (pos+1) + " из " + $("> *", this).length;
							$("#slider_log").html( txt );
						});
					},
					onAfter : function() {
						$(this).trigger("currentPosition", function( pos ) {
							var txt = (pos+1) + " из " + $("> *", this).length;
							$("#slider_log").html( txt );
						});
					}
				},
				auto: {
					timeoutDuration: 5000,
					delay: 5000,
					progress: ".bar"
				},
				prev: ".slider__prev",
				next: ".slider__next"
			});
		};

		$('.gallery').each(function(){
			var gallery = $(".gallery__holder", $(this)),
				next = $(".gallery__next", $(this)),
				prev = $(".gallery__prev", $(this));

			gallery.carouFredSel({
				circular: true,
				infinite: false,
				auto 	: false,
				prev	: {
					button	: prev,
					key		: "left"
				},
				next	: {
					button	: next,
					key		: "right"
				}
			});
		})

	};

	this.initChoosen = function (){
		$(".chosen-select").chosen({max_selected_options: 3});
	};

	this.hasDrop = function (){
		if ($('.nav__drop_right').length) {
			$('.nav__drop_right').parent('.nav__drop-item').addClass('has-drop');
		}
	};
	this.initAccordion = function (){
		if ($('.accordion').length) {

			// Hide all contents except first
			$('.accordion__content').not('.active').css({
				height      : 0,
				overflow    : 'hidden'
			});

			$('.accordion__content.active').prev('.accordion__caption').addClass('active-link');

			// Do active first caption
//			$('.accordion__caption').first().addClass('active-link');

			$('.accordion__caption').click(function(){
				if ($(this).is('.active-link'))
				{
					$(this).next('.accordion__content').css('overflow', 'hidden').slideUp();
					$(this).removeClass('active-link');
				}
				else
				{
					$(this).next('.accordion__content').hide().css('height', 'auto').slideDown(function(){
						$(this).css('overflow', 'visible');
					});
					$(this).addClass('active-link');
				}
			});
		}
	};

	this.openPopup = function (){
		$('.jsOpenLink').click(function(e){
			var $thisId = $(this).attr('href');
			if($thisId.length) {
				if ($thisId =="#"){
					$('.jsOpenPopup').show();
				} else {
					$($thisId).show();
				}
			} else {
				$('.jsOpenPopup').show();
			}
			scope.initFixedPopup();
			e.preventDefault();
		});
		$('.jsClosePopup').click(function(e){
			$('.jsOpenPopup').hide();
			e.preventDefault();
		});
	};

	this.TopScroll = function (){
		var currentScrollTop = 0;
		if($(document).scrollTop()> currentScrollTop){
			$('.top_scroll').fadeIn(1);
		}
		$(window).scroll(function(){

			currentScrollTop = $(window).scrollTop();

			if (currentScrollTop > 0){
				$('.top_scroll').fadeIn(1);
			}else{
				$('.top_scroll').fadeOut(1);

			}

			tempScrollTop = currentScrollTop;

		});
		$('.top_scroll').click(function(){
			if($.browser.safari){
				bodyelem = $("body")
			} else{
				if($.browser.opera){
					bodyelem = $("html")
				} else{
					bodyelem = $("html,body")
				}
			}

			bodyelem.animate({scrollTop: 0},700);

			return false;
		});
	};

	this.RangeSlider = function (){
		var sliderRangeItem = $("#filter-slider"),
			sliderMin = $('.minCost'),
			sliderMax = $('.maxCost'),
			sliderMinStart = parseInt($('.filter__value-left').text()),
			sliderMaxStart = parseInt($('.filter__value-right').text()),
			sliderMinCur = sliderMinStart,
			sliderMaxCur = sliderMaxStart;

		sliderRangeItem.slider({
			range: true,
			min: sliderMinStart,
			max: sliderMaxStart,
			values: [ sliderMinStart, sliderMaxStart ],
			stop: function(event, ui) {
				$('input[name="min_price"]').val(sliderRangeItem.slider("values",0)).change();
    			$('input[name="max_price"]').val(sliderRangeItem.slider("values",1)).change();
				sliderMin.text(sliderRangeItem.slider("values",0));
				sliderMax.text(sliderRangeItem.slider("values",1));
				sliderMinCur = sliderRangeItem.slider("values",0);
				sliderMaxCur = sliderRangeItem.slider("values",1);
				$('.filter__value-left').html(sliderMinCur + ' <span class="b-rbl">a</span>');
				$('.filter__value-right').html(sliderMaxCur + ' <span class="b-rbl">a</span>');
			},
			slide: function(event, ui){
				sliderMin.text(sliderRangeItem.slider("values",0));
				sliderMax.text(sliderRangeItem.slider("values",1));
				sliderMinCur = sliderRangeItem.slider("values",0);
				sliderMaxCur = sliderRangeItem.slider("values",1);
				$('.filter__value-left').html(sliderMinCur + ' <span class="b-rbl">a</span>');
				$('.filter__value-right').html(sliderMaxCur + ' <span class="b-rbl">a</span>');
			}
		});

//		$('#filter-slider > .ui-slider-handle').last().addClass('filter__item_last');
		$('.filter__value-left').html(sliderMinCur + ' <span class="b-rbl">a</span>');
		$('.filter__value-right').html(sliderMaxCur + ' <span class="b-rbl">a</span>');
	};

	this.initGallery = function (){
		if ($('#carousel').length) {
			//jCarousel Plugin
			$('#carousel').jcarousel({
				vertical: true,
				scroll: 1,
				auto: false,
				wrap: 'none',
				visible: 2
//                initCallback: mycarousel_initCallback
			});

			//Front page Carousel - Initial Setup
			$('.slideshow-carousel a img').css({'opacity': '0.5'});
			$('.slideshow-carousel a img:first').css({'opacity': '1.0'});
			$('.slideshow-carousel li a:first').append('<span class="arrow"></span>');


			//Combine jCarousel with Image Display
			$('.slideshow-carousel li a').hover(
				function () {

					if (!$(this).has('span').length) {
						$('.slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
						$(this).stop(true, true).children('img').css({'opacity': '1.0'});
					}
				},
				function () {

					$('.slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
					$('.slideshow-carousel li a').each(function () {

						if ($(this).has('span').length) $(this).children('img').css({'opacity': '1.0'});

					});

				}
			).click(function () {

					$('span.arrow').remove();
					$(this).append('<span class="arrow"></span>');
					$('.slideshow-main li').removeClass('active');
					$('.slideshow-main li.' + $(this).attr('rel')).addClass('active');

					return false;
				});
//Carousel Tweaking
		};

//		if ($('#carousel-h').length) {
//			//jCarousel Plugin
//			$('#carousel-h').jcarousel({
//				scroll: 1,
//				auto: false,
//				wrap: 'none',
//				visible: 2,
//				initCallback: mycarousel_initCallback
//			});
//
//			//Front page Carousel - Initial Setup
//			$('.slideshow-carousel a img').css({'opacity': '0.5'});
//			$('.slideshow-carousel a img:first').css({'opacity': '1.0'});
//			$('.slideshow-carousel li a:first').append('<span class="arrow"></span>')
//
//
//			//Combine jCarousel with Image Display
//			$('.slideshow-carousel li a').hover(
//				function () {
//
//					if (!$(this).has('span').length) {
//						$('.slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
//						$(this).stop(true, true).children('img').css({'opacity': '1.0'});
//					}
//				},
//				function () {
//
//					$('.slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
//					$('.slideshow-carousel li a').each(function () {
//
//						if ($(this).has('span').length) $(this).children('img').css({'opacity': '1.0'});
//
//					});
//
//				}
//			).click(function () {
//
//					$('span.arrow').remove();
//					$(this).append('<span class="arrow"></span>');
//					$('.slideshow-main li').removeClass('active');
//					$('.slideshow-main li.' + $(this).attr('rel')).addClass('active');
//
//					return false;
//			});
//
//			function mycarousel_initCallback(carousel) {
//
//				// Pause autoscrolling if the user moves with the cursor over the clip.
//				carousel.clip.hover(function() {
//					carousel.stopAuto();
//				}, function() {
//					carousel.startAuto();
//				});
//			}
//		}
	};

	this.initSelect = function (){
		if ($('.filter__select').length){

			$('.filter__select').each(function(i, v){
				var topBlock = $('.filter__top', this),
					arrow = $('.ico_type_arrow', this),
					listBlock = $('.filter__list-block', this),
					listItems = $('.filter__list', this);

				topBlock.click(function(e){
					arrow.toggleClass('open');
					listBlock.slideToggle();
					e.stopPropagation();
					e.preventDefault();
				});
				$(document).click(function(e){
					listBlock.slideUp();
					arrow.removeClass('open');
					//e.preventDefault();
				});

				listItems.not('.filter__list_fst').click(function(e){
					var $this = $(this);
					if ($this.hasClass('filter__list_dsbl')){
						return false;
					}

					var tlist = $this.text();
					listItems.removeClass('active');
					$(this).toggleClass('active');

					if (listItems.hasClass('active')){
						listItems.eq(0).text(tlist);
						listBlock.slideUp();
						arrow.removeClass('open');
						$(this).toggleClass('open');
					}



					e.stopPropagation();
					e.preventDefault();
				});
			});
		}
	};

	this.initViewMore = function (){
		if ($('.jsMoreText').length){
			var $text = $('.jsMoreText');

				$text.each(function(){
					
					var $symbol_count = 0;
					var $shorttext = "";
					var $alltext = $('.jsMoreTextBox p').text();

					if($('.jsMoreTextBox p').text().replace(/ /g, '').length >= 300) {

						for(i=0;i<=$('.jsMoreTextBox p').text().length;i++) {
							if($symbol_count != 300) {
								if($('.jsMoreTextBox p').text().substring(i, i+1) != " ") {

									$symbol_count+=1;
									$shorttext = $shorttext + $('.jsMoreTextBox p').text().substring(i, i+1);

								}
								else $shorttext = $shorttext + " ";
							}
							else {

								$shorttext = $shorttext + '...';
								$('#show_more').click(function(){
									$('.jsMoreTextBox p').html($alltext);
									$(this).hide();
								});
								break;
							}
						}
					}
					else {

						$shorttext = $('.jsMoreTextBox p').text();
						$('#show_more').hide();
					}

					$('.jsMoreTextBox p').html($shorttext);
				});
		}
	};

	this.initBtnChangeText = function (){
		if ($('.jsBtnChangeText').length){
			var $btn = $('.jsBtnChangeText');

			$btn.each(function(){
				var $this = $(this),
					$btnOldText = $this.children('.btn__inner').text(),
					$btnNewText = $this.attr('data-text');

				$this.click (function(e){
					if ($(this).text() != $btnNewText) {
						$this.children('.btn__inner').text($btnNewText);
						$this.removeClass('btn_green');
						$this.addClass('btn_unsubscribe');
					} else {
						$this.children('.btn__inner').text($btnOldText);
						$this.addClass('btn_green');
						$this.removeClass('btn_unsubscribe');
					}
					e.preventDefault();
				});
			});
		}
	};

	this.initPopupImage = function (){
		if ($('.popup__img').length){
			var $imgBox = $('.popup__img'),
				$image = $('.popup__img > img');

			$image.attr('src', $image.attr('src') + "?" + new Date().getTime());
			$image.load(function(){
				var $this=$(this);
				if ($this.width() >= 600) {
					$this.css({
						display:'block'
					});
					$this.attr('width','600');
				} else {
					$imgBox.css({
						'padding-top':'20px',
						'padding-bottom':'20px',
						'text-align':'center'
					})
				}
			});
			var t=0;
			t = setTimeout(300);
//			scope.initFixedPopup();
		}
	};

	this.initPopupVideo = function (){
		if ($('.popup__video').length){
			var $videoBox = $('.popup__video'),
				$video = $('.popup__video > iframe');
			console.log($video.width());
			if ($video.width() >= 720) {
				$video.css({
					width:'720px',
					height:'405px'
				});
			} else {
				$videoBox.css({
					'padding-top':'20px',
					'padding-bottom':'20px',
					'text-align':'center'
				})
			}
			scope.initFixedPopup();
		}
	};


    this.initSelect2 = function (){
        if ($('.select_custom').length) {
            $("select").select2({ minimumResultsForSearch: -1 });

            $(document).on("select2-open", "select", function () {
                var el;
                $('.select2-results').each(function () {
                    var api = $(this).data('jsp');

                    if (api !== undefined) api.destroy();
                });

                $('.select2-results').each(function () {
                    if ($(this).parent().css("display") != 'none') el = $(this);

                    if (el === undefined) return;

                    el.mCustomScrollbar({
                    /*    autoScrollOnFocus: true,*/

                        mouseWheel:true,
                        advanced:{
                            updateOnContentResize: true
                        }
                    });
                });
            });
        }
    };



    this.initScroll = function (){
        if ($('.check-events').length) {
            $(".check-events").mCustomScrollbar();
        }

        if ($('.scroll-area').length) {
            $(".scroll-area").mCustomScrollbar();
        }

        if ($('.question_content').length) {
            $(".question_content").mCustomScrollbar();
            $('#cosntruct-prev-questions').on('click', function() {
                $(".question_list").fadeIn('fast');
            });
            $('.question_list .close').on('click', function() {
                $(".question_list").fadeOut('fast');
            });
        }
    };
    this.initScroll2 = function (){
        if ($('.notification').length) {
            $(".notification").mCustomScrollbar();
        }
    };

	this.initUserAutocomplete = function (){
		if ($('.jsSearch').length) {
			var data = [
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Сергей Константинов'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: 'Юрий Петров'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Константинопольская Олимпиада'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: 'Василий Теркин'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Николай Молотков'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: 'Юлиана Максимова'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Кристина Хорольская'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: 'Катерина Севидова'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Иван Сидоров'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: 'Сидор Иванов'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: 'Константинопольская Параолимпиада'}
			];

			var $search = $('.jsSearch'),
				$autocomplete = $(".jsAutocomplete"),
				tmpl = $("#autocompleteTmpl").html(),
				keys = { down : 40, up : 38, enter: 13, esc : 27 },
				isACOpen = $autocomplete.is(":visible"),
				activeClass = 'autocomplete__item-active';

			$search.keydown(function(e){
				switch(e.keyCode){
					case keys.up:
						handleUp(e);
						break;
					case keys.down:
						handleDown(e);
						break;
					case keys.enter:
						handleEnter(e);
						break;
					case keys.esc:
						handleEsc(e);
						break;
					default: {
						handleDefault(e);
					}
				}
			});

			$search.click(function(e){
				updateAutocomplete();
			});

			$('document, body').on("click", function (e) {
				var $target = $(e.target);
				if (!$target.parents().is($autocomplete) && !$target.is($search)) {
					hideAutocomplete();
				}
			});

			function handleMouseEvents(){
				$(".jsItem").click(function(e){
					e.preventDefault();
					fillChoosen($(this));
				});
			}

			function handleUp(e){
				e.preventDefault();
				if(isACOpen){
					moveActiveOn(-1);
				}
			}

			function handleDown(e){
				e.preventDefault();
				if(isACOpen) {
					moveActiveOn(1);
				}
				else
				{
					showAutocomplete();
				}
			}

			function handleEnter(){
				if(isACOpen) {
					fillChoosen(getActive());
				}
				else
				{
					showAutocomplete();
				}
			}

			function handleEsc(){
				hideAutocomplete();
			}

			function moveActiveOn(offset){
				var active = getActive(),
					items = $(".jsItem", $autocomplete),
					newActiveIndex = (active.index() + offset) % items.length,
					newActive = items.eq(newActiveIndex);

				items.removeClass(activeClass);
				newActive.addClass(activeClass);
			}

			function getActive() {
				return $("." + activeClass);
			}

			function fillChoosen($item) {
				$search.val($item.text().trim());
				hideAutocomplete();
			}

			function showAutocomplete(){
				isACOpen = true;
				$autocomplete.show();
			}

			function hideAutocomplete(){
				isACOpen = false;
				$autocomplete.hide();
			}

			function updateAutocomplete(){
				var searchVal = $search.val();
				if(searchVal === "") {
					hideAutocomplete();
					return;
				}
				var filtered = queryFilteredData(searchVal);
				if(filtered.length > 0){
					showAutocomplete();
				}
				else {
					hideAutocomplete();
				}
				$autocomplete.html(_.template(tmpl, { filtered:filtered, activeClass : activeClass }));
				handleMouseEvents();
			}

			var timeout;
			function handleDefault(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					updateAutocomplete();
				}, 500);
			}

			function queryFilteredData(filterCriteria){
				return _.filter(data, function(item) {
					return item.text.toLowerCase().indexOf(filterCriteria.toLowerCase()) > -1;
				});
			}
		}
	};
	this.initCommentOpen = function (){
		if ($('.jsCommentOpen').length) {
			$('.jsCommentOpen').click(function(){
				$(this).parent().parent('.comments__item').removeClass('comments__item_empty');
				$(this).find('.ta').attr('placeholder','Текст комментария')
			});
		}
	};

	this.initMesBoxSwitcher = function (){
		if ($('#jsMesBoxOpener').length) {
			$('#jsMesBoxOpener').click(function(e){
				$('#jsMesBox').toggleClass('message-box_active');
				e.preventDefault();
			});
		}
	};

	this.initFriendTooltip = function (){
		if ($('#jsFriendTooltip').length) {
			var $friendTooltip = $('#jsFriendTooltip');
			$('.message-box__friend').each(function(){
				var $friendOffset = $(this).offset(),
					$friendtop = $friendOffset.top;
				$(this).hover(function(e){
					var $friendOffset = $(this).offset();
					var $friendTop = $friendOffset.top -255;
					var $friendLeft = $friendOffset.left + 10;
					var t = 0;
					t = setTimeout(function () {
						$friendTooltip.css('top', $friendTop);
						$friendTooltip.css('left', $friendLeft);
						$friendTooltip.fadeIn(300);
					}, 3000);
//					console.log($friendTop);
//					console.log($friendLeft);
					e.preventDefault();
				}).mouseout(function(){
					$friendTooltip.fadeOut(300);
					});
			});
		}
	};

	this.initFixedPopup = function (){
		if ($('.jsPopupChangePosition').length) {
			$('.jsPopupChangePosition').scrollPopup({scrollOffset : 20});
		}
	};

    this.initResizeImage = function (callbackfunk) {
        //content gallery

        var imgCount = 0;
        var allCount = typeof (callbackfunk) != "undefined" ? $('.resize-pic img').length : -1;

        $('.resize-pic').each(function () {
            var images = $('img', this),
                items = $('.resize-pic__item', this),
                itemHeight = items.height(),
                itemWidth = items.width();

            images.css({
                'height': 'auto',
                'width': 'auto',
                'margin-top': 0,
                'margin-left': 0
            });
            images.each(function () {
                if ($.browser.msie || $.browser.opera) {
                    $(this).attr('src', $(this).attr('src') + "?" + new Date().getTime());
                }
                $(this).load(function () {
                    check($(this));
                    if (allCount == ++imgCount)
                        callbackfunk();
                });

                if ($(this).height() !== 0){
                    check($(this));
                }
            });

            function check(image) {
                var height = image.height(),
                    width = image.width();
                if (height < width) {
                    image.css({
                        'height': itemHeight,
                        'width': 'auto'
                    })
                } else {
                    image.css({
                        'height': 'auto',
                        'width': itemWidth
                    })
                }
                if (itemHeight - image.height() > 0 && itemHeight != itemWidth) {
                    image.css('height', '100%')
                }
                else {
                    image.css({
                        'margin-top': (itemHeight - image.height()) / 2
                    });
                }

                if (itemWidth - image.width() > 0 && itemWidth != itemHeight) {
                    image.css('width', '100%');
                    image.css('height', 'auto');
                    image.css({
                        'margin-left': (itemWidth - image.width()) / 2
                    });
                    image.css({
                        'margin-top': (itemHeight - image.height()) / 2
                    });
                }
                else {
                    image.css({
                        'margin-left': (itemWidth - image.width()) / 2
                    });
                }
            }
        });
    };

	$(function(){
        scope.companyAlphabetSort();
        scope.initNewsBlock();
		scope.customDatepicker();
		scope.initWysiwyg();
		scope.initCarousel();
		scope.hasDrop();
		scope.initGallery();
		scope.initChoosen();
		scope.openPopup();
		scope.initStripe();
		scope.initAccordion();
		scope.RangeSlider();
		scope.TopScroll();
		scope.initSelect();
		scope.initViewMore();
		scope.initBtnChangeText();
		scope.initPopupImage();
		scope.initPopupVideo();
        scope.initSelect2();
        scope.initScroll();
        scope.initScroll2();
        scope.initUserAutocomplete();
        scope.initCommentOpen();
        scope.initMesBoxSwitcher();
        scope.initFriendTooltip();
        scope.initFixedPopup();
        scope.initResizeImage();
	});

};

var mainJs = new MainJsClass();

function mycarousel_initCallback(carousel) {

	// Pause autoscrolling if the user moves with the cursor over the clip.
	carousel.clip.hover(function() {
		carousel.stopAuto();
	}, function() {
		carousel.startAuto();
	});
}
$(function(){
	$("table").attr("border", "0");

	$('#invitePopup').hide();
	
	$("#invite_friends").click(function(){
        $('#invitePopup').show();
        jcf.customForms.replaceAll();
	});

	$("#voc__feedback_popup").hide();
	$("#voc__feedback__btn").click(function(){
		$("#voc__feedback_popup").show();
	});


$('li.tabset__item').not($('li.active')).click(function(){
		$('form > div.error').hide();
});

(function($){
        $(window).load(function(){
            $(".message-box__friends").mCustomScrollbar({theme: "light-3"});
        });
    })(jQuery);

//Accordion
      $('.category > div')
        .click(function(event){
          event.stopPropagation();
        })
        .hide();
      $('.category').click(function(){
        var selfClick = $(this).find('> div:first').is(':visible');
        if(!selfClick) {
          $(this)
            .parent()
            .find('.category > div:visible')
            .slideToggle();
        } 
        $(this)
          .find('> div:first')
          .stop(true, true)
          .slideToggle();
      });
    
});

// LANDING PAGE POPUPS
$(window).load(function(){

            $("#land_submit").click(function(){
            	$("#land_register").show();
            });

            $("#work_send_btn").click(function(){
            	$("#land_work_send").show();
            });

            $("#land_full_inf").click(function(){
            	$("#land_agree").show();
            });

            $("#land_agree_link").click(function(){
            	$("#land_work_send").hide();
            	$("#land_agree").show();
            });

        });



$( document ).ready(function() {


    $(document).on('mouseover', '#open-map', function(e) {
        $('.map-popup').css({
            top: ($(this).offset().top - 297) + 'px',
            left: ($(this).offset().left - 193) + 'px'
        });
        $('.map-popup').fadeIn('fast');
    });
    $(document).on('mouseout', '#open-map', function(e) {
        $('.map-popup').fadeOut('fast');
    });

/*pavilion filters*/


	

	$("#filtersBox").css({'height' : '0'});

    var filtersHeight = $("#filtersBox").height();


    $("#filtorBtn").click(function(){

        if(filtersHeight == 0) {

            $("#filtersBox").animate({'height' : '496'}, 200, function(){filtersHeight = 496});

        }
        else if(filtersHeight == 496) {

            $("#filtersBox").animate({'height' : '0'}, 200, function(){filtersHeight = 0});

        }

    });

/*pavilion profile*/

 $("#showMap").css({'height' : '0'});

    var filtersHeight2 = $("#showMap").height();


    $("#showMapBtn").click(function(){

        if(filtersHeight2 == 0) {

            $("#showMap").animate({'height' : '400'}, 200, function(){filtersHeight2 = 400});
            $("#showMapBtn .b-link__inner").text('Скрыть карту');
                           
        }
        else if(filtersHeight2 == 400) {

            $("#showMap").animate({'height' : '0'}, 200, function(){filtersHeight2 = 0});
            $("#showMapBtn .b-link__inner").text('Показать на карте');
           
        }

    });

 
});

