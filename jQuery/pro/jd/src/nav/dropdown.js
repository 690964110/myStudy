<<<<<<< HEAD
(function(){


    function DropDown(options){
        this.wrap = options.wrap;
        this.title = options.title || '';
        this.menuList = options.menuList || [];
        this.width = options.width;
        this.directory = options.direction || 'y';
        this.createDom();
        this.initStyle();
        this.bindEvent();
    }

    DropDown.prototype.createDom = function(){
        $(this.wrap).append($('<a class="dropDown-btn" href="#">'+this.title+'</a>'));
        var dropDownDiv = $('<div class="my-dropDown"></div>');
        for(var i = 0; i < this.menuList.length; i++){
            var menu = this.menuList[i];
            var dl = $('<dl></dl>');
            if(menu.title){
                $('<dt>' + menu.title + '</dt>').appendTo(dl);
            }
            menu.items.forEach(function(item){
                $('<dd>' + item.name + '</dd>').appendTo(dl);
            });
            dropDownDiv.append(dl);
        }
        $(this.wrap).append(dropDownDiv);
    }

    DropDown.prototype.initStyle = function(){
        $(this.wrap).css({
            position: 'relative'
        }).find('.my-dropDown').css({
            position: 'absolute',
            backgroundColor: '#fff',
            border: '1px solid #eee',
            paddingLeft: '10px',
            display:'none',
            zIndex: 100
        }).find('dl').css({
            width : (this.width * 2) + 10,
            overflow: 'hidden',
            padding: 10,
            // boxSizing: 'border-box',
            borderBottom: '1px solid #eee'
        }).find('dd').css({
            // position: 'relative',
            width: this.width,
            float: 'left',
            textAlign: 'left',
            whiteSpace:'noWrap',
            cursor: 'pointer'
        });
        $('.my-dropDown dl', $(this.wrap)).find('dt').css({
            textAlign: 'left',
            fontWeight: 700,
            color:'#666'
        });
        if(this.directory == 'x'){
            $('.my-dropDown',$(this.wrap)).css({
                width: 1190,
                right: -84
            });
            var self = this;
            $('.my-dropDown > dl').each(function(i){
                $(this).css({
                    width: self.menuList[i].width,
                    float:'left',
                    borderRight: '1px solid #eee',
                    padding: 10
                }).find('dd').css({
                    width: self.menuList[i].itemWidth
                })
            })
        }
    }

    DropDown.prototype.bindEvent = function(){
        $(this.wrap).hover(function(){
            $(this).find('.dropDown-btn').css({
                backgroundColor: '#fff',
                borderColor: '#eee',
                borderBottomColor: '#fff',
                color: 'red',
                fontWeight: '600'
            });
            $('.my-dropDown',$(this)).show();
        },function(){
            $('.my-dropDown',$(this)).hide();
            $(this).find('.dropDown-btn').css({
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderBottomColor: 'transparent',
                color: '#999',
                fontWeight: 'normal'
            });
        })

    }


    $.fn.extend({
        addDropDown: function(options){
            options.wrap = this || $('body');
            new DropDown(options);
            return this;
        }
    })
=======
(function(){


    function DropDown(options){
        this.wrap = options.wrap;
        this.title = options.title || '';
        this.menuList = options.menuList || [];
        this.width = options.width;
        this.directory = options.direction || 'y';
        this.createDom();
        this.initStyle();
        this.bindEvent();
    }

    DropDown.prototype.createDom = function(){
        $(this.wrap).append($('<a class="dropDown-btn" href="#">'+this.title+'</a>'));
        var dropDownDiv = $('<div class="my-dropDown"></div>');
        for(var i = 0; i < this.menuList.length; i++){
            var menu = this.menuList[i];
            var dl = $('<dl></dl>');
            if(menu.title){
                $('<dt>' + menu.title + '</dt>').appendTo(dl);
            }
            menu.items.forEach(function(item){
                $('<dd>' + item.name + '</dd>').appendTo(dl);
            });
            dropDownDiv.append(dl);
        }
        $(this.wrap).append(dropDownDiv);
    }

    DropDown.prototype.initStyle = function(){
        $(this.wrap).css({
            position: 'relative'
        }).find('.my-dropDown').css({
            position: 'absolute',
            backgroundColor: '#fff',
            border: '1px solid #eee',
            paddingLeft: '10px',
            display:'none',
            zIndex: 100
        }).find('dl').css({
            width : (this.width * 2) + 10,
            overflow: 'hidden',
            padding: 10,
            // boxSizing: 'border-box',
            borderBottom: '1px solid #eee'
        }).find('dd').css({
            // position: 'relative',
            width: this.width,
            float: 'left',
            textAlign: 'left',
            whiteSpace:'noWrap',
            cursor: 'pointer'
        });
        $('.my-dropDown dl', $(this.wrap)).find('dt').css({
            textAlign: 'left',
            fontWeight: 700,
            color:'#666'
        });
        if(this.directory == 'x'){
            $('.my-dropDown',$(this.wrap)).css({
                width: 1190,
                right: -84
            });
            var self = this;
            $('.my-dropDown > dl').each(function(i){
                $(this).css({
                    width: self.menuList[i].width,
                    float:'left',
                    borderRight: '1px solid #eee',
                    padding: 10
                }).find('dd').css({
                    width: self.menuList[i].itemWidth
                })
            })
        }
    }

    DropDown.prototype.bindEvent = function(){
        $(this.wrap).hover(function(){
            $(this).find('.dropDown-btn').css({
                backgroundColor: '#fff',
                borderColor: '#eee',
                borderBottomColor: '#fff',
                color: 'red',
                fontWeight: '600'
            });
            $('.my-dropDown',$(this)).show();
        },function(){
            $('.my-dropDown',$(this)).hide();
            $(this).find('.dropDown-btn').css({
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderBottomColor: 'transparent',
                color: '#999',
                fontWeight: 'normal'
            });
        })

    }


    $.fn.extend({
        addDropDown: function(options){
            options.wrap = this || $('body');
            new DropDown(options);
            return this;
        }
    })
>>>>>>> 2c31271da4abb59f594c272f997dfa72a631001a
}())