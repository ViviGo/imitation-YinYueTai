
//这是全屏播放器
window.onload = function(){
        var roll = document.getElementById("roll");
        var imgs = roll.getElementsByTagName("img");
        var lits = roll.getElementsByTagName("li");
        var timer = null;
        var cur = 0;
        var len = lits.length;

        // 定义并调用自动播放函数
        timer = setInterval( autoPlay,6000 );
        //鼠标滑过容器停止播放
        roll.onmouseover = function(){
            clearInterval( timer );
        }
        // 鼠标离开容器时继续播放下一张
        roll.onmouseout = function(){
            timer = setInterval( autoPlay,6000 );
        }
        // 遍历所有标题导航实现划过切换至对应的图片
        for( var i =0; i<len; i++ ){
            (function(j){
                lits[j].onmouseover = function(){
                    changePic(j);
                    cur = j;
                }
            })(i);
        }
        function autoPlay(){
            cur++;
            if( cur>=len ){ cur = 0 }
            changePic( cur );
        }
        // 定义图片切换函数
        function changePic( curIndex ){
            for( var i= 0;i<len;i++ ){
                imgs[i].className = "unshow";
                lits[i].className="";
            }
            imgs[curIndex].className = "show";
            lits[curIndex].className = "active";
        }
    }