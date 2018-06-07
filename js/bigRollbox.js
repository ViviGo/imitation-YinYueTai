/*
这是首播中左右切换一组图片（大的切换）jq代码
 */
var tab_index=0;
$(function () {
    var left1;
    function decide1(left1) {
        $("#tab1 #prev").hide();                //一开始得先设置为隐藏，不然会出现一开始还没盘旋到该区域的时候就出现箭头
        $("#tab1 #next").hide();
        $("#tab1").mouseover(function () {
            if(left1==0){
                $("#tab1 #prev").hide();
                $("#tab1 #next").show();
            }
            if(left1==-1250){
                $("#tab1 #next").hide();
                $("#tab1 #prev").show();
            }
        })
        $("#tab1").mouseout(function () {
            $("#tab1 #prev,#next").hide();
        })
    }
    left1=$("#tab1 #tab_box>div").eq(tab_index).position().left;
    decide1(0);                                     //开始要先运行一遍，不然一开始left=0时，左箭头还未隐藏
    //向右的按钮
    $("#tab1 #next").click(function() {
        $("#tab1 #tab_box>div").eq(tab_index).css({left:-1250});
        decide1(-1250);
    });
    $("#tab1 #prev").click(function() {
        $("#tab1 #tab_box>div").eq(tab_index).css({left:0});
        decide1(0);
    });
    $("#tab1 #tab li").click(function () {           //如果切换了tab选项卡，重新把left值变为0
        tab_index=$("#tab1 #tab li").index(this);
        $("#tab1 #tab_box>div").eq(tab_index).css({left:0});
        decide1(0);
    })
})

/*
以上面为模板的有关娱乐切换的代码
 */
$(function () {
    var left2;
    function decide2(left2) {
        $("#tab2 #prev").hide();
        $("#tab2 #next").hide();
        $("#tab2").mouseover(function () {
            if(left2==0){
                $("#tab2 #prev").hide();
                $("#tab2 #next").show();
            }
            if(left2==-1250){
                $("#tab2 #next").hide();
                $("#tab2 #prev").show();
            }
        })
        $("#tab2").mouseout(function () {
            $("#tab2 #prev").hide();
            $("#tab2 #next").hide();
        })
    }
    left2=$("#tab2 #tab_box>div").eq(tab_index).position().left;
    decide2(0);                                     //开始要先运行一遍，不然一开始left=0时，左箭头还未隐藏
    //向右的按钮
    $("#tab2 #next").click(function() {
        $("#tab2 #tab_box>div").eq(tab_index).css({left:-1250});
        decide2(-1250);
    });
    $("#tab2 #prev").click(function() {
        $("#tab2 #tab_box>div").eq(tab_index).css({left:0});
        decide2(0);
    });
    $("#tab2 #tab li").click(function () {           //如果切换了tab选项卡，重新把left值变为0
        tab_index=$("#tab2 #tab li").index(this);
        $("#tab2 #tab_box>div").eq(tab_index).css({left:0});
        decide2(0);
    })
})

/*
现场的左右切换jq代码，同上一个版本
 */
$(function () {
    var left3;
    function decide3(left3) {
        $("#tab3 #prev").hide();
        $("#tab3 #next").hide();
        $("#tab3").mouseover(function () {
            if(left3==0){
                $("#tab3 #prev").hide();
                $("#tab3 #next").show();
            }
            if(left3==-1250){
                $("#tab3 #next").hide();
                $("#tab3 #prev").show();
            }
        })
        $("#tab3").mouseout(function () {
            $("#tab3 #prev,#next").hide();
        })
    }
    left3=$("#tab3 #tab_box .tab_show").position().left;
    decide3(0);                                     //开始要先运行一遍，不然一开始left=0时，左箭头还未隐藏
    //向右的按钮
    $("#tab3 #next").click(function() {
        $("#tab3 #tab_box .tab_show").css({left:-1250});
        decide3(-1250);
    });
    $("#tab3 #prev").click(function() {
        $("#tab3 #tab_box .tab_show").css({left:0});
        decide3(0);
    });
})
/*
官方合作专区左右切换jq代码
 */
$(function () {
    var left4;
    function decide4(left4) {
        $("#tab4 #prev,#next").hide();
        $("#tab4").mouseover(function () {
            if(left4==0){
                $("#tab4 #prev").hide();
                $("#tab4 #next").show();
            }
            if(left4==-1250){
                $("#tab4 #next").hide();
                $("#tab4 #prev").show();
            }
        })
        $("#tab4").mouseout(function () {
            $("#tab4 #prev,#next").hide();
        })
    }
    left4=$("#tab4 #tab_box>div").eq(tab_index).position().left;
    decide4(0);                                     //开始要先运行一遍，不然一开始left=0时，左箭头还未隐藏
    //向右的按钮
    $("#tab4 #next").click(function() {
        $("#tab4 #tab_box>div").eq(tab_index).css({left:-1250});
        decide4(-1250);
    });
    $("#tab4 #prev").click(function() {
        $("#tab4 #tab_box>div").eq(tab_index).css({left:0});
        decide4(0);
    });
    $("#tab4 #tab li").click(function () {           //如果切换了tab选项卡，重新把left值变为0
        tab_index=$("#tab4 #tab li").index(this);
        $("#tab4 #tab_box>div").eq(tab_index).css({left:0});
        decide4(0);
    })
})
