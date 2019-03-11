var pageEngine = {
    init: function(selector, colorsArray){
        this.$W = $(selector);
        this.colorsArray = colorsArray;
        this.slideFlag = false;
        return this;
    },
    addSection: function(className){
        this.$Section = $('<div class="section"></div>').addClass(className);
        this.slideFlag = false;
        this.$Section.appendTo(this.$W);
        return this;
    },
    addSlide: function(className){
        this.$Slide = $('<div class="slide"></div>').addClass(className);
        this.slideFlag = true;
        this.$Slide.appendTo(this.$Section);
        return this;
    },
    addComponent: function(config){
        var oCp = null;
        switch(config.type){
            case 'base': 
            oCp = ComponentFactory(config);
            break;
        }
        this.slideFlag ? this.$Slide.append(oCp) : this.$Section.append(oCp);
        return this;
    },
    bindEvent: function(){
        this.$W.find('.section').on({
            _leave:function(){
                $(this).find('.component').trigger('cpLeave');
            },
            _load: function(){
                $(this).find('.component').trigger('cpLoad');
            }
        })
    },
    load: function(){
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            colorsArray: this.colorsArray,
            afterLeave: function(index){
                self.$W.find('.section').eq(index).trigger('_leave');
            },
            onLoad: function(index){
                self.$W.find('.section').eq(index).trigger('_load');
            }
        })
        this.$W.find('.section').trigger('_load');
    }

}