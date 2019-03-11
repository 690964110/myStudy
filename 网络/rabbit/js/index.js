function init(){
    bindEvent();
}
function bindEvent(){
    $('#inp').keyup(function(e){
        if(e.keyCode == 13){
            $('#submit').trigger('click');
        }
    });
    $('#submit').click(function(){
        var value = $('#inp').val();
        if(value){
            addDom('mine',value);
            getData(value);
            $('#inp').val('');
        }
    })
}

//添加文字到页面中去
function addDom(who, val){
    $('<div class="' + who + '">\
    <div class="avitor"></div>\
    <div class="text">' + val + '</div>\
    </div>').appendTo('.content-box')
    var scrollHeight = $('.content-box')[0].scrollHeight;
    var innerHeight = $('.content-box').offset().top;
    $('.content-box').scrollTop(scrollHeight - innerHeight );
}

function getData(val){
    $.ajax({
        url:'http://api.duyiedu.com/api/chat/sendMsg',
        method: 'get',
        dataType: 'json',
        data:{
            appkey:'null_1547731404411',
            msg: val
        },
        success: function(res){
            if(res.status == 'success'){
                addDom('robot',res.data.text);
            }
        }
    })
}

init();