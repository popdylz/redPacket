$(function() {
    var links = [{
        No: "1海尔空调",
        link1: "http://shop.m.suning.com/30000162.html",
        link2: "http://shop.m.suning.com/30000162.html"
    }, {
        No: "2海尔冰洗",
        link1: "http://shop.m.suning.com/30000162.html",
        link2: "http://shop.m.suning.com/30000162.html"
    }, {
        No: "3海信",
        link1: "http://c.m.suning.com/channel/wapheidian000013.html",
        link2: "http://c.m.suning.com/channel/wapheidian000013.html"
    }, {
        No: "4康佳",
        link1: "http://c.m.suning.com/channel/wapheidian00013.html",
        link2: "http://c.m.suning.com/channel/wapheidian00013.html"
    }, {
        No: "5索尼",
        link1: "http://c.m.suning.com/channel/wapheidian0018.html",
        link2: "http://c.m.suning.com/channel/wapheidian0018.html"
    }, {
        No: "6夏普",
        link1: "http://c.m.suning.com/channel/wapheidian00003.html",
        link2: "http://c.m.suning.com/channel/wapheidian00003.html"
    }, {
        No: "7美的",
        link1: "http://c.m.suning.com/channel/wapbingxi00004.html",
        link2: "http://c.m.suning.com/channel/wapbingxi00004.html"
    }, {
        No: "8西门子",
        link1: "http://c.m.suning.com/channel/wapbingxi00015.html",
        link2: "http://c.m.suning.com/channel/wapbingxi00015.html"
    }, {
        No: "9老板",
        link1: "http://shop.m.suning.com/30000021.html",
        link2: "http://shop.m.suning.com/30000021.html"
    }, {
        No: "10美的",
        link1: "javascript:;",
        link2: "javascript:;"
    }, {
        No: "11方太",
        link1: "javascript:;",
        link2: "javascript:;"
    }, {
        No: "12史密斯",
        link1: "http://shop.m.suning.com/30000025.html",
        link2: "http://shop.m.suning.com/30000025.html"
    }, {
        No: "13西门子",
        link1: "http://c.m.suning.com/channel/wapchuwei00212.html",
        link2: "http://c.m.suning.com/channel/wapchuwei00212.html"
    }, {
        No: "14奥克斯",
        link1: "http://shop.m.suning.com/30000031.html",
        link2: "http://shop.m.suning.com/30000031.html"
    }, {
        No: "15志高",
        link1: "http://shop.m.suning.com/30000050.html",
        link2: "http://shop.m.suning.com/30000050.html"
    }, {
        No: "16美的",
        link1: "http://shop.m.suning.com/30000061.html",
        link2: "http://shop.m.suning.com/30000061.html"
    }, {
        No: "17苏泊尔",
        link1: "http://shop.m.suning.com/30000176.html",
        link2: "http://shop.m.suning.com/30000176.html"
    }, {
        No: "18九阳",
        link1: "http://shop.m.suning.com/30000130.html",
        link2: "http://shop.m.suning.com/30000130.html"
    }, {
        No: "19美的",
        link1: "http://shop.m.suning.com/30000221.html",
        link2: "http://shop.m.suning.com/30000221.html"
    }, {
        No: "20飞利浦",
        link1: "http://c.m.suning.com/channel/Philips01.html",
        link2: "http://c.m.suning.com/channel/Philips01.html"
    }, {
        No: "21苹果",
        link1: "http://c.m.suning.com/channel/waptongxun001122.html",
        link2: "http://c.m.suning.com/channel/waptongxun001122.html"
    }, {
        No: "22华为",
        link1: "http://sale.suning.com/tx/huaweiYD/index.html",
        link2: "http://sale.suning.com/tx/huaweiYD/index.html"
    }, {
        No: "23荣耀",
        link1: "http://shop.m.suning.com/sale/70086258_10001125.html",
        link2: "http://shop.m.suning.com/sale/70086258_10001125.html"
    }, {
        No: "24小米",
        link1: "http://sale.suning.com/tx/xiaomiYD/index.html",
        link2: "http://sale.suning.com/tx/xiaomiYD/index.html"
    }, {
        No: "25华硕",
        link1: "http://c.m.suning.com/wapdiannao00911.html",
        link2: "http://c.m.suning.com/wapdiannao00911.html"
    }, {
        No: "26惠普",
        link1: "http://c.m.suning.com/wapdiannao00912.html",
        link2: "http://c.m.suning.com/wapdiannao00912.html"
    }, {
        No: "27联想",
        link1: "http://c.m.suning.com/wapdiannao00910.html",
        link2: "http://c.m.suning.com/wapdiannao00910.html"
    }, {
        No: "28索尼",
        link1: "http://shop.m.suning.com/70112891.html",
        link2: "http://shop.m.suning.com/70112891.html"
    }, {
        No: "29佳能",
        link1: "http://shop.m.suning.com/30000151.html",
        link2: "http://shop.m.suning.com/30000151.html"
    }, {
        No: "30尼康",
        link1: "http://shop.m.suning.com/30000156.html",
        link2: "http://shop.m.suning.com/30000156.html"
    }];
    var popupBox = new Vue({
        el: '#popupBox',
        data: {
            links: links
        }
    });
    //var navs = [];
    //for(i = 1; i < 31; i++) {
    //  navs.push(i)
    //};
    //console.log(navs)
    var navBox = new Vue({
        el: '#navBox',
        data: {
            // navs: navs
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: false, //自动切换时间间隔
        loop: false, //是否循环
        slidesPerView: 1, //一次移动几个
        initialSlide: 0, //开始位置
        speed: 0, //切换时速度
        pagination: '.my-pagination',
        paginationClickable: true,
        paginationBulletRender: function(mySwiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    $('.nav-btn').click(function() {
        var idx = $(this).index();
        $('.swiper-pagination-bullet').eq(idx).click();
        $('.popup').show();
    });
    $('.mainBox').height($(window).height());

    $('.my-pagination').click(function() {
        $('.mainBox').css('visibility', 'visible');
    })

    $('.close').click(function() {
        $('.mainBox').css('visibility', 'hidden');
        $('.popup').hide();
    })

});