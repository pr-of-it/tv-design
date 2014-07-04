tvkinoradio_v1.26.zip

1) из файлов js изменения вносились толкьо в main.js в блоке для datepicker
http://prntscr.com/2bju5w
Для календаря с распианием есть теперь два набора дат 

datesBusy: ['2013-12-15', '2013-11-14'],
datesFree: ['2013-12-6', '2013-12-13', '2013-12-19']

когда павильон свободен и когда занят


2) Для wysiwyg создали класс - ".b-wysiwyg" с дефолтными стилями
Если для контента который добавляется из wysiwyg сделать обвертку с классом b-wysiwyg, то списки, заголовки и параграфы будут по дефолту (с задананными отступами). 



23.01.2014
tvkinoradio_v1.27.zip
измененения в файле main.js Со строки 405 по строку 425.

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
Внес изменения в файл main.js в цункцию RangeSlider - в частности взял полностью ее код из версии 1.18
Предыдущий код закомментировал. Вдруг чтото Вам понадобится оттуда. Но его смело можно удалить чтоб не мешал

также внес правки в css - чтоб подправить отображение слайдера на странице создания резюме и в сайдбаре


06.02.2014
tvkinoradio_v1.29.zip
1) В файлах яваскрипта ничего не меняли. Все изменения вносились только в css и html.
Но так как меня попросили взять main.js с Вашего сайта - заметил одну проблему: на странице paviliony_rasp.html не отображается расписание http://prntscr.com/2pyyzv (наверное в той версии что взял с сайта еще не было это реализовано). в версии tvkinoradio_v1.26.zip - расписание реализовано. Также в этой версии есть файл main-old.js в котором этот кусок кода присутствует.

2) Обращаю внимание что для реализации breadcrumbs на страницах company пришлось изменить чуть структуру - убрал в каждой лишке <i class="ico ico_arrow02"></i> http://prntscr.com/2pyzp8 . Теперь эта стрелочка вешается бекграундом на li - http://prntscr.com/2pyzxj

3) Внес изменения в блок с фотографиями - http://prntscr.com/2pz0tz . Так как на страницах company добавились подписи к фото, плюс добавил свойства чтоб если вставят картинку  с меньшими размерами чем 140х100 она центрировалась . Для этого нужно в подобных блоках обвернуть картинку в класс - visual__list-frame

Аналогично для блоков с видео - нужно обвернуть картинку и кнопку btn_play в блок с классом visual__list-frame http://prntscr.com/2pz2u8. так как на страницах company в данных блоках появились тайтлы к видео


4) Подобным образом изменил структуру и в галере в блоках с классом gallery (слайдеры "Вы недавно смотрели", "Пользователи", "Группы", "Компании") . Сделал чтоб картинки центрировались, если будут меньших размеров. Нужно в данной галерее обвернуть картинки в блок с классом "gallery__img" http://prntscr.com/2pz2cc
Хотя здесь может и не стоило - так как глянул в нынешней версии сайта - http://tvkinoradio.ru/ - все картинки вставляются необходимых размеров.


п.с. 5) в папку со скриптами добавил один скрипт jcf.scrollable.js - который кастомизирует боковой скролл в выпадающих селектах. его достаточно подключить на страницах где используется кастомный селект jcf.select.js  http://prntscr.com/2pz3t0 . Тогда у скролла будет вот такой вид (стили в цсс уже прописаны) - http://prntscr.com/2pz3xv Для примера оставил подключение его на странице - job-1.html. 
Это вдруг понадобится застайлить нынешний широкий боковой скролл


11.02.2014
tvkinoradio_v1.30.zip
В main.js внес следующие изменения
1) чтоб в мультиселекте выбиралось толкьо три пункта добавил для не го опцию 
http://prntscr.com/2rj106
max_selected_options: 3

в итоге: $(".chosen-select").chosen({max_selected_options: 3});

2) Добавил функцию которая раскрывает блок с текстом на страницах company01.html и company02.html (ссылка "Показать полностью")	
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

3) Добавил функцию initBtnChangeText для кнопки "Подписаться/Отписаться" на страницах company01.html и company02.html
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

4) Снова переделал RangeSlider. Цена над ползунками не нужна. меняется цена которая снизу под слайдером.
http://prntscr.com/2rj227

5) переделал чуток функцию открытия попапов - http://prntscr.com/2ui2ce 

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


6) Добавил функции для реализации дизайна (чтоб выпонялись условия добавления верхних падингов если картинка меньше 600 пкс а видео меньше 720пкс)
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
1) В файле main.js можно удалить строку http://prntscr.com/2y1hgp 
$('.accordion__caption').first().addClass('active-link');




18.03.2014
tvkinoradio_v1.33.zip

1) Убрали использование jcf.select.js - вместо него подключили http://ivaynberg.github.io/select2/
Для его использования нужно в <head> добавить:
- <script src="js/select2.js"></script>
- <script src="js/jquery.mCustomScrollbar.js"></script> (чтобы застайлить боковой скролл подключили http://manos.malihu.gr/jquery-custom-content-scroller/)

http://prntscr.com/31xsxg

в main.js нужно сделать инициализацию для него http://prntscr.com/31xtd1
начиная с 589 строки - this.initSelect2 = function (){....


27.03.2014
tvkinoradio_v1.35.zip
1) Добвили инициализацию кастомного скролла в попапе приглашения друзей - http://prntscr.com/34khrs

this.initScroll = function (){
        if ($('.check-events').length) {
            $(".check-events").mCustomScrollbar();
        }
    }
Страница с данным попапом - events_invite_pop-up.html


04.04.2014 
tvkinoradio_v1.35.zip (fix paviliony_rasp.html)
1) В main.js добавил инициалицию для второго календаря - http://prntscr.com/36w2jc

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

2) Также внес небольшие правки css для данного календаря - datepicker.css Его можно полностью заменить

07.04.2014
tvkinoradio_v1.35.zip
1) Перенес подключение календаря для расписания из файла main.js на саму страницу paviliony_rasp.html


23.04.2014 
tvkinoradio_v1.36.zip (update calendar)
1) Обновили внешний вид календаря на страницах paviliony_prosmotr.html, paviliony_rasp.html, paviliony_yslygi.html 
Джес для него так и оставили на самой странице. правка толкьо одна:
параметр "starts" измегнили с "0" на "1" - чтоб неделя начиналась нормально с понедельника а не с воскресенья
Все остальные правки вносили толкьо в style.css и datepicker.css



25.04.2014 
tvkinoradio_v1.37.zip
Страницы user_
в main.js добавили инициализацию некоторых функций для страниц user

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


this.initUserAutocomplete - еще будет дописывться. (это для страницы user_31.html)

почистили от комментариев main.js



05.05.2014 
tvkinoradio_v1.38.zip
1)Страницы user_ (полностью) 
новый джес со строки 546

Для разворачивающегося списка посика по пользователям добавил иницализацию
http://prntscr.com/3g8rj1. 
	
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
	

Также для его работы нужно на странице подключить джес - underscore-min.js и на странице указать шаблон для списка поиска 
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

2) также новое в файле main.js
	
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



3)Страницы groups__ (полностью)


29.05.2014
tvkinoradio_v1.41.zip
1) http://r.itcreativoff.com/issues/6775
Добавили скрипт который будет останавливать скоролл на странице если попап больше высоты окна. (для страниц для страниц c фото и видео(company12-photo_reg_redakt.html, company12-photo_unreg.html, company12-photo-reg.html) где используется "popup__data_image" ).

jquery.fixPopup.js - http://prntscr.com/3noucn
инициализация в файле main.js - 

this.initFixedPopup = function (){
		if ($('.popup__data_image').length) {
			$(".popup__data_image").scrollPopup({scrollOffset : 20});
		}
	};
http://prntscr.com/3nouq3

2) http://r.itcreativoff.com/issues/6630 (Павильоны: Из ленты исчезают последние фото, при увеличении масштаба.)
Глюк был изза использования старого скрипта для горизонтальной карусели - jquery.jcarousel.pack.js
С версии 3.0.1 на сайте разработчика сказано что пофиксили.
на страницах с горизонтальной карселью пришлось нужно удалить старый скрипт и http://prntscr.com/3novqs 
и подключить новый - 2 файлика 
<script type="text/javascript" src="js/jquery.jcarousel.js"></script>
<script type="text/javascript" src="js/jcarousel.connected-carousels.js"></script>

http://prntscr.com/3now0t

Также нужно подключить цсс для горизонтальной карусели 
<link rel="stylesheet" type="text/css" href="css/jcarousel.connected-carousels.css" />
http://prntscr.com/3nowb1

03.06.2014
tvkinoradio_v1.42.zip 
1) http://r.itcreativoff.com/issues/6775
Внесли правки в скрипт - jquery.fixPopup.js (нужно его полностью заменить)
Также изменили инициализацию - http://prntscr.com/3pb3ou
this.initFixedPopup = function (){
		if ($('.jsPopupChangePosition').length) {
			$('.jsPopupChangePosition').scrollPopup({scrollOffset : 20});
		}
	};
чтоб данный скрипт вызывался для всех попапов у которых есть класс "jsPopupChangePosition" на блоке "popup__data" так как его скорее всего нужно применить и на страницах с видео company17-vid_reg.html company17-vid_reg_redackt.html company17-vid_unreg.html

Также добавил вызов функции initFixedPopup() при открытии поапапа - http://prntscr.com/3pb4to (на странице company12-photo_reg_redakt.html можно посмотреть работу скрипта для примера. кликнуть можно на любую из первых 6 фото)

2) http://r.itcreativoff.com/issues/6850
Добавили скрипт initResizeImage() для центрирования фотографий. Если фото меньше по высоте или ширине чем блок для фото - тогда фото будет ентрироваться в блоке занимая все пространство
http://prntscr.com/3pbaou
http://prntscr.com/3pbavf
http://prntscr.com/3pbb2j

для того чтоб скрипт сработал на блоке 
"visual__list-item" должен быть класс - "resize-pic"
а на блоке 
"visual__list-frame" должен быть класс "resize-pic__item"
http://prntscr.com/3pbbsi
для примера можно посмотреть на странице catalog_proizvod.html




