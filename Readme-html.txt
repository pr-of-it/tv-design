11.02.2014
tvkinoradio_v1.30.zip

1) catalog_list.html
Поменялась структура списка категорий - http://prntscr.com/2rr2ac
Теперь это один список ul с вложеными внутрь списками ul

2) Блок "Вы недавно смотрели"
изменилась структура заголовка - http://prntscr.com/2rr2pi
теперь это один спан с классом "gallery__text" и em внутри
Также это качается блока на главной странице с пользователями, групами, компаниями
http://prntscr.com/2rry6t

3) catalog_prosmotr_itema.html
изменилась структура отзывов во вкладке "Отзывы" - http://prntscr.com/2rr30m
Теперь это блок идентичный блоку с отзывами на странице news-4.html

4) Везде где используется блок с павильонами - я так понял будет использоваться маленькое изображение 
Для этого нужно добавить к блоке "events" класс events_pavilion
http://prntscr.com/2rr8rm

5) Для всех блоков с выводом количества элементов "Всего ... товаров", "Всего ... павильонов" "Всего ... вакансий"
Сделал одинаковую структуру подобную как на странице catalog_proizvod_preview.html
http://prntscr.com/2rr9bi
это блок "result" - в котором ненужное убирается



26.02.2014
tvkinoradio_v1.30.zip

1) на главной странице в блоке с Пользователями, Группами и Компаниями будут использоваться фото размером 100х100
Пришлось немного переделать этот блок в отличие от блока "Вы недавно смотрели" (так как там 116х87)

для этого нужно на данной странице (main.html) добавить к блоку с "gallery" класс с модификатором "gallery_avatar"
http://prntscr.com/2vyiii

а в цсс добавить следующие свойства
.gallery_avatar .gallery__img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.gallery_avatar .gallery__img img {
  width: 100px;
  height: auto;
  -webkit-border-radius: 5px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 5px;
  -moz-background-clip: padding;
  border-radius: 5px;
  background-clip: padding-box;
}

http://prntscr.com/2vyio2

05.03.2014
tvkinoradio_v1.31.zip
1) Добавил страницу catalog_fag.html - с табом FAQ

2) Также большая просьба внести правку на страницу company_create.html для формы "form_create" на данной странице добавить класс с модификатором "form_create_company" - http://prntscr.com/2y1hyn . Оказалось что form_create используется и на странице events-5.html - и изза этого там инпуты валились. если добавить "form_create_company" и взять новый css - будет все норм



18.03.2014
tvkinoradio_v1.33.zip
1) Для тикета #5894 (http://r.itcreativoff.com/issues/5894#change-47217) 
добавили новые страницы:
- catalog_prosmotr_itema_tech_params-1(item)_v2.html
- catalog_prosmotr_itema_tech_params-2(item)_v2.html
- catalog_prosmotr_itema_tech_params-3(item)_2.html

2) Для тикета #6136 (http://r.itcreativoff.com/issues/6136#change-47375)
добавили новые страницы 
- company_20.html
- company_21_tovary_step1.html
- company_21_tovary_step2.html
- company_21_tovary_step3.html

07.04.2014
tvkinoradio_v1.35
1) заменил иконку шетеренки в хедере

16.04.2014 (фикс)
tvkinoradio_v1.35
1) Внес правки в страницы paviliony_prosmotr.html, paviliony_rasp.html, paviliony_yslygi.html - добавил чтоб в slideshow были ссылки.
2) В цсс добавили чтоб картинка была по ширине и высоте рамки в slideshow

.slideshow-main li a img {
  display: block;
  max-width: 100%;
  height: auto;
  -webkit-border-radius: 5px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 5px;
  -moz-background-clip: padding;
  border-radius: 5px;
  background-clip: padding-box;
}
