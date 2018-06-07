/*
检验注册表单提交的要求，当其有某一内容填写不规范，都会停止提交，显示提示，
这里因为暂时没有办法去获取手机验证码，故其按钮是无法提交的，直接点击右上角退出即可
 */
function checkphone() {
    var phone = document.getElementById("phone").value;
    if(/^1[34578]\d{9}$/.test(phone)){
        document.getElementById("form_tip").innerHTML="手机号码输入正确";
        return true;
    }
    else {
        document.getElementById("form_tip").innerHTML="手机号码有误，请重填";
        return false;
    }
}
function checkpas() {
    var pas = document.forms["reg"].password.value;
    if(pas.length<6 || pas.length>20)
    {
        document.getElementById("form_tip").innerHTML = "密码必须在6—20个字符之间";   //在定义id=“tip”的行内输出语句
        return false;
    }
    document.getElementById("form_tip").innerHTML="密码输入正确";
    return true;
}
function checkbox() {
    $("#checked2").is(":checked");
}
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value="获取验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value=wait+"秒后可重新发送";
        wait--;
        setTimeout(function() {
                time(o)
            },
            1000)
    }
}

function mySubmit() {
    if(checkbox() && checkpas() && checkphone()){
        document.forms["reg"].submit();  //提交表单【“regForm”】
    }
}
