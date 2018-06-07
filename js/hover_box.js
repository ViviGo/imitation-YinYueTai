/*
精品悦单的盘旋效果
 */
$(function () {
    var hover = $("#more2 #show_pic1 #show");
    var box = $("#more2 #show_pic1 .hover_box");
    var index;
    hover.mouseover(function () {
        index=hover.index();
        box.eq(index).css({display:block});
    })
    hover.mouseout(function () {
        index=hover.index();
        box.eq(index).css({display:none});
    })
})
