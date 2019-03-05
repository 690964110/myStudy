
(function(){
    console.log(123);
}())
//封装下拉列表方法用于插入下拉菜单
$('#myJD').addDropDown({
    title: '我的京东',
    href: '#',
    width: 126,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '待处理订单'
        }, {
            href: '',
            name: '消息'
        }, {
            href: '',
            name: '返修退换货'
        }, {
            href: '',
            name: '我的问答'
        }, {
            href: '',
            name: '降价商品'
        }, {
            href: '',
            name: '我的关注'
        }]
    }, {
        title: '',
        items: [{
            href: '',
            name: '我的京豆'
        }, {
            href: '',
            name: '我的优惠券'
        }, {
            href: '',
            name: '我的白条'
        }, {
            href: '',
            name: '我的理财'
        }]
    }]
});
$('#procurement').addDropDown({
    title: '企业采购',
    href: '#',
    width: 60,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
})
$('#service').addDropDown({
    title: '客户服务',
    href: '#',
    width: 60,
    menuList: [{
        title: '客户',
        items: [{
            href: '',
            name: '帮助中心'
        }, {
            href: '',
            name: '售后服务'
        }, {
            href: '',
            name: '在线客服'
        }, {
            href: '',
            name: '意见建议'
        }, {
            href: '',
            name: '电话客服'
        }, {
            href: '',
            name: '客服邮箱'
        }, {
            href: '',
            name: '金融咨询'
        }, {
            href: '',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            href: '',
            name: '合作招商'
        }, {
            href: '',
            name: '合作招商'
        }, {
            href: '',
            name: '商家后台'
        }, {
            href: '',
            name: '京麦工作台'
        }, {
            href: '',
            name: '商家帮助'
        }, {
            href: '',
            name: '规则平台'
        }]
    }]
})

$('#bar-navs').addDropDown({
    title: '网站导航',
    href: '#',
    width: 1190,
    menuList: [{
        title: '特色主题',
        width:240 ,
        itemWidth:120,
        items: [{
            href: '',
            name: '京东试用'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东试用'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }, {
            href: '',
            name: '京东金融'
        }]
    }, {
        title: '行业频道',
        width:240 ,
        itemWidth:120,
        items: [{
            href: '',
            name: '手机'
        }, {
            href: '',
            name: '智能数码'
        }, {
            href: '',
            name: '家装城'
        }, {
            href: '',
            name: '京鱼座智能'
        }, {
            href: '',
            name: '手机'
        }, {
            href: '',
            name: '智能数码'
        }, {
            href: '',
            name: '家装城'
        }, {
            href: '',
            name: '京鱼座智能'
        }, {
            href: '',
            name: '手机'
        }, {
            href: '',
            name: '智能数码'
        }, {
            href: '',
            name: '家装城'
        }, {
            href: '',
            name: '京鱼座智能'
        }]
    }, {
        title: '生活服务',
        width:240 ,
        itemWidth:120,
        items: [{
            href: '',
            name: '京东众筹'
        }, {
            href: '',
            name: '白条'
        }, {
            href: '',
            name: '京东金融App'
        }, {
            href: '',
            name: '京东小金库'
        }, {
            href: '',
            name: '理财'
        }, {
            href: '',
            name: '话费'
        }, {
            href: '',
            name: '水电煤'
        }, {
            href: '',
            name: '彩票'
        }, {
            href: '',
            name: '旅行'
        }, {
            href: '',
            name: '机票酒店'
        }, {
            href: '',
            name: '电影票'
        }, {
            href: '',
            name: '京东到家'
        }, {
            href: '',
            name: '游戏'
        }]
    },{
        title: '生活服务',
        width:240 ,
        itemWidth:120,
        items: [{
            href: '',
            name: '京东众筹'
        }, {
            href: '',
            name: '白条'
        }, {
            href: '',
            name: '京东金融App'
        }, {
            href: '',
            name: '京东小金库'
        }, {
            href: '',
            name: '理财'
        }, {
            href: '',
            name: '话费'
        }, {
            href: '',
            name: '水电煤'
        }, {
            href: '',
            name: '彩票'
        }, {
            href: '',
            name: '旅行'
        }, {
            href: '',
            name: '机票酒店'
        }, {
            href: '',
            name: '电影票'
        }, {
            href: '',
            name: '京东到家'
        }, {
            href: '',
            name: '游戏'
        }]
    }]
})

$('#slider').swiper({
    imgList:['./img/0.jpg','./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg'],
    showBtn: true
});

var menuList = [{
    title:['家用电器'],
    content:{
        tabs: ['家电馆','真相专卖店','家电服务'],
        subs: [{
            title: '电视',
            items: ['曲面电视','超薄电视','oled电视','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['隔离','遮瑕','气垫BB','粉底','腮红','口红/唇膏','唇釉/唇彩','睫毛膏','眼线','眉笔/眉粉']
        },{
            title: '电视',
            items: ['曲面电视','超薄电视','oled电视','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['隔离','遮瑕','气垫BB','粉底','腮红','口红/唇膏','唇釉/唇彩','睫毛膏','眼线','眉笔/眉粉']
        }]
    }
},{
    title:['家电馆','真相专卖店','家电服务'],
    content:{
        tabs: ['家电馆','真相专卖店','家电服务'],
        subs: [{
            title: '电视',
            items: ['烫发','超薄电视','洗护套装','4k超清电视','染发']
        },{
            title: '电视',
            items: ['隔离','遮瑕','发膜/精油','粉底','腮红','口红/唇膏','唇釉/唇彩','造型','眼线','眉笔/眉粉']
        },{
            title: '电视',
            items: ['假发','超薄电视','oled电视','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['隔离','遮瑕','美发工具','粉底','腮红','口红/唇膏','唇釉/唇彩','洗发水','眼线','眉笔/眉粉']
        }]
    }
},{
    title:['曲面电视','超薄电视','oled电视'],
    content:{
        tabs: ['隔离','遮瑕','气垫BB','粉底','腮红'],
        subs: [{
            title: '电视',
            items: ['水具酒具','超薄电视','茶具/咖啡具','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['保温杯','遮瑕','烹饪锅具','粉底','炒锅','口红/唇膏','唇釉/唇彩','睫毛膏','餐具','眉笔/眉粉']
        },{
            title: '电视',
            items: ['刀剪菜板','超薄电视','厨房配件','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['保鲜盒','遮瑕','气垫BB','粉底','锅具套装','口红/唇膏','唇釉/唇彩','睫毛膏','眼线','眉笔/眉粉']
        }]
    }
},{
    title:['隔离','遮瑕','气垫BB','粉底'],
    content:{
        tabs: ['家电馆','真相专卖店','家电服务'],
        subs: [{
            title: '电视',
            items: ['数码相机','单电/微单相机','oled电视','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['冲印服务','遮瑕','数码相框','粉底','单反相机','口红/唇膏','唇釉/唇彩','拍立得','眼线','眉笔/眉粉']
        },{
            title: '电视',
            items: ['曲面电视','超薄电视','oled电视','4k超清电视','55英寸']
        },{
            title: '电视',
            items: ['隔离','遮瑕','运动相机','粉底','腮红','口红/唇膏','唇釉/摄像机','睫毛膏','户外器材','眉笔/眉粉']
        }]
    }
}]

function createMenuDom(menuList){
    menuList.forEach(function(listData){
        var oLi = $('<li></li>');
        var title = listData.title;
        for(var i = 0; i < title.length; i++){
            $('<a href = "#" >'+title[i]+'</a>').appendTo(oLi);
            if(i != title.length - 1){
                $('<span>/</span>').appendTo(oLi);
            }
        }
        $('#menu-list').append(oLi);
    })
}



function bindMenuEvent(){
    var timer = null;
    $('#menu-list').on('mouseenter','li', function(){
        clearTimeout(timer);
        $(this).css({
            backgroundColor: '#eee'
        })
        var index = $(this).index();
        renderMenuContent(menuList[index].content);
        $('#menu-content').show(); 
    }).on('mouseleave', 'li', function(){
        $(this).css({
            backgroundColor: '#fff'
        })
        timer = setTimeout(function(){
            $('#menu-content').hide();
        }, 100);
        $('#menu-content').on('mouseenter', function(){
            clearTimeout(timer);
        }).on('mouseleave',function(){
            timer = setTimeout(function(){
                $('#menu-content').hide();
            }, 100);
        })
    })
}

function renderMenuContent(data){
    $('#menu-content').html('');
    var tabsUl = $('<ul class="tabs"}></ul>');
    var tabsData = data.tabs;
    var subsData = data.subs;
    tabsData.forEach(function(tab){
        $('<li>' + tab + '</li>').appendTo(tabsUl);
    });
    var itemContent = $('<div class="item-content"></div>');
    subsData.forEach(function(sub){
       var dl =  $('<dl></dl>');
       var len = sub.items.length;
       var dd = $('<dd></dd>');
       for(var i = 0; i < len; i++){
        $('<a href="#">' + sub.items[i]+'</a>').appendTo(dd);
       }
       dl.append( $('<dt> ' + sub.title + '</dt>'))
            .append(dd)
                .appendTo(itemContent);
    })
    $('#menu-content').append(tabsUl).append(itemContent);
}






createMenuDom(menuList);
bindMenuEvent();
