###介绍：
页面右侧停靠一个工具栏，从上到下有一个QQ客服，一个回到顶部的按钮；
QQ客服按钮只有样式，没有任何JS事件，需要自己额外绑定事件去打开QQ；
回到顶部按钮默认隐藏，只有当页面向下滚动超出一屏后才会显示“回到顶部按钮”
###用法：
1.引入一个css 和一个js
2.html部分：

    <div class="fixed-tool" id="fixedTool">
        <a href="javascript:;" class="qq-service"></a>
        <a href="javascript:;" class="go-top-with-img" id="goTop"></a>
    </div>
3.js部分（先引入之前提到的一个js）：
    window.onload = function () {
        goTop("goTop", 12);
    }
    //接受2个参数：{String}返回顶部的a标签的id
                    {Number} 大于0的整数。滚回顶部的速度，越小，速度越快，