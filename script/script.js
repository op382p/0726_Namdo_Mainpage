$(function(){

$(".mainLi").mouseover(function(){
    $(this).children("ul.subMenu").stop().slideDown(600);
});

$(".mainLi").mouseout(function(){
    $(this).children("ul.subMenu").stop().fadeOut(200);
});

});