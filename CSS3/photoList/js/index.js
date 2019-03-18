var timer = setTimeout(function(){
    $('.wrapper').removeClass('init');
},200);
$('.item').on('click', function(){
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active');
})
$('.close').on('click', function(e){
    //阻止事件冒泡，不然这次点击又会触发item的点击事件
    e.stopPropagation();
    $('.active').removeClass('active');
    $('.wrapper').removeClass('wrapper-active');
    // 或者 return false；
})