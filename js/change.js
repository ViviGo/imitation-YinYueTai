/*
热播推荐的换一换jq代码，使用css的left值来进行列表左右的切换，由于css的left值切换方法，在切换时无法用肉眼看出
*/
$(function(){
    var left=$("#change1 #show_pic1").position().left;
	$("#change1 #change").on('click',function(){
        if(left==0){
            $("#change1 #show_pic1").css({left:-1250});
			left=$("#change1 #show_pic1").position().left;
			return;
		}
       	else{
            $("#change1 #show_pic1").css({left:0});
			left=$("#change1 #show_pic1").position().left;
        }
    })
})

/*
同上模板，此为猜你喜欢的换一换jq代码
 */
$(function(){
    var left=$("#change2 #show_pic1").position().left;
    $("#change2 #change").on('click',function(){
        if(left==0){
            $("#change2 #show_pic1").css({left:-1250});
            left=$("#change2 #show_pic1").position().left;
            return;
        }
        else{
            $("#change2 #show_pic1").css({left:0});
            left=$("#change2 #show_pic1").position().left;
        }
    })
})