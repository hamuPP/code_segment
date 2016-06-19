/**
 * Created by ty on 2016/6/19.
 * 右侧固定帮助框（回到顶部与QQ客服）
 * 依赖：不需依赖Jquery
 * css样式：相关CSS样式在compo.sass中，当然，也可以用户再自定义样式
 * usage:
 *      <link rel="stylesheet" href="rightFixedTooltip.css"/>
 *      <div class="fixed-tool" id="fixedTool">
 *          <a href="javascript:;" class="qq-service"></a>
 *          <a href="javascript:;" class="go-top-with-img" id="goTop"></a>
 *      </div>
 *
 * window.onload = function () {
 *      goTop("goTop", 12);
 * }
 */


/**
 * @param {String} sEleId :the go-to-top element
 * @param {Number} iSpeed : speed of scrolling ,smaller faster
 * @returns {undefined}
 * usage: goTop("fixedTool", "goTop", 12); 关于样式：可以自己写，如果想用默认样式，就用我上述例子的那些class name,
 */
function goTop(sEleId, iSpeed){
    var oGoTopLink = document.getElementById(sEleId);
    var iClientHeight = document.documentElement.clientHeight;
    var timer = null;

    window.onscroll = function () {
        //判断是否滚到了第二屏,是则显示"回到顶部"，否则隐藏
        var sScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (sScrollTop >= iClientHeight) {
            oGoTopLink.style.display = "block";
        } else {
            oGoTopLink.style.display = "none";
        }
    };

    oGoTopLink.onclick = function () {
        timer = setInterval(function () {
            var sScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var iScrollSpeed = Math.floor(-sScrollTop / iSpeed);
            document.body.scrollTop = document.documentElement.scrollTop = sScrollTop + iScrollSpeed;
            document.body.onmousewheel = function(){
                return false;
            };
            if (sScrollTop <= 0) {
                clearInterval(timer);
                document.body.onmousewheel = function(){
                    return true;
                };
            }
        }, 30);
    };
    return undefined;
}