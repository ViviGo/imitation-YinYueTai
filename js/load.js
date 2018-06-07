/*
在进入页面前先加载动画，可使页面内容加载完全
 */
$(function () {
    function jump(){                //隐藏加载动画div，显示页面内容
        $(".wait").hide();
        $(".all").show();
    }
    setTimeout(jump,2500);          //等待2.5秒后，执行jump函数
})
