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
})