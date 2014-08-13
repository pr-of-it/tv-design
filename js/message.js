$(function() {
    var $tooltip;
    var delay = 500;
    var timer;
    var $tooltipSource = $('.friends-tooltip');

    function __getTooltipContent($link) {
        var data = $link.closest('li').data();

        $tooltip = $tooltipSource.clone();
        $avatar = $link.find('.message-box__friend-photo img').clone();
        $avatar.attr({width: 60, height: 60});

        $tooltip.find('.friends-tooltip__photo').html($avatar);
        $tooltip.find('.friends-tooltip__status')[data.isOnline ? 'show' : 'hide']();
        $tooltip.find('.select-friend').text(data.name);

        // show or hide lists
        $.each(['specialities', 'cities'], function(key, value) {
            var $el = $tooltip.find('.'+value);
            var $icon = $el.prev('.ico');

            $icon.removeClass('hide');

            if (data[value]) {
                $el.text(data[value])
            } else {
                $icon.addClass('hide');
            }
        });

        $tooltip.data(data);

        return $tooltip;
    }

    function __showTooltip($link) {
        var offset = $link.offset();

        $tooltip.css({
            top: offset.top,
            left: offset.left + $link.width()
        });

        $('body').append($tooltip);

        $tooltip.on('mouseleave', __hideTooltip);

        $tooltip.show();
    }

    function __hideTooltip(event) {
        var $target = $(event.toElement || event.relatedTarget);

        if ($target.is('.friends-tooltip')) return;

        if (timer) clearTimeout(timer);
        if ($tooltip) $tooltip.remove();
    }

    function __selectUser(id, name) {
        var $ac = $('#receiverName');

        $('.message-box__current').removeClass('message-box__current');

        $("#Message_to_user_id").val(id);
        $('#receiverName').val(name);

        if (id) {
            $('.message-box__friends-list li').each(function() {
                if (id == $(this).data('id')) $(this).addClass('message-box__current');
            });

            __loadMessages(id);
        } else {
            $('.message-box__correspondence').html('');
        }
    }

    function __loadMessages(id) {
        var $el = $('.message-box__correspondence');

        $el.html('Загружается список сообщений...');

        $.get('/user/message/create/userId/'+id)
        .success(function(data) {
            $el.html(data);
            $el.scrollTop($el.prop('scrollHeight'));
            //Message Box Left Height == Message Box Right Height
            var jsMesBoxHeight = $("#jsMesBoxRight").height();
            $(".message-box__friends").css("height", jsMesBoxHeight-33);
            $(".message-box__friends").mCustomScrollbar("update");
        });
    }

    // открытие панели друзей
    $('#jsMesBoxOpener').click(function(e){
        $('#jsMesBox').toggleClass('message-box_active');
        e.preventDefault();
    });

    // обработка попапа на списке друзей
    $('.message-box__friend')
        .on('mouseenter', function() {
            if (timer) clearTimeout(timer);

            var $link = $(this);

            $tooltip = __getTooltipContent($link);

            timer = setTimeout(function() {
                __showTooltip($link);
            }, delay)
        })
        .on('mouseleave', __hideTooltip);

    // отправка формы
    $('.form__btm .submit').on('click', function(e) {
        e.preventDefault();
        $(this).closest('form').submit();
    });

    $(document)
    // выбор друга по клику на тултипе
    .on('click', '.friends-tooltip', function(e) {
        e.preventDefault();

        var $tooltip = $(this).closest('.friends-tooltip');
        var id = $tooltip.data('id');

        if ($(e.target).is('.select-friend')) {
            location.href = '/user/'+ id;
            return;
        }

        __selectUser(id, $tooltip.data('name'))
    })
    // выбор друга из списка
    .on('click', '.message-box__friend', function(e) {
        e.preventDefault();

        var $item = $(this).closest('li');
        var id = $item.data('id');

        __selectUser(id, $item.data('name'))
    })
    // клик по сообщению для перехода к беседе
    .on('click', '.mes-list__item', function(e) {
        location.href = '/user/message/create/userId/'+$(this).data('userId');
    });

    // поиск пользователя
    $('.jsSearch').autocomplete({
        source: '/user/profile/autocomplete?limit=15',
        delay: 200,
        minLength: 0,
        showAnim: 'fold',
        messages: {
            noResults: '',
            results: function() {}
        },
        select: function(e, ui) {
            var id = ui.item.id;

            __selectUser(id);
        },
        change: function(e, ui) {
            if (! ui.item) __selectUser();
        },
        open: function(e) {
            var widget = $(e.target).data('uiAutocomplete');

            widget.menu.element.children('li').each(function() {
                var $item = $(this);
                var src = $item.data('uiAutocompleteItem').avatar;
                var $avatar = $('<img />').attr({
                    src: '/images/avatar/100x100/'+ src,
                    width: 30,
                    height: 30
                });

                $item.children('a').prepend($avatar);
            });
        }
    });

})