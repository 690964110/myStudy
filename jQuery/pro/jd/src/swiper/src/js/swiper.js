(function () {
    //面向对象编程的方式
    function Swiper(options) {
        this.wrap = options.wrap;
        this.imgList = options.imgList;
        this.imgLen = this.imgList.length;
        this.showBtn = options.showBtn;
        this.imgWidth = options.imgWidth || $(this.wrap).width();
        this.imgHeight = options.imgHeight || '100%';
        this.nowIndex = 0;
        this.flag = false;
        //创建轮播图结构
        this.createDom();
        this.initStyle();
        this.bindEvent();
        this.slideAuto();
    }
    Swiper.prototype.createDom = function () {
        var swiperContent = $('<div class="swiper"></div>');
        var imgList = $('<ul class = "swiper-list">')
        var dotDiv = $('<div class="dot"></div>')
        for (var i = 0; i < this.imgLen; i++) {
            $('<li><img src="' + this.imgList[i] + '" /></li>')
                .appendTo(imgList);
            $('<span></span').appendTo(dotDiv);
        }
        swiperContent.append(imgList)
            .append('<div class="left-btn"> &lt;</div><div class="right-btn">&gt;</div>')
            .append(dotDiv)
            .appendTo($(this.wrap));
    }

    Swiper.prototype.initStyle = function () {
        $('.swiper').css({
            width: this.imgWidth,
            height: this.imgHeight,
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center'
        })
        $('.swiper > .swiper-list').css({
            padding: 0,
            margin: 0,
            width: '100%',
            height: '100%',
            position: 'relative'
        });
        $('.swiper > .swiper-list > li').css({
            listStyle: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'none'
        }).eq(0).css({
            display:'inline-block'
        }).end().find('img').css({
            width: '100%',
            height: '100%'
        });
        $('.left-btn,.right-btn').css({
            width: 24,
            height: 40,
            lineHeight: '40px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            fontSize: '20px',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            marginTop: -20,
            cursor: 'pointer'
        });
        $('.left-btn').css({
            left: 5
        });
        $('.right-btn').css({
            right: 5
        });
        $('.dot').css({
            position: "absolute",
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)'
        })
        $('.dot span').css({
            display: 'inline-block',
            width: 8,
            height: 8,
            backgroundColor: '#fff',
            borderRadius: '50%',
            marginRight: 10,
            cursor: 'pointer'
        }).eq(this.nowIndex).css({
            backgroundColor: 'red'
        })
    }

    Swiper.prototype.bindEvent = function () {
        var self = this;
        $('.left-btn').on('click', function () {
            self.move('prev');
        });
        $('.right-btn').on('click', function () {
            self.move('next');
        });
        $('.dot span').on('click', function () {
            // console.log($(this).index());
            var index = $(this).index();
            self.move(index);
        });
    }

    Swiper.prototype.move = function (direction) {
        if(this.flag){
            return false;
        }
        this.flag = true;
        switch (direction) {
            case "prev":
                if (this.nowIndex == 0) {
                    this.nowIndex = this.imgLen - 1;
                } else {
                    this.nowIndex--;
                }
                break;
            case "next":
                if (this.nowIndex == this.imgLen - 1) {
                    this.nowIndex = 0;
                } else {
                    this.nowIndex++;
                }
                break;
            default:
                this.nowIndex = direction;
                break;
        }
        var self =this;
        $('.swiper-list li').fadeOut().eq(this.nowIndex).fadeIn(function(){
            self.flag = false;
            self.slideAuto();
        });
        $('.dot span').css({
            backgroundColor: '#fff'
        }).eq(this.nowIndex).css({
            backgroundColor: 'red',
        })
    }
    Swiper.prototype.slideAuto = function(){
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function(){
            self.move('next');
        }, 2000);
    }

    $.fn.extend({
        swiper: function (options) {
            //做了一个兼容
            options.wrap = this || $('body');
            var swiper = new Swiper(options);
            return this;
        }
    })
}())