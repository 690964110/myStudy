
// function ComponentFactory(config){
//     var $Div = $('<div class="component" style="display:none; text-align:center; font-size:30px;"><span></span></div>')
//     $Div.find('span').text('duyi');
//     $Div.on('cpLeave',function(){
//         $(this).fadeOut();
//     });
//     $Div.on('cpLoad',function(){
//         $(this).fadeIn();
//     })
//     return $Div;
// }
function ComponentFactory(config){
    var $Div = $('<div class="component" base></div>');
    // config 定制化$Div
    config.className && $Div.addClass(config.classNmae);
    config.width && $Div.css('width',config.width);
    config.height && $Div.css('height',config.height);
    config.text && $Div.text(config.text);
    config.center && $Div.css({position:'absolute', left: '50%',marginLeft: -config.width/2});
    config.css && $Div.css(config.css);
    if(config.event){
        for(var prop in event){
            $Div.on(prop,config.event[prop]);
        }
    }
    $Div.on('cpLeave',function(){
        var self = this;
        setTimeout(function(){
            config.animateOut && $(self).animate(config.animateOut);
        },config.delay || 0);
    });
    $Div.on('cpLoad',function(){
        var self = this;
        setTimeout(function(){
            config.animateIn && $(self).animate(config.animateIn);
        },config.delay || 0);
    });
    return $Div;
}