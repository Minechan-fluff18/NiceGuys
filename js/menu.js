$(document).ready(function() {
 
$("ul#topnav li").click(function() { //При наведении на элемент списка меню
        $(this).css({ 'background' : '#1376c9 url(topnav_active.gif) repeat-x'}); //Добавить цвет фона + изображение на элемент списка
        $(this).find("span").show(); //Показать подменю
} , function() { //при уходе с элемента списка...
        $(this).css({ 'background' : 'none'}); //Убрать изменения фона
        $(this).find("span").hide(); //Скрыть подменю
});
 
});