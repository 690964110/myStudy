(function(){
    //初始化工厂
    function PhotoWall(options){
        this.wrap = options.wrap || $(body);
        this.imgList = options.imgList;
    }





    $.fn.extend({
        photoWall: function(options){
            options.wrap = $(this);
            var photoWall = new PhotoWall(options);
            return this;
        }
    })
})()