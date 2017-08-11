//html根字体
// (function() {
//     document.addEventListener('DOMContentLoaded', function() {
//         var html = document.documentElement;
//         var windowWidth = html.clientWidth;
//         html.style.fontSize = windowWidth / 6.4 + 'px';
//     }, false);
// })();

$(document).ready(function() {

    //导航
    $('.nav-menu').click(function() {
        $(this).toggleClass("nav-menu-active");
        // $('.m-header').toggleClass("m-header-active");
        $('.m-nav').toggle();
    });

    $('.m-nav h2').click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });


    TouchSlide({
        slideCell: "#bannerSider",
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "left",
        autoPlay: false,
        autoPage: true,
        switchLoad: "_src" //切换加载，真实图片路径为"_src" 
    });
    jQuery(".m-index-notice").slide({
        mainCell: ".bd .listWrap",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 1,
        interTime: 50
    });
    var txtMarqueeLi = $('.m-index-notice .list').width();
    var txtMarqueeUL = $('.m-index-notice .listWrap').width();
    $('.m-index-notice .list').width(txtMarqueeLi + 1);
    $('.m-index-notice .listWrap').width(txtMarqueeUL + 10);

    if ($('div').hasClass('m-online-recharge')) {
        $('html').css('background', '#fafafa');
    }

    if ($('div').hasClass('m-game-record')) {
        $('html').css('background', '#f9f9f9');
    }

    $('.m-online-recharge .bd li').click(function() {
        $(this).addClass("active").siblings().removeClass();
        $('.m-online-recharge .bd li input').attr("checked", false);
        $(this).find('input').attr("checked", "checked");
    });

    var docHeight = $(window).outerHeight(true);
    var headerHeight = $(".m-header").outerHeight(true);
    var noticeHeight = $(".m-envelope-notice").outerHeight(true);
    if ($('div').hasClass('m-login')) {

        // $('.m-login').height(docHeight - headerHeight);
        // $('.m-login .hd').css('margin-top', (docHeight - headerHeight) / 2 - 15);
        $('html').addClass('login-html');
    }


    if ($('div').hasClass('m-logon')) {
        $('html').addClass('logon-html');
        //$('.m-logon').height(docHeight - headerHeight);
        //   $('.m-logon .hd').css('margin-top', (docHeight - headerHeight) / 2 - 60);
    }


    if ($('div').hasClass('m-envelope-notice')) {
        $('html').css('padding-bottom',noticeHeight );
    }

    $(".m-logon li:eq(3) select").change(function() {
        $(".m-logon li:eq(3) b").css('color', '#333')
        $(".m-logon li:eq(3) b").html($(this).val());
    });


});