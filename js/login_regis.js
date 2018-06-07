/*
点击最上方导航条的登录与注册时所出现的界面，还有点击界面右上角可以退出界面的功能
 */
$(document).ready(function() {
    $('#btn_lo').click(function() {
        $('.form_mask').fadeIn(100);
        $('.login_regis').slideDown(200);
    })
    $('#btn_re').click(function () {
        $('.form_mask').fadeIn(100);
        $('.inside_right ul li:last').addClass('cur').siblings().removeClass('cur');
        $('.login_regis .login').addClass('no').siblings().removeClass('no');
        $('.login_regis').slideDown(200);
    })
    $('.login_close').click(function() {
        $('.form_mask').fadeOut(100);
        $('.login_regis').slideUp(200);
    })
})