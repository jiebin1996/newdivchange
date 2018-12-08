//按钮控制div切换
//btn 为控制按钮的父级的class  btntag为控制按钮的HTML标签  div为被控制的内容的父级class classlist为active样式  divTag为被控制的内容的HTML标签
//暂时只支持class样式
function divchange(btn,btntag,div,classList,divTag) {
    //判断是通过id获取还是class获取
    //获取各个参数的值
    var btn1 = document.getElementsByClassName(btn)[0];
    var btntag1 = btn1.getElementsByTagName(btntag);
    var div1 = document.getElementsByClassName(div)[0];
    var divtag1 = div1.getElementsByTagName(divTag);
    var xsrdleng1 = divtag1.length;
    var xslaleng1 = btntag1.length;
    if (xsrdleng1 === xslaleng1) {
        for(var j = 0; j<xslaleng1; j++){
            (function (arg) {
                btntag1[j].onmouseover = function () {
                    //初始化
                    for (var z = 0; z < xslaleng1; z++) {
                        btntag1[z].classList.remove(classList);
                        divtag1[z].style.display = "none";
                    };

                    this.classList.add(classList);
                    if (btntag1[arg].classList==classList){
                        divtag1[arg].style.display.fadeIn = "block";
                    }else {
                        divtag1[arg].style.display = "none";
                    }
                };

            })(j)
        }
    }else {
        alert("您的代码出错了哦！请检查！");
    };
}

//简易滑动切换  传递六个参数。必须要把自定义属性的值设置为数字并且和btntag的下标一致。
function banner(btnclassname,btntag,divclassname,divtag,attr,classlist) {
    //获取div和控制按钮
    var ul =document.getElementsByClassName(btnclassname)[0];
    var anli_div = document.getElementsByClassName(divclassname)[0];
    var div_ul = anli_div.getElementsByTagName(divtag);
    var divul_len = div_ul.length;
    var li = ul.getElementsByTagName(btntag);
    var li_len= li.length;
    var ullength = div_ul[0].offsetWidth;


    for (var i=0 ; i < li_len;i++){

        li[i].onmousemove =  function () {          //给每个按钮都添加滑动事件

            for (var j = 0;j < divul_len;j++ ){
                li[j].classList.remove(classlist);  //添加class之前先清楚
            }
            this.classList.add(classlist);          //添加自定义的class
            var num =  this.getAttribute(attr);     //获取自己定义的属性的值

            anli_div.style.transition = '1s';       //添加渐变属性
            anli_div.style.marginLeft = num * ullength * -1 + 'px';   //向左移动的距离也就是每个div的每个ul 的长度；
        }


    }
}
