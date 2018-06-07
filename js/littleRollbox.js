/*
这是直播里的小自动播放轮播器，这里使用jq代码来实现
 */
$(function () {
    var  i=0;
    var  clone =$("#tab1 .list div").first().clone();  //克隆第一个div
    $("#tab1 .list").append(clone);                    //插入到轮播列表中
    var  size=$("#tab1 .list div").length;              //这里使用length得出容器的轮播内容div的个数，一开始我使用size（）函数，后发现无效，即使用length
	
    //向右的按钮
    $("#inner_next").click(function () {
        moveR();
    });
    //向左的按钮
    $("#inner_prev").click(function () {
        moveL();
    });
    function moveR() {
        i++;
        if(i==size){
            $("#tab1 .list").css({left:0});
            i=1;
        }
        $("#tab1 .list").stop().animate({left:-i*470},500);  //stop（）使动画效果更加好
    }
    function moveL() {
        i--;
        if(i==-1){                                            //当轮播展示处于最左边图片之后的下一张图时
            $("#tab1 .list").css({left:-(size-1)*470});       //此时把css的left值拉到最右边的克隆图片那里
            i=size-2;                                           //然后i指向倒数第二张图片（除克隆图片外最后一张）的位置
        }
        $("#tab1 .list").stop().animate({left:-i*470},500);
    }

    //自动轮播
    var t=setInterval(moveR,4500);

    //对定时器的操作
    $("#tab1 .rollbox").hover(function () {                     //鼠标移入容器，清除定时器
        clearInterval(t);
    },function () {                                             //鼠标移出容器，重新设置定时器
        t=setInterval(moveR,4500);
    })
})