tvkinoradio_v1.26.zip

1) �� ������ js ��������� ��������� ������ � main.js � ����� ��� datepicker
http://prntscr.com/2bju5w
��� ��������� � ���������� ���� ������ ��� ������ ��� 

datesBusy: ['2013-12-15', '2013-11-14'],
datesFree: ['2013-12-6', '2013-12-13', '2013-12-19']

����� �������� �������� � ����� �����


2) ��� wysiwyg ������� ����� - ".b-wysiwyg" � ���������� �������
���� ��� �������� ������� ����������� �� wysiwyg ������� �������� � ������� b-wysiwyg, �� ������, ��������� � ��������� ����� �� ������� (� ����������� ���������). 



23.01.2014
tvkinoradio_v1.27.zip
����������� � ����� main.js �� ������ 405 �� ������ 425.

listItems.not('.filter__list_fst').click(function(e){
	var $this = $(this);
	if ($this.hasClass('filter__list_dsbl')){
	return false;
}

	var tlist = $this.text();
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

28.01.2014
tvkinoradio_v1.28.zip
���� ��������� � ���� main.js � ������� RangeSlider - � ��������� ���� ��������� �� ��� �� ������ 1.18
���������� ��� ���������������. ����� ����� ��� ����������� ������. �� ��� ����� ����� ������� ���� �� �����

����� ���� ������ � css - ���� ���������� ����������� �������� �� �������� �������� ������ � � ��������


06.02.2014
tvkinoradio_v1.29.zip
1) � ������ ���������� ������ �� ������. ��� ��������� ��������� ������ � css � html.
�� ��� ��� ���� ��������� ����� main.js � ������ ����� - ������� ���� ��������: �� �������� paviliony_rasp.html �� ������������ ���������� http://prntscr.com/2pyyzv (�������� � ��� ������ ��� ���� � ����� ��� �� ���� ��� �����������). � ������ tvkinoradio_v1.26.zip - ���������� �����������. ����� � ���� ������ ���� ���� main-old.js � ������� ���� ����� ���� ������������.

2) ������� �������� ��� ��� ���������� breadcrumbs �� ��������� company �������� �������� ���� ��������� - ����� � ������ ����� <i class="ico ico_arrow02"></i> http://prntscr.com/2pyzp8 . ������ ��� ��������� �������� ����������� �� li - http://prntscr.com/2pyzxj

3) ���� ��������� � ���� � ������������ - http://prntscr.com/2pz0tz . ��� ��� �� ��������� company ���������� ������� � ����, ���� ������� �������� ���� ���� ������� ��������  � �������� ��������� ��� 140�100 ��� �������������� . ��� ����� ����� � �������� ������ ��������� �������� � ����� - visual__list-frame

���������� ��� ������ � ����� - ����� ��������� �������� � ������ btn_play � ���� � ������� visual__list-frame http://prntscr.com/2pz2u8. ��� ��� �� ��������� company � ������ ������ ��������� ������ � �����


4) �������� ������� ������� ��������� � � ������ � ������ � ������� gallery (�������� "�� ������� ��������", "������������", "������", "��������") . ������ ���� �������� ��������������, ���� ����� ������� ��������. ����� � ������ ������� ��������� �������� � ���� � ������� "gallery__img" http://prntscr.com/2pz2cc
���� ����� ����� � �� ������ - ��� ��� ������ � �������� ������ ����� - http://tvkinoradio.ru/ - ��� �������� ����������� ����������� ��������.


�.�. 5) � ����� �� ��������� ������� ���� ������ jcf.scrollable.js - ������� ������������� ������� ������ � ���������� ��������. ��� ���������� ���������� �� ��������� ��� ������������ ��������� ������ jcf.select.js  http://prntscr.com/2pz3t0 . ����� � ������� ����� ��� ����� ��� (����� � ��� ��� ���������) - http://prntscr.com/2pz3xv ��� ������� ������� ����������� ��� �� �������� - job-1.html. 
��� ����� ����������� ���������� �������� ������� ������� ������


11.02.2014
tvkinoradio_v1.30.zip
� main.js ���� ��������� ���������
1) ���� � ������������� ���������� ������ ��� ������ ������� ��� �� �� ����� 
http://prntscr.com/2rj106
max_selected_options: 3

� �����: $(".chosen-select").chosen({max_selected_options: 3});

2) ������� ������� ������� ���������� ���� � ������� �� ��������� company01.html � company02.html (������ "�������� ���������")	
http://prntscr.com/2tn8ub

this.initViewMore = function (){
		if ($('.jsMoreText').length){
			var $text = $('.jsMoreText');

				$text.each(function(){
					var $this = $(this),
						$textBox = $this.find('.jsMoreTextBox'),
						$opener = $this.find('.jsMoreTextOpener'),
						$textBoxHeight = $textBox.height();

						if($textBox.height()>100) {
							$textBox.css({
								'height': '100px',
								'overflow': 'hidden'
							});
							$opener.click(function(e){
								$textBox.animate({
									'height': $textBoxHeight,
									'overflow': 'auto'
								}, 300);
								$(this).fadeOut();
								e.preventDefault();
							});
						} else {
							$textBox.css({
								'height': 'auto',
								'overflow': 'auto'
							});
							$opener.hide();
						}
				});
		}
	};

3) ������� ������� initBtnChangeText ��� ������ "�����������/����������" �� ��������� company01.html � company02.html
http://prntscr.com/2rrllj

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

4) ����� ��������� RangeSlider. ���� ��� ���������� �� �����. �������� ���� ������� ����� ��� ���������.
http://prntscr.com/2rj227

5) ��������� ����� ������� �������� ������� - http://prntscr.com/2ui2ce 

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
			e.preventDefault();
		});
		$('.jsClosePopup').click(function(e){
			$('.jsOpenPopup').hide();
			e.preventDefault();
		});
	};


6) ������� ������� ��� ���������� ������� (���� ���������� ������� ���������� ������� �������� ���� �������� ������ 600 ��� � ����� ������ 720���)
http://prntscr.com/2uiax3

this.initPopupImage = function (){
		if ($('.popup__img').length){
			var $imgBox = $('.popup__img'),
				$image = $('.popup__img > img');
				if ($image.width() > 600) {
					$image.css({
						width:'600px',
						height:'auto'
					});
				} else {
					$image.css({
						width:'auto',
						height:'auto',
						display:'inline'
					});
					$imgBox.css({
						'padding-top':'20px',
						'padding-bottom':'20px',
						'text-align':'center'
					})
				}
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
		}
	};


05.03.2014
tvkinoradio_v1.31.zip
1) � ����� main.js ����� ������� ������ http://prntscr.com/2y1hgp 
$('.accordion__caption').first().addClass('active-link');




18.03.2014
tvkinoradio_v1.33.zip

1) ������ ������������� jcf.select.js - ������ ���� ���������� http://ivaynberg.github.io/select2/
��� ��� ������������� ����� � <head> ��������:
- <script src="js/select2.js"></script>
- <script src="js/jquery.mCustomScrollbar.js"></script> (����� ���������� ������� ������ ���������� http://manos.malihu.gr/jquery-custom-content-scroller/)

http://prntscr.com/31xsxg

� main.js ����� ������� ������������� ��� ���� http://prntscr.com/31xtd1
������� � 589 ������ - this.initSelect2 = function (){....


27.03.2014
tvkinoradio_v1.35.zip
1) ������� ������������� ���������� ������� � ������ ����������� ������ - http://prntscr.com/34khrs

this.initScroll = function (){
        if ($('.check-events').length) {
            $(".check-events").mCustomScrollbar();
        }
    }
�������� � ������ ������� - events_invite_pop-up.html


04.04.2014 
tvkinoradio_v1.35.zip (fix paviliony_rasp.html)
1) � main.js ������� ����������� ��� ������� ��������� - http://prntscr.com/36w2jc

$('#date2').DatePicker({
			flat: true,
			date: [],
			datesBusy: ['2014-04-15', '2014-04-21'],
			datesFree: ['2014-04-1', '2014-04-11', '2014-04-16'],
			format: 'Y-m-d',
			calendars: 1,
			mode: 'multiple',
			onRender: function(date) {
				date = date.setHours(0,0,0,0);
				var dateClass = false;
				for (var i = 0; i < this.datesBusy.length; i++){
					if (date == new Date(this.datesBusy[i]).setHours(0,0,0,0)){
						dateClass = 'is-busy';
					}
				}
				if (!dateClass){
					for (i = 0; i < this.datesFree.length; i++){
						if (date == new Date(this.datesFree[i]).setHours(0,0,0,0)){
							dateClass = 'is-free';
						}
					}
				}
				return {
					className: dateClass
				}
			},
			onChange: function(){
				$('.datepicker-wrap .datepicker td').removeClass('datepickerSelected');
			},
			starts: 0
		});

2) ����� ���� ��������� ������ css ��� ������� ��������� - datepicker.css ��� ����� ��������� ��������

07.04.2014
tvkinoradio_v1.35.zip
1) ������� ����������� ��������� ��� ���������� �� ����� main.js �� ���� �������� paviliony_rasp.html


23.04.2014 
tvkinoradio_v1.36.zip (update calendar)
1) �������� ������� ��� ��������� �� ��������� paviliony_prosmotr.html, paviliony_rasp.html, paviliony_yslygi.html 
���� ��� ���� ��� � �������� �� ����� ��������. ������ ������ ����:
�������� "starts" ��������� � "0" �� "1" - ���� ������ ���������� ��������� � ������������ � �� � �����������
��� ��������� ������ ������� ������ � style.css � datepicker.css



25.04.2014 
tvkinoradio_v1.37.zip
�������� user_
� main.js �������� ������������� ��������� ������� ��� ������� user

this.initUserAutocomplete = function (){
		if ($('.jsUserAutocomplete').length) {

		}
	};

	this.initCommentOpen = function (){
		if ($('.jsCommentOpen').length) {
			$('.jsCommentOpen').click(function(){
				$(this).parent().parent('.comments__item').removeClass('comments__item_empty');
			});
		}
	};

	this.initMesBoxSwitcher = function (){
		if ($('#jsMesBoxOpener').length) {
			$('#jsMesBoxOpener').click(function(){
				$('#jsMesBox').toggleClass('message-box_active')
			});
		}
	};


this.initUserAutocomplete - ��� ����� �����������. (��� ��� �������� user_31.html)

��������� �� ������������ main.js



05.05.2014 
tvkinoradio_v1.38.zip
1)�������� user_ (���������) 
����� ���� �� ������ 546

��� ������������������ ������ ������ �� ������������� ������� ������������
http://prntscr.com/3g8rj1. 
	
	this.initUserAutocomplete = function (){
		if ($('.jsSearch').length) {
			var data = [
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '������ ������������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: '���� ������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '������������������� ���������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: '������� ������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '������� ��������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: '������ ���������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '�������� ����������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: '�������� ��������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '���� �������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar03.png', text: '����� ������'},
				{imgUrl: 'http://done.z-index.com.ua/tvkinoradio/img/avatar02.png', text: '������������������� �������������'}
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
	

����� ��� ��� ������ ����� �� �������� ���������� ���� - underscore-min.js � �� �������� ������� ������ ��� ������ ������ 
	<script id="autocompleteTmpl" type="js/template">
		<ul>
			<% var i = 0;
			_.each(filtered, function(item)
			{ %>
			<li class="jsItem <% if (i == 0) { %> <%=activeClass%> <% } %>">
				<a href="#">
					<img width='30' height='30' src='<%=item.imgUrl%>' />
					<em><%=item.text%></em>
				</a>
			</li>
			<% i++;
			}) %>
		</ul>
	</script>

2) ����� ����� � ����� main.js
	
	this.initCommentOpen = function (){
		if ($('.jsCommentOpen').length) {
			$('.jsCommentOpen').click(function(){
				$(this).parent().parent('.comments__item').removeClass('comments__item_empty');
				$(this).find('.ta').attr('placeholder','����� �����������')
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



3)�������� groups__ (���������)


29.05.2014
tvkinoradio_v1.41.zip
1) http://r.itcreativoff.com/issues/6775
�������� ������ ������� ����� ������������� ������� �� �������� ���� ����� ������ ������ ����. (��� ������� ��� ������� c ���� � �����(company12-photo_reg_redakt.html, company12-photo_unreg.html, company12-photo-reg.html) ��� ������������ "popup__data_image" ).

jquery.fixPopup.js - http://prntscr.com/3noucn
������������� � ����� main.js - 

this.initFixedPopup = function (){
		if ($('.popup__data_image').length) {
			$(".popup__data_image").scrollPopup({scrollOffset : 20});
		}
	};
http://prntscr.com/3nouq3

2) http://r.itcreativoff.com/issues/6630 (���������: �� ����� �������� ��������� ����, ��� ���������� ��������.)
���� ��� ���� ������������� ������� ������� ��� �������������� �������� - jquery.jcarousel.pack.js
� ������ 3.0.1 �� ����� ������������ ������� ��� ���������.
�� ��������� � �������������� �������� �������� ����� ������� ������ ������ � http://prntscr.com/3novqs 
� ���������� ����� - 2 ������� 
<script type="text/javascript" src="js/jquery.jcarousel.js"></script>
<script type="text/javascript" src="js/jcarousel.connected-carousels.js"></script>

http://prntscr.com/3now0t

����� ����� ���������� ��� ��� �������������� �������� 
<link rel="stylesheet" type="text/css" href="css/jcarousel.connected-carousels.css" />
http://prntscr.com/3nowb1

03.06.2014
tvkinoradio_v1.42.zip 
1) http://r.itcreativoff.com/issues/6775
������ ������ � ������ - jquery.fixPopup.js (����� ��� ��������� ��������)
����� �������� ������������� - http://prntscr.com/3pb3ou
this.initFixedPopup = function (){
		if ($('.jsPopupChangePosition').length) {
			$('.jsPopupChangePosition').scrollPopup({scrollOffset : 20});
		}
	};
���� ������ ������ ��������� ��� ���� ������� � ������� ���� ����� "jsPopupChangePosition" �� ����� "popup__data" ��� ��� ��� ������ ����� ����� ��������� � �� ��������� � ����� company17-vid_reg.html company17-vid_reg_redackt.html company17-vid_unreg.html

����� ������� ����� ������� initFixedPopup() ��� �������� ������� - http://prntscr.com/3pb4to (�� �������� company12-photo_reg_redakt.html ����� ���������� ������ ������� ��� �������. �������� ����� �� ����� �� ������ 6 ����)

2) http://r.itcreativoff.com/issues/6850
�������� ������ initResizeImage() ��� ������������� ����������. ���� ���� ������ �� ������ ��� ������ ��� ���� ��� ���� - ����� ���� ����� ������������� � ����� ������� ��� ������������
http://prntscr.com/3pbaou
http://prntscr.com/3pbavf
http://prntscr.com/3pbb2j

��� ���� ���� ������ �������� �� ����� 
"visual__list-item" ������ ���� ����� - "resize-pic"
� �� ����� 
"visual__list-frame" ������ ���� ����� "resize-pic__item"
http://prntscr.com/3pbbsi
��� ������� ����� ���������� �� �������� catalog_proizvod.html




