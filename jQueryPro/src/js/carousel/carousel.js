//立即执行函数防止变量污染
(function () {
    function Carousel(options) {
        this.imgList = options.imgList;
        this.imgLen = options.imgList.length;
        this.wrap = options.wrap;
        this.imgWidth = options.imgWidth || $(this.wrap).width();
        this.imgHeight = options.imgHeight || $(this.wrap).height();
        if(options.showBtn != undefined){
            this.showBtn = options.showBtn
        }else this.showBtn = true;
        if(options.autoChange != undefined){
            this.autoChange = options.autoChange 
        }else this.autoChange = true;
        if(options.center != undefined){
            this.center = options.center;
        }else this.center = false;

        this.animation = options.animation || 1;
        this.moveFlag = true;
        this.curIndex = 0;
        this.createDom();
        this.initStyle();
        this.bindEvent();
        this.autoMove();
        this.config();
    }

    //创建Dom结构，建立在原型上
    Carousel.prototype.createDom = function () {
        var carousel = $('<div class="carousel"></div>');
        var oUl = $('<ul class="carousel-list"></ul>');
        var dotDiv = $('<div class="dot"></div>');
        for (var i = 0; i < this.imgLen; i++) {
            $('<li><img src="' + this.imgList[i] + '"></img></li>')
                .appendTo(oUl);
            $('<span></span>').appendTo(dotDiv);
        }
        carousel.append(oUl)
            .append($('<div class="left-btn"><</btn>'))
            .append($('<div class="right-btn">></btn>'))
            .append(dotDiv);
        carousel.appendTo(this.wrap);
    }

    //初始化样式
    Carousel.prototype.initStyle = function () {
       
        $('.carousel').css({
            width: this.imgWidth,
            height: this.imgHeight,
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center'
        });
        $('.carousel-list').css({
                padding: '0px',
                margin: '0px',
                width: '100%',
                height: '100%',
                position: 'relative'
            }).find('li')
            .each(function (index, ele) {
                $(ele).css({
                    position: 'absolute',
                    listStyle: 'none',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    display: 'none'
                }).find('img')
                    .css({
                        width: '100%',
                        height: '100%'
                    })
            });
            $('.carousel-list li').eq(0).css({
                display: 'inline-block'
            })
        $('.left-btn, .right-btn').css({
            width: '24px',
            height: '40px',
            lineHeight: '40px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            fontSize: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            marginTop: -20
        });
        $('.left-btn').css({
            left: '5px'
        })
        $('.right-btn').css({
            right: '5px'
        });
        var self = this;
        $('.dot').css({
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)'
            }).find('span')
            .each(function (index, ele) {
                $(ele).css({
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '50%',
                    marginRight: '10px',
                    cursor: 'pointer'
                })
                if (self.curIndex == index) {
                    $(ele).css({
                        backgroundColor: 'rgb(25, 28, 28)'
                    })
                }

            })

    }

    //绑定事件
    Carousel.prototype.bindEvent = function () {
        var self = this;
        $('.left-btn').on('click', function () {
            self.move('prev');
        });
        $('.right-btn').on('click', function () {
            self.move('next');
        })
        var self = this;
        $('.dot').on('mouseover', 'span', function (e) {
            var index = $(this).index();
            if(index != self.curIndex) {
                self.move(index);
            }else{
                clearTimeout(this.timer);
            }
        })
    }

    //移动
    Carousel.prototype.move = function (direction) {
        if(this.moveFlag){
            this.moveFlag = false;
            this.wrap.find('ul li').eq(this.curIndex).fadeOut();
            this.wrap.find('.dot span').eq(this.curIndex).css({
                backgroundColor:'#fff'
            });
            switch (direction) {
                case "prev":
                    if (this.curIndex == 0) {
                        this.curIndex = this.imgLen - 1;
                    } else {
                        this.curIndex--;
                    }
                    break;
                case "next":
                    if (this.curIndex == this.imgLen - 1) {
                        this.curIndex = 0;
                    } else {
                        this.curIndex++;
                    }
                    break;
                default:
                    this.curIndex = direction;
                    break;
            }
            this.wrap.find('.dot span').eq(this.curIndex).css({
                backgroundColor: 'rgb(0, 0, 0)'
            });
            var self = this;
            this.wrap.find('ul li').eq(this.curIndex).fadeIn(function(){
                self.moveFlag = true;
                self.autoMove();
            });
            
        }
    }

    //自动移动
    Carousel.prototype.autoMove = function(){
        var self = this;
        clearTimeout(self.timer);
        var self = this;
        self.timer = setTimeout(function(){
            self.autoChange == false? false : self.move('next');
        },1000);
    }

    //自定义参数设置
    Carousel.prototype.config = function(){
        if(!this.showBtn){
            $('.left-btn, .right-btn').css({
                display: 'none'
            })
        }
        this.center == false? false : this.wrap.css({
            position:'absolute',
            top: '50%',
            left: '50%',
            marginLeft: -this.imgWidth/2,
            marginTop: -this.imgHeight/2
        });

    }

    //使用扩展方法扩展jquery插件
    $.fn.extend({
        carousel: function (options) {
            options.wrap = this || $('body');
            var carousel = new Carousel(options);
            return this;
        }
    })
})()