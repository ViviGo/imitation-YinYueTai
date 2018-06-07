/*
图片从盘旋字体的上面部分弹出
 */
$(function () {
    $("#show_tv .show").hover(function () {
        $(this).addClass('current_tv').siblings().removeClass('current_tv');
    })
})