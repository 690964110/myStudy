(function(){
    function VagueSearch(options){
        this.wrap = options.wrap;
        this.ph = options.placeholder;
        this.iw = options.inputWidth || this.wrap.width();
        this.bw = options.btnWidth;
        this.ih = options.inputHeight || '35px';
        this.bv = options.btnVal || '搜索';
        this.createDom();
        this.initStyle();
        this.bindEvent();
    }


    VagueSearch.prototype.createDom = function(){
        var oInput = $('<input type="text" class="search-inp" placeholder=" '  + this.ph + '"/>');
        var oBtn = $('<button class="search-btn">' + this.bv + '</button>')
        var oDiv = $('<div class="search-bar"></div>');
        this.wrap.append(oInput).append(oBtn).append(oDiv);
    }   

    VagueSearch.prototype.initStyle = function(){
        $('.search-inp').css({
            border: 'none',
            width: this.iw,
            height: this.ih,
            outline: 'none',
            padding: '4px 44px 4px 4px',
            boxSizing: 'border-box',
            backgroundColor: '#fff'
        });
        $('.search-btn').css({
            width: this.bw,
            height: this.ih,
            padding: '4px',
            backgroundColor: 'red',
            color: '#fff',
            borderColor: 'transparent',
            cursor: 'pointer'
        })
        $('.search-bar').css({
            width: parseInt(this.bw) + parseInt( this.iw) ,
            height: '300px',
            backgroundColor: '#fff',
            display: 'none'
        })
    }
   
    function getData(res){
        console.log(res);
    }
   
    VagueSearch.prototype.bindEvent = function(){
        var self = this;
        var  a = getData;
        $('.search-inp').on('keyup', function(){
            $.ajax({
                type: 'get',
                url:'https://suggest.taobao.com/sug',
                data:{
                    code: 'utf-8',
                    q: this.value,
                    callback: 'a'
                },  
                dataType: 'jsonp'
            });
        })
    }
    

    VagueSearch.prototype.kAjax = function( data ){
        function getData(res){
            console.log(res);
        }
        
    }
    
    VagueSearch.prototype.renderVagueSearchData = function(val){

    }
    $.fn.extend({
        //模糊搜索
        VagueSearch: function(options){
            options.wrap = $(this) || $('body');
            var vs = new VagueSearch(options);
            return this;
        }
    })
})()