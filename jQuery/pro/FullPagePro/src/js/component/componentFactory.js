<<<<<<< HEAD
function ComponentFactory(config){
    var $Div = $('<div class="component"></div>');
    config.className  && $Div.addClass(config.className);
    config.width && $Div.css('width',config.width);
    config.height && $Div.css('height', config.height);
    config.text && $Div.text(config.text);
    config.css && $Div.css(config.css);
    config.center && $Div.css({position: 'absolute', left: '50%', marginLeft: -config.width/2});
    if(config.event){
        for(var prop in event){
            $Div.on(prop, config.event[prop]);
        }
    }
    $Div.on('cpLeave',function(){
        var self = this;
        setTimeout(function(){
            config.animateOut && $(self).animate(config.animateOut);
        }, config.delay || 0)
    });
    $Div.on('cpLoad', function(){
        var self  = this;
        setTimeout( function(){
            config.animateIn && $(self).animate(config.animateIn);
        }, config.delay || 0)
    })
    return $Div;
=======
function ComponentFactory(config){
    var $Div = $('<div class="component"></div>');
    config.className  && $Div.addClass(config.className);
    config.width && $Div.css('width',config.width);
    config.height && $Div.css('height', config.height);
    config.text && $Div.text(config.text);
    config.css && $Div.css(config.css);
    config.center && $Div.css({position: 'absolute', left: '50%', marginLeft: -config.width/2});
    if(config.event){
        for(var prop in event){
            $Div.on(prop, config.event[prop]);
        }
    }
    $Div.on('cpLeave',function(){
        var self = this;
        setTimeout(function(){
            config.animateOut && $(self).animate(config.animateOut);
        }, config.delay || 0)
    });
    $Div.on('cpLoad', function(){
        var self  = this;
        setTimeout( function(){
            config.animateIn && $(self).animate(config.animateIn);
        }, config.delay || 0)
    })
    return $Div;
>>>>>>> 2c31271da4abb59f594c272f997dfa72a631001a
}