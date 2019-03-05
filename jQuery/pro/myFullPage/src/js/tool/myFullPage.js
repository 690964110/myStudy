$.fn.extend({
    myFullPage: function (config) {
        //config.colorsArray
        //兼容能力，性能
        //1：初始化变量
        var colorsArray = config.colorsArray;
        var $W = $(this);
        var $S = $W.find('.section');
        var commonStyle = {
            width: '100%',
            height: '100%'
        }
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        //索引，初次加载时0代表第一屏
        var curIndex = 0;
        var lock = true;
        //2：初始化样式
        $('html')
            .add('body')
            .css({
                position: 'relative',
                overflow: 'hidden',
                margin: 0
            })
            .add($W)
            .add($S)
            .css(commonStyle);
        $W.css({ position: 'absolute', left: 0, top: 0 })
            .find('.section')
            .each(function (index, ele) {
                console.log(index);
                $(ele).css({
                    backgroundColor: colorsArray[index],
                    position: 'relative'
                }).find('.slide')
                    .css({ float: 'left', width: clientWidth, height: clientHeight })
                    .wrapAll('<div class="sliderWrapper"></div>')
            });

        $S.find('.sliderWrapper').each(function (index, ele) {
            $(ele).css({ width: $(ele).find('.slide').size() * clientWidth, height: clientHeight });
        })

        //js控制移动
        //active，给第一个section
        //innerActive,没每一个slideWrapper下的第一个slide
        //类名初始化
        $S.eq(0)
            .addClass('active')
                .end().find('.sliderWrapper')
                    .css({ position: 'absolute',top: 0, left: 0 })
                        .each(function (index, ele) {
                            $(ele).find('.slide').eq(0).addClass('innerActive');
                        })

        $(document).on('keydown', function (e) {
            var w = e.which;
            //e.which 监测你按下是是哪个键的ascll
            //left 37 top 38 right 39 bottom 40
            if (w == 38 || w == 40) {
                if (lock) {
                    lock = false;
                    var newTop = $W.offset().top;
                    var direction;
                    if (w == 38 && curIndex != 0) {
                        //向上移动
                        direction = 'top';
                        config.onLeave(curIndex,direction);
                        curIndex--;
                        newTop += clientHeight;
                       
                    } else if (w == 40 && curIndex != $S.size() - 1) {
                        //向下移动
                        direction = 'bottom';
                        config.onLeave(curIndex,direction);
                        curIndex++;
                        newTop -= clientHeight;
                        
                    }
                    $W.animate({
                        top: newTop
                    }, 500, 'swing', function () {
                        lock = true;
                        $S.eq(curIndex).addClass('active');
                        if (direction == 'top') {
                            $S.eq(curIndex + 1).removeClass('active');
                        } else {
                            $S.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex, direction);
                    })
                }
                
            }

            if (w == 37 || w == 39) {
                if (lock) {
                    lock = false;
                    $SW = $('.active').find('.sliderWrapper');
                    var curShowDom = $SW.find('.innerActive');
                    var newLeft = $SW.offset().left;
                    var direction = null;
                    //dom.index(),求该dom在兄弟节点中的索引
                    if (w == 37 && curShowDom.index() != 0 ) {
                        newLeft += clientWidth;
                        direction = 'left';
                    } else if (w == 39  && curShowDom.index() != $SW.find('.slide').size() - 1) {
                        newLeft -= clientWidth;
                        direction = 'right';
                    }
                    $SW.animate({
                        left: newLeft
                    },300, 'swing',function(){
                        lock = true;
                        direction != null ? curShowDom.removeClass('innerActive'): '';
                        if(direction == 'left'){
                            curShowDom.prev().addClass('innerActive');
                        }else if(direction =='right'){
                            curShowDom.next().addClass('innerActive');
                        }
                        
                    })
                }

            }
        })

    }
});