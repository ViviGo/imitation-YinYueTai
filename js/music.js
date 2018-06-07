/*
音乐播放器页面的隐藏与显示，这里主要使用fadeIn和fadeOut函数
 */
$(function () {
    $(".listenmusic").click(function () {
        if($("#music").css('display')=='block'){
            $("#music").fadeOut();
        }
        else{
            $("#music").fadeIn();
        }
    })
    $("#music_exit").click(function () {
        $("#music").fadeOut();
    })
})