/*
在输入搜索内容后，自动跳转到百度搜索
 */
function go(formsearch)
{
    var url = "http://www.baidu.com/s?";
    formsearch.method = "get";
    formsearch.action = url;
    return true;
}
/*
这个jq代码是当顶部导航条的搜索框得到焦点时，会出现自定义的下拉热点框，当然，这个下拉热点框是自己输入的固定值，不是由网站浏览量比较而来；
还有当搜索框失去焦点，也就是点击非搜索框地方的文本时，下拉搜索框自动消失；
*/
$(document).ready(function(){
    $("#word").click(function(){
        $("#tip").show(); //点击文本框弹出div
        if($("#tip").css('display')=='block') {
            $(document).bind('click', function (e) {
                var e = e || window.event; //浏览器兼容性
                var elem = e.target || e.srcElement;  //浏览器兼容性
                while (elem) { //循环判断至根节点，防止点击的是表单form(搜索框search和提示框tip)
                    if (elem.id && elem.id == 'formid') {
                        return;
                    }
                    elem = elem.parentNode;
                }
                $('#tip').css('display', 'none'); //点击的不是form,此时form下的tip隐藏
            });
        }
    });

});