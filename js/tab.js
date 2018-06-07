/*
这是第一个首播的tab选项卡切换jq代码，使用index索引来进行切换，使用fadeIn、out来实现渐入渐出效果
 */
$(function () {
    var tab=$('#tab1 ul#tab>li');
    var con=$('#tab1 #tab_box>div');
    var index1=0;
    tab.click(function(){
        index1=tab.index(this);
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        con.filter(':visible').stop(true,true).fadeOut(200,function(){
            con.eq(index1).fadeIn(200);
        })
    });
})

/*
娱乐的tab选项卡切换代码，同上一个模板
 */
$(function () {
    var tab2=$('#tab2 ul#tab>li');
    var con2=$('#tab2 #tab_box>div');
    var index2=0;
    tab2.click(function(){
        index2=tab2.index(this);
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        con2.filter(':visible').stop(true,true).fadeOut(200,function(){
            con2.eq(index2).fadeIn(200);
        })
    });
})


/*
关于登录注册框的tab切换代码
 */
$(function () {
    var tab3=$(".login_regis .inside_right ul>li");
    var con3=$(".login_regis .inside_right .two_tab>div");
    var index3=0;
    tab3.click(function () {
        index3=tab3.index(this);
        $(this).addClass('cur').siblings().removeClass('cur');
        con3.filter(':visible').stop(true,true).fadeOut(200,function(){
            con3.eq(index3).fadeIn(200);
        })
    })
})

