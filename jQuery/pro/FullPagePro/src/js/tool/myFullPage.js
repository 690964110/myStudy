$.fn.extend({
    myFullPage: function (config) {
        //初始化变量
        var colorsArray = config.colorsArray;
        var lock = true;
        var commonStyle = {
            width: '100%',
            height: '100%'
        };
        var clientHeight = $(window).outerHeight();
        var clientWidth = $(window).outerWidth();
        var curIndex = 0;
        var $W = $(this);
        var $S = $W.find('.section');

        $('html')
            .add('body')
            .css({
                position: 'relative',
                margin: 0,
                overflow: 'hidden'
            })
            .add($W)
            .add($S)
            .css(commonStyle);
        $W.css({
            position: 'absolute',
            top: 0,
            left: 0
        }).find('.section')
            .each(function (index, ele) {
                $(ele).css({
                    position: 'relative',
                    backgroundColor: colorsArray[index]
                }).find('.slide')
                    .css({ position: 'relative', float: 'left', width: clientWidth, height: clientHeight })
                    .wrapAll('<div class="sliderWrapper"> </div>')
            });

        $('.sliderWrapper').each(function (index, ele) {
            $(ele).css({
                position: 'absolute',
                width: $(ele).find('.slide').size() * clientWidth,
                height: clientHeight
            })
        });

        //给第一个section添加active
        //给第一个slide添加innerActive
        $S.eq(0).addClass('active')
            .end()
            .find('.sliderWrapper').each(function (index, ele) {
                $(ele).find('.slide').eq(0).addClass('innerActive');
            })

        //js控制方向
        //e.which 监测你按下是是哪个键的ascll
        //left 37 top 38 right 39 bottom 40
        $(document).on('keydown', function (e) {
            var w = e.which;
            if (w == 38 || w == 40) {
                if (lock) {
                    lock = false;
                    var direction;
                    var newTop = $W.offset().top;
                    if (w == 38 && curIndex != 0) {
                        direction = 'top';
                        config.afterLeave(curIndex, direction);
                        curIndex--;
                        newTop += clientHeight;
                    }
                    if (w == 40 && curIndex != $S.size() - 1) {
                        direction = 'bottom';
                        config.afterLeave(curIndex, direction);
                        curIndex++;
                        newTop -= clientHeight;
                    }
                    $W.animate({
                        top: newTop
                    }, 300, 'swing', function () {
                        lock = true;
                        config.onLoad(curIndex, direction);
                       $S.eq(curIndex).addClass('active');
                        if(direction == 'top'){
                            $S.eq(curIndex + 1).removeClass('active');
                        }else{
                            $S.eq(curIndex - 1).removeClass('active');
                        }
                    })
                }
            }
            if (w == 37 || w == 39) {
                if(lock){
                    lock = false;
                    var direction = null;
                    var $SW = $('.active').find('.sliderWrapper');
                    var curShowDown = $SW.find('.innerActive');
                    var newLeft = $SW.offset().left;
                    if(w == 37 && curShowDown.index() != 0){
                        direction = 'left';
                        // config.slideLeave(curShowDown.index(),direction);
                        newLeft += clientWidth;
                    }
                    if(w == 39 && curShowDown.index() != $SW.find('.slide').size() -1){
                        direction = 'right';
                        // config.slideLeave(curShowDown.index(),direction);
                        newLeft -= clientWidth;
                    }
                    $SW.animate({
                        left: newLeft
                    }, 300, 'swing',function(){
                        lock = true;
                        direction != null? curShowDown.removeClass('innerActive') : '';
                        if(direction == 'left'){
                            curShowDown.prev().addClass('innerActive');
                            // config.slideLoad(curShowDown.prev().index(),direction);
                        }else if( direction == 'right'){
                            curShowDown.next().addClass('innerActive');
                            // config.slideLoad(curShowDown.next().index(),direction);
                        }
                    })
                }
            }
        })
    }
})