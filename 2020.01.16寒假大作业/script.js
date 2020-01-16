//导航栏部分
var pageBox = document.getElementById("page-boxs");
var picture1_1 = document.getElementById("picture1-1");
var picture1_2 = document.getElementById("picture1-2");
var picture1_3 = document.getElementById("picture1-3");
var picture1_4 = document.getElementById("picture1-4");
var picture1_5 = document.getElementById("picture1-5");
var picture1_6 = document.getElementById("picture1-6");
//获得窗口宽高
var pageHeight = window.innerHeight;
var pageWidth = window.innerWidth;
//获得导航栏高度
var nav = document.getElementById("nav");
var stretch2 = document.getElementById("stretch2");
var stretch3 = document.getElementById("stretch3");
var stretch4 = document.getElementById("stretch4");
var stretch5 = document.getElementById("stretch5");
//获得导航栏中的小块
var navBlock0 = document.getElementById("nav-block0");
var navBlock1 = document.getElementById("nav-block1");
var navBlock2 = document.getElementById("nav-block2");
var navBlock3 = document.getElementById("nav-block3");
var navBlock4 = document.getElementById("nav-block4");
var navBlock5 = document.getElementById("nav-block5");
var navBlock6 = document.getElementById("nav-block6");
var page1 = document.getElementById("page1");
var buttons = document.getElementById("buttons");
//获取图片
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var pic6 = document.getElementById("pic6");

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var page5 = document.getElementById("page5");
var page6 = document.getElementById("page6");
/*document.body.style.overflow="hidden";//隐藏页面水平和垂直滚动条
 */


//微博微信
var j=0;
var weiboweixin=document.getElementsByClassName("weiboweixin");

for(i=0;i<weiboweixin.length;i++)
{
    var weiboweixin_a=weiboweixin[i].getElementsByTagName("a");
    for(j=0;j<weiboweixin_a.length;j++)
    {
        weiboweixin_a[j].onmouseover=function(){
            this.style.color="white";
        }
        weiboweixin_a[j].onmouseleave=function(){
            this.style.color="";
        }
    }
}


var weibo1 = document.getElementById("weibo1");
var weixin1 = document.getElementById("weixin1");

var bottom1=document.getElementById("bottom1");
var bottom1_a=bottom1.getElementsByTagName("a");
var QRcode1 = document.getElementById("QRcode1");
var i=0;






//page2
var page2_background = document.getElementById("page2-background");
var page2BottomPic = document.getElementById("page2-bottom-pic");
var picture2_1 = document.getElementById("picture2-1");
var picture2_2 = document.getElementById("picture2-2");
var picture2_3 = document.getElementById("picture2-3");
var picture2_4 = document.getElementById("picture2-4");
var weibo2 = document.getElementById("weibo2");
var weixin2 = document.getElementById("weixin2");
var QRcode2 = document.getElementById("QRcode2");
var pencils = document.getElementById("pencils");
var pencil1 = document.getElementById("pencil1");
var pencil2 = document.getElementById("pencil2");
var pencil3 = document.getElementById("pencil3");
var pencil4 = document.getElementById("pencil4");
var pencil1_block = document.getElementById("pencil1-block");
var pencil2_block = document.getElementById("pencil2-block");
var pencil3_block = document.getElementById("pencil3-block");
var pencil4_block = document.getElementById("pencil4-block");
var bottom2=document.getElementById("bottom2");
var bottom2_a=bottom2.getElementsByTagName("a");

//page3
var page3BottomPic = document.getElementById("page3-bottom-pic");
var page3_window1 = document.getElementById("page3window1");
var page3_window2 = document.getElementById("page3window2");
var pic3_1 = document.getElementById("picture3-1");
var pic3_2 = document.getElementById("picture3-2");
var page3_in = document.getElementById("page3-in");
var weibo3 = document.getElementById("weibo3");
var weixin3 = document.getElementById("weixin3");
var QRcode3 = document.getElementById("QRcode3");
var page3_drop1_img = document.getElementById("p3-drop1-img");
var page3_drop2_img = document.getElementById("p3-drop2-img");
var page3_drop1_block = document.getElementById("p3-drop1-block");
var page3_drop2_block = document.getElementById("p3-drop2-block");
var page3_drop1 = document.getElementById("page3drop1");
var page3_drop2 = document.getElementById("page3drop2");
var bottom3=document.getElementById("bottom3");
var bottom3_a=bottom3.getElementsByTagName("a");


//page4
var page4BottomPic = document.getElementById("page4-bottom-pic");
var page4_window1 = document.getElementById("p4window1");
var page4_window2 = document.getElementById("p4window2");
var page4_window3 = document.getElementById("p4window3");
var page4_window4 = document.getElementById("p4window4");
var picture4_1 = document.getElementById("picture4-1");
var picture4_2 = document.getElementById("picture4-2");
var picture4_3 = document.getElementById("picture4-3");
var picture4_4 = document.getElementById("picture4-4");
var weibo4 = document.getElementById("weibo4");
var weixin4 = document.getElementById("weixin4");
var QRcode4 = document.getElementById("QRcode4");
var droplets4_1 = document.getElementById("beautiful");
var bottom4=document.getElementById("bottom4");
var bottom4_a=bottom4.getElementsByTagName("a");

//page5
var page5BottomPic = document.getElementById("page5-bottom-pic");
var pic5_1_block = document.getElementById("pic5-1-block");
var pic5_2_block = document.getElementById("pic5-2-block");
var pic5_1 = document.getElementById("pic5-1");
var pic5_2 = document.getElementById("pic5-2");
var weibo5 = document.getElementById("weibo5");
var weixin5 = document.getElementById("weixin5");
var QRcode5 = document.getElementById("QRcode5");
var page5drop1=document.getElementById("page5drop1");
var page5drop2=document.getElementById("page5drop2");
var page5drop1_img=document.getElementById("page5-drop-left");
var page5drop2_img=document.getElementById("page5-drop-right");
var page5drop1_block=document.getElementById("page5-drop1-block");
var page5drop1_block=document.getElementById("page5-drop1-block");
var page5drop2_block=document.getElementById("page5-drop2-block");
var page5drop2_block=document.getElementById("page5-drop2-block");
var bottom5=document.getElementById("bottom5");
var bottom5_a=bottom5.getElementsByTagName("a");

//page6
var page6_top_picture = document.getElementById("page6-top-picture");
var page6BottomPic = document.getElementById("page6-bottom-pic");
var weibo6 = document.getElementById("weibo6");
var weixin6 = document.getElementById("weixin6");
var QRcode6 = document.getElementById("QRcode6");
var bottom6=document.getElementById("bottom6");
var bottom6_a=bottom6.getElementsByTagName("a");
var elements=document.getElementById("elements");
var elements_a=elements.getElementsByTagName("a");





window.onload = function () {
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";


    nav.style.height = pageHeight + "px";
    stretch2.style.height = pageHeight + "px";
    stretch3.style.height = pageHeight + "px";
    stretch4.style.height = pageHeight + "px";
    stretch5.style.height = pageHeight + "px";

    //载入时为1
    navBlock1.style.backgroundColor = "white";
    navBlock1.style.borderTop = "solid 2px rgba(0, 0, 255, 0)";
    navBlock1.style.borderBottom = "solid 2px rgb(0, 156, 0)";
    pic1.src = "./image/首页_on.png";
    y = 1;
    navBlock1.style.color = "rgb(0, 156, 0)"; //字体颜色


    //page1
    picture1_1.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_1.style.width = pageWidth + "px";
    picture1_2.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_2.style.width = pageWidth + "px";
    picture1_3.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_3.style.width = pageWidth + "px";
    picture1_4.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_4.style.width = pageWidth + "px";
    picture1_5.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_5.style.width = pageWidth + "px";
    picture1_6.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_6.style.width = pageWidth + "px";
    page1.style.width = pageWidth + "px"; //overflow:hidden;
    page1.style.height = pageHeight + "px";


    buttons.style.left = (0.5 * pageWidth - 123) + "px"; //buttons条宽度为246




    //page2
    page2BottomPic.style.width = pageWidth + "px";

//在载入时加入函数能形成载入的动画效果，原因？；一旦使用了函数，该元素所有的变化都要用函数，否则会出错
    bufferMove_pencil(picture2_1, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_2, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_3, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_4, parseInt((window.innerWidth - 95) / 4));
    pencils.style.height = pageHeight + "px";


    //page3
    page3BottomPic.style.width = pageWidth + "px";
    page3_window1.style.width = 2 / 5 * pageWidth + "px";
    page3_window1.style.height = pageHeight + "px";
    page3_window2.style.width = 1 / 3 * pageWidth + "px";
    page3_window2.style.height = pageHeight + "px";
    bufferMove_backgroundPic(pic3_1, parseInt(window.innerHeight));
    bufferMove_backgroundPic(pic3_2, parseInt(window.innerHeight));
    pic3_1.style.marginLeft = -1 / 3 * pageHeight + "px";
    pic3_2.style.marginLeft = -1 / 4 * pageHeight + "px";



    //page4
    page4BottomPic.style.width = pageWidth + "px";
    page4_window1.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window1,parseInt(1 / 4 * window.innerWidth));
    page4_window2.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window2,parseInt(1 / 4 * window.innerWidth));
    page4_window3.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window3,parseInt(1 / 4 * window.innerWidth));
    page4_window4.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window4,parseInt(1 / 4 * window.innerWidth));
    picture4_1.style.height = pageHeight + "px";
    picture4_2.style.height = pageHeight + "px";
    picture4_3.style.height = pageHeight + "px";
    picture4_4.style.height = pageHeight + "px";


    //page5
    page5BottomPic.style.width = pageWidth + "px";
    pic5_1_block.style.height = 1 / 2 * pageHeight + "px";
    pic5_1_block.style.width = pageWidth + "px";
    pic5_2_block.style.height = 1 / 2 * pageHeight + "px";
    pic5_2_block.style.width = pageWidth + "px";
    bufferMove_page5_width(pic5_1,pageWidth);
    bufferMove_page5_width(pic5_2,pageWidth);
    pic5_1.style.marginTop = -1 / 4 * pageHeight + "px"; //把第一张图往上移一点；


    //page6
    page6_top_picture.style.width = pageWidth + "px";
}



window.onresize = function () { //页面大小被改变时，但效果不好
    console.log(window.innerWidth);
    var pageHeight = window.innerHeight;
    var pageWidth = window.innerWidth; //改变之后要重新获取长度宽度,但只能在这个部分使用
    nav.style.height = pageHeight + "px";
    stretch2.style.height = pageHeight + "px";
    stretch3.style.height = pageHeight + "px";
    stretch4.style.height = pageHeight + "px";
    stretch5.style.height = pageHeight + "px";
    pageBox.style.height = pageHeight + "px";
    pageBox.style.width = pageWidth + "px";
    picture1_1.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_1.style.width = pageWidth + "px";
    picture1_2.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_2.style.width = pageWidth + "px";
    picture1_3.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_3.style.width = pageWidth + "px";
    picture1_4.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_4.style.width = pageWidth + "px";
    picture1_5.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_5.style.width = pageWidth + "px";
    picture1_6.style.height = pageHeight + "px"; //一定要加+"px"
    picture1_6.style.width = pageWidth + "px";
    //在缩放时再次校准位置
    bufferMove_change(-x * window.innerHeight);
    page1.style.width = pageWidth + "px";
    page1.style.height = pageHeight + "px";
    buttons.style.left = (0.5 * pageWidth - 123) + "px"; //buttons条宽度为246
    if (window.innerWidth <= 1 / 3 * window.screen.width) //之前加了+"px"反而会使计算错误
    {
        console.log("小于");
        pageBox.style.width = pageWidth + "px";
        picture1_1.style.width = 1 / 3 * window.screen.width + "px";
        picture1_2.style.width = 1 / 3 * window.screen.width + "px";
        picture1_3.style.width = 1 / 3 * window.screen.width + "px";
        picture1_4.style.width = 1 / 3 * window.screen.width + "px";
        picture1_5.style.width = 1 / 3 * window.screen.width + "px";
        picture1_6.style.width = 1 / 3 * window.screen.width + "px";
        page1.style.width = 1 / 3 * window.screen.width + "px";
    }



    //page2
    page2BottomPic.style.width = pageWidth + "px";
    pencils.style.height = pageHeight + "px";
    //将原来的直接变化用缓冲运动函数代替，窗口resize之后就不会复原
    bufferMove_pencil(picture2_1, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_2, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_3, parseInt((window.innerWidth - 95) / 4));
    bufferMove_pencil(picture2_4, parseInt((window.innerWidth - 95) / 4));


    //page3
    page3BottomPic.style.width = pageWidth + "px";
    page3_window1.style.width = 2 / 5 * pageWidth + "px";
    page3_window1.style.height = pageHeight + "px";
    page3_window2.style.width = 1 / 3 * pageWidth + "px";
    page3_window2.style.height = pageHeight + "px";
    bufferMove_backgroundPic(pic3_1, parseInt(window.innerHeight));
    bufferMove_backgroundPic(pic3_2, parseInt(window.innerHeight));
    pic3_1.style.marginLeft = -1 / 3 * pageHeight + "px";
    pic3_2.style.marginLeft = -1 / 4 * pageHeight + "px";



    //page4
    page4BottomPic.style.width = pageWidth + "px";
    page4_window1.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window1,parseInt(1 / 4 * window.innerWidth));
    page4_window2.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window2,parseInt(1 / 4 * window.innerWidth));
    page4_window3.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window3,parseInt(1 / 4 * window.innerWidth));
    page4_window4.style.height = pageHeight + "px";
    bufferMove_page4_width(page4_window4,parseInt(1 / 4 * window.innerWidth));
    picture4_1.style.height = window.innerHeight + "px";
    picture4_2.style.height = window.innerHeight + "px";
    picture4_3.style.height = window.innerHeight + "px";
    picture4_4.style.height = window.innerHeight + "px";

    //page5
    page5BottomPic.style.width = pageWidth + "px";
    pic5_1_block.style.height = 1 / 2 * pageHeight + "px";
    pic5_1_block.style.width = pageWidth + "px";
    pic5_2_block.style.height = 1 / 2 * pageHeight + "px";
    pic5_2_block.style.width = pageWidth + "px";

    bufferMove_page5_width(pic5_1,pageWidth);

    bufferMove_page5_width(pic5_2,pageWidth);
    pic5_1.style.marginTop = -1 / 4 * pageHeight + "px"; //把第一张图往上移一点；

    //page6
    page6_top_picture.style.width = pageWidth + "px";
}


//点击事件

var y = 0;
navBlock1.onclick = function () {
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page1.style.display = ""; //清除display值


    navBlock1.style.backgroundColor = "white";
    navBlock1.style.borderTop = "solid 2px rgba(0, 0, 255, 0)";
    navBlock1.style.borderBottom = "solid 2px rgb(0, 156, 0)";

    navBlock1.style.color = "rgb(0, 156, 0)"; //字体颜色
    pic1.src = "./image/首页_on.png";
    y = 1;


    pic2.src = "./image/关于蒙牛_off.png";
    navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    pic3.src = "./image/品牌_off.png";
    navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    pic4.src = "./image/可持续发展_off.png";
    navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    pic5.src = "./image/新闻与活动_off.png";
    navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    pic6.src = "./image/招标_off.png";
    navBlock6.removeAttribute("style"); //移除属性，且未移除css中 
}
navBlock2.onclick = function () {
    page1.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page2.style.display = "";
    pic2.src = "./image/关于蒙牛_on.png";
    navBlock2.style.backgroundColor = "white";

    navBlock2.style.color = "rgb(255, 183, 49)"; //字体颜色

    navBlock2.style.borderTop = "solid 2px rgb(255, 183, 49)";
    navBlock2.style.borderBottom = "solid 2px rgb(255, 183, 49)";
    y = 2;
    //对其他作用
    navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";

    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic3.src = "./image/品牌_off.png";
    navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    pic4.src = "./image/可持续发展_off.png";
    navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    pic5.src = "./image/新闻与活动_off.png";
    navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    pic6.src = "./image/招标_off.png";
    navBlock6.removeAttribute("style"); //移除属性，且未移除css中 


}

navBlock3.onclick = function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page3.style.display = "";
    pic3.src = "./image/品牌_on.png";

    navBlock3.style.color = "rgb(255, 128, 128)"; //字体颜色

    navBlock3.style.backgroundColor = "white";
    y = 3;
    //对其他作用
    navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";

    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic2.src = "./image/关于蒙牛_off.png";
    navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    pic4.src = "./image/可持续发展_off.png";
    navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    pic5.src = "./image/新闻与活动_off.png";
    navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    pic6.src = "./image/招标_off.png";
    navBlock6.removeAttribute("style"); //移除属性，且未移除css中 
}

navBlock4.onclick = function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page4.style.display = "";

    navBlock4.style.color = "rgb(117, 181, 255)"; //字体颜色

    pic4.src = "./image/可持续发展_on.png";
    navBlock4.style.backgroundColor = "white";
    y = 4;
    //对其他作用
    navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";

    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic2.src = "./image/关于蒙牛_off.png";
    navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    pic3.src = "./image/品牌_off.png";
    navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    pic5.src = "./image/新闻与活动_off.png";
    navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    pic6.src = "./image/招标_off.png";
    navBlock6.removeAttribute("style"); //移除属性，且未移除css中 
}


navBlock5.onclick = function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page6.style.display = "none";
    page5.style.display = "";

    navBlock5.style.color = "rgb(0, 156, 0)"; //字体颜色

    pic5.src = "./image/新闻与活动_on.png";
    navBlock5.style.backgroundColor = "white";
    y = 5;
    //对其他作用
    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic2.src = "./image/关于蒙牛_off.png";
    navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    pic3.src = "./image/品牌_off.png";
    navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    pic4.src = "./image/可持续发展_off.png";
    navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    pic6.src = "./image/招标_off.png";
    navBlock6.removeAttribute("style"); //移除属性，且未移除css中 

}
navBlock6.onclick = function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "";

    navBlock6.style.color = "rgb(255, 183, 49)"; //字体颜色

    pic6.src = "./image/招标_on.png";
    navBlock6.style.backgroundColor = "white";
    y = 6;
    //对其他作用
    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic1.src = "./image/首页_off.png";
    navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
    pic2.src = "./image/关于蒙牛_off.png";
    navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    pic3.src = "./image/品牌_off.png";
    navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    pic4.src = "./image/可持续发展_off.png";
    navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    pic5.src = "./image/新闻与活动_off.png";
    navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    
}


function bufferMove_QRcode(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    //offsetTop获取的是不带单位数字，style.top获取的是带单位的字符串，字符串再加上单位就会出错，运算时只能用数字

    ele.timer = setInterval(function () {

        var speed = (iTarget - ele.offsetWidth) / 6;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetWidth != iTarget) {
            ele.style.width = ele.offsetWidth + speed + "px";
        }
    }, 10);
}

//page1
//移入移出效果；
for(i=0;i<bottom1_a.length;i++)
{
    bottom1_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom1_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
weibo1.onmouseover = function () {
    weibo1.src = "./image/weibo_on.png";
}
weibo1.onmouseleave = function () {
    weibo1.src = "./image/weibo_off.png";
}
weixin1.onmouseover = function () {
    weixin1.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode1, 35);
    //   QRcode1.style.width = 120 + "px";
    QRcode1.style.padding = 10 + "px";

}
weixin1.onmouseleave = function () {
    weixin1.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode1, 0);
    QRcode1.style.padding = 0 + "px";

}


function bufferMove_nav(ele, iTarget, opacityTarget) {
//更改透明度和left值，出现时透明度减小，收回是透明度增加

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    ele.timer = setInterval(function () {
        //运动部分
        var speed = (iTarget - ele.offsetLeft) / 6;

        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetLeft != iTarget) {
            ele.style.left = ele.offsetLeft + speed + "px";

            clearInterval("ele.timer");
        }
        //透明度部分    
        var opacity = ele.style.opacity;
        if (ele.offsetLeft == iTarget) {
            ele.style.opacity = opacityTarget;
        }
        if(opacity<opacityTarget)
            ele.style.opacity=opacity+0.1;
        if(opacity>opacityTarget)
            ele.style.opacity=opacity-0.1;
    }, 10);
}

navBlock0.onmouseover = function () {
    navBlock0.style.cursor = "pointer";
}

navBlock1.onmouseover = function () {

    navBlock1.style.backgroundColor = "white";
    navBlock1.style.borderTop = "solid 2px rgba(0, 0, 255, 0)";
    navBlock1.style.borderBottom = "solid 2px rgb(0, 156, 0)";
    navBlock1.style.cursor = "pointer";
    if (y != 1) {
        pic1.src = "./image/首页_mouseover.png";
    }

}
navBlock1.onmouseleave = function () {
    if(y!=1){
        navBlock1.removeAttribute("style"); //移除属性，且未移除css中 
        pic1.src = "./image/首页_off.png";
    }


    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }


}



navBlock2.onmouseover = function () {
    navBlock2.style.backgroundColor = "white";
    navBlock2.style.borderTop = "solid 2px rgb(255, 183, 49)";
    navBlock2.style.borderBottom = "solid 2px rgb(255, 183, 49)";
    navBlock2.style.cursor = "pointer";
    navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    if (y != 2) {
        pic2.src = "./image/关于蒙牛_mouseover.png";
    }

    bufferMove_nav(stretch2, 95, 1);
    stretch2.style.opacity = 1;
}
stretch2.onmouseover = function () { //当鼠标从外部穿入时才生效
    navBlock2.style.backgroundColor = "white";
    navBlock2.style.borderTop = "solid 2px rgb(255, 183, 49)";
    navBlock2.style.borderBottom = "solid 2px rgb(255, 183, 49)";
    navBlock2.style.cursor = "pointer";
    stretch2.style.display = "flex";
    navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";

    bufferMove_nav(stretch2, 95, 1);
}
navBlock2.onmouseleave = function () {
    bufferMove_nav(stretch2, 0, 0);
    if (y != 2) {

        pic2.src = "./image/关于蒙牛_off.png";
        navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }

}
stretch2.onmouseleave = function () {

    bufferMove_nav(stretch2, 0, 0);


    if (y != 2) {

        navBlock2.removeAttribute("style"); //移除属性，且未移除css中 
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }

}

navBlock3.onmouseover = function () {
    navBlock3.style.cursor = "pointer";
    navBlock3.style.borderTop = "solid 2px rgb(255, 128, 128)";
    navBlock3.style.borderBottom = "solid 2px rgb(255, 128, 128)";
    navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    if (y != 3) {
        pic3.src = "./image/品牌_mouseover.png";
        navBlock3.style.backgroundColor = "white";
    }
    stretch3.style.opacity = 1;
    bufferMove_nav(stretch3, 95,1);
}
stretch3.onmouseover = function () {
    navBlock3.style.backgroundColor = "white";
    navBlock3.style.cursor = "pointer";
    navBlock3.style.borderTop = "solid 2px rgb(255, 128, 128)";
    navBlock3.style.borderBottom = "solid 2px rgb(255, 128, 128)";
    stretch3.style.display = "flex";
    navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    stretch3.style.left = 95 + "px";
    stretch3.style.opacity = 1;
    bufferMove_nav(stretch3, 95);

}
navBlock3.onmouseleave = function () {

    if (y != 3) {

        pic3.src = "./image/品牌_off.png";
        navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    }


    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    bufferMove_nav(stretch3, 0, 0);
}
stretch3.onmouseleave = function () {




    if (y != 3) {

        navBlock3.removeAttribute("style"); //移除属性，且未移除css中 
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    bufferMove_nav(stretch3, 0, 0);
}

navBlock4.onmouseover = function () {
    navBlock4.style.cursor = "pointer";
    navBlock4.style.borderTop = "solid 2px rgb(117, 181, 255)";
    navBlock4.style.borderBottom = "solid 2px rgb(117, 181, 255)";
    navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";

    if (y != 4) {
        navBlock4.style.backgroundColor = "white";
        pic4.src = "./image/可持续发展_mouseover.png";
    }
    bufferMove_nav(stretch4, 95);
    stretch4.style.opacity = 1;
}
stretch4.onmouseover = function () {
    navBlock4.style.backgroundColor = "white";
    navBlock4.style.cursor = "pointer";
    navBlock4.style.borderTop = "solid 2px rgb(117, 181, 255)";
    navBlock4.style.borderBottom = "solid 2px rgb(117, 181, 255)";
    stretch4.style.display = "flex";
    navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    bufferMove_nav(stretch4, 95);
    stretch4.style.opacity = 1;
}
navBlock4.onmouseleave = function () {

    bufferMove_nav(stretch4, 0, 0);
    if (y != 4) {

        pic4.src = "./image/可持续发展_off.png";
        navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    }



    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
}
stretch4.onmouseleave = function () {
    bufferMove_nav(stretch4, 0, 0);


    if (y != 4) {

        navBlock4.removeAttribute("style"); //移除属性，且未移除css中 
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
}

navBlock5.onmouseover = function () {
    bufferMove_nav(stretch5, 95);
    navBlock5.style.cursor = "pointer";
    navBlock5.style.borderTop = "solid 2px rgb(0, 156, 0)";
    navBlock5.style.borderBottom = "solid 2px rgb(0, 156, 0)";
    stretch5.style.display = "flex";
    navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";

    if (y != 5) {
        pic5.src = "./image/新闻与活动_mouseover.png";
        navBlock5.style.backgroundColor = "white";
    }

    stretch5.style.opacity = 1;
}
stretch5.onmouseover = function () {
    bufferMove_nav(stretch5, 95);
    navBlock5.style.backgroundColor = "white";
    navBlock5.style.cursor = "pointer";
    navBlock5.style.borderTop = "solid 2px rgb(0, 156, 0)";
    navBlock5.style.borderBottom = "solid 2px rgb(0, 156, 0)";
    stretch5.style.display = "flex";
    navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";

    stretch5.style.opacity = 1;
}
navBlock5.onmouseleave = function () {

    bufferMove_nav(stretch5, 0, 0);

    if (y != 5) {
        pic5.src = "./image/新闻与活动_off.png";
        navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    }


    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
}
stretch5.onmouseleave = function () {

    bufferMove_nav(stretch5, 0, 0);
    navBlock0.removeAttribute("style"); //移除属性
    if (y != 5) {
        pic5.src = "./image/新闻与活动_off.png";
        navBlock5.removeAttribute("style"); //移除属性，且未移除css中 
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
}

navBlock6.onmouseover = function () {
    navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    navBlock6.style.cursor = "pointer";
    navBlock6.style.borderTop = "solid 2px rgb(255, 183, 49)";
    navBlock6.style.borderBottom = "solid 2px rgb(255, 183, 49)";
    if (y != 6) {
        pic6.src = "./image/招标_mouseover.png";
        navBlock6.style.backgroundColor = "white";
    }
}
navBlock6.onmouseleave = function () {
    if (y != 6) {

        navBlock6.removeAttribute("style");
        pic6.src = "./image/招标_off.png";
    }
    if (y == 1) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 2) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
    if (y == 3) {
        navBlock0.style.backgroundColor = "rgba(255, 128, 128,0.808)";
    }
    if (y == 4) {
        navBlock0.style.backgroundColor = "rgba(117, 181, 255,0.808)";
    }
    if (y == 5) {
        navBlock0.style.backgroundColor = "rgba(0, 156, 0,0.808)";
    }
    if (y == 6) {
        navBlock0.style.backgroundColor = "rgba(255, 183, 49, 0.808)";
    }
}





//导航栏展开部分
var stretch2_1 = document.getElementById("stretch2-1");
var stretch2_2 = document.getElementById("stretch2-2");
var stretch2_3 = document.getElementById("stretch2-3");
var stretch2_4 = document.getElementById("stretch2-4");
var stretch3_1 = document.getElementById("stretch3-1");
var stretch3_2 = document.getElementById("stretch3-2");
var stretch4_1 = document.getElementById("stretch4-1");
var stretch4_2 = document.getElementById("stretch4-2");
var stretch4_3 = document.getElementById("stretch4-3");
var stretch4_4 = document.getElementById("stretch4-4");
var stretch5_1 = document.getElementById("stretch5-1");
var stretch5_2 = document.getElementById("stretch5-2");
stretch2_1.onmouseover = function () {
    stretch2_1.style.backgroundColor = "rgba(255, 250, 100, 0.5)";
}
stretch2_1.onmouseleave = function () {
    stretch2_1.removeAttribute("style");
}
stretch2_2.onmouseover = function () {
    stretch2_2.style.backgroundColor = "rgba(255, 250, 100, 0.5)";
}
stretch2_2.onmouseleave = function () {
    stretch2_2.removeAttribute("style");
}
stretch2_3.onmouseover = function () {
    stretch2_3.style.backgroundColor = "rgba(255, 250, 100, 0.5)";
}
stretch2_3.onmouseleave = function () {
    stretch2_3.removeAttribute("style");
}
stretch2_4.onmouseover = function () {
    stretch2_4.style.backgroundColor = "rgba(255, 250, 100, 0.5)";
}
stretch2_4.onmouseleave = function () {
    stretch2_4.removeAttribute("style");
}
stretch3_1.onmouseover = function () {
    stretch3_1.style.backgroundColor = "rgba(255, 180, 180,0.508)";
}
stretch3_1.onmouseleave = function () {
    stretch3_1.removeAttribute("style");
}
stretch3_2.onmouseover = function () {
    stretch3_2.style.backgroundColor = "rgba(255, 180, 180,0.508)";
}
stretch3_2.onmouseleave = function () {
    stretch3_2.removeAttribute("style");
}
stretch4_1.onmouseover = function () {
    stretch4_1.style.backgroundColor = "rgba(117, 230, 255,0.508)";
}
stretch4_1.onmouseleave = function () {
    stretch4_1.removeAttribute("style");
}
stretch4_2.onmouseover = function () {
    stretch4_2.style.backgroundColor = "rgba(117, 230, 255,0.508)";
}
stretch4_2.onmouseleave = function () {
    stretch4_2.removeAttribute("style");
}
stretch4_3.onmouseover = function () {
    stretch4_3.style.backgroundColor = "rgba(117, 230, 255,0.508)";
}
stretch4_3.onmouseleave = function () {
    stretch4_3.removeAttribute("style");
}
stretch4_4.onmouseover = function () {
    stretch4_4.style.backgroundColor = "rgba(117, 230, 255,0.508)";
}
stretch4_4.onmouseleave = function () {
    stretch4_4.removeAttribute("style");
}
stretch5_1.onmouseover = function () {
    stretch5_1.style.backgroundColor = "rgba(0, 200, 50,0.508)";
}
stretch5_1.onmouseleave = function () {
    stretch5_1.removeAttribute("style");
}
stretch5_2.onmouseover = function () {
    stretch5_2.style.backgroundColor = "rgba(0, 200, 50,0.508)";
}
stretch5_2.onmouseleave = function () {
    stretch5_2.removeAttribute("style");
}






//轮播部分
var roll1 = document.getElementById("roll1");
var x = 0;
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");
var dot6 = document.getElementById("dot6");
/*
滚动事件，未实现
Object.onscroll = function () {
    x = x + 1;
    roll1.style.marginTop = -pageHeight+"px";
}
*/
function bufferMove_change(iTarget) {

    clearInterval(roll1.timer); //为每个赋不同的timer解决冲突
    //offsetTop获取的是不带单位数字，style.top获取的是带单位的字符串，字符串再加上单位就会出错，运算时只能用数字

    roll1.timer = setInterval(function () {

        var speed = (parseInt(iTarget) - roll1.offsetTop) / 14;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (roll1.offsetTop != parseInt(iTarget)) {
            roll1.style.top = roll1.offsetTop + speed + "px";

        }
    }, 10);
}
window.addEventListener("wheel",function(){//滚轮监听
    if(page1.style.display!="none"){
        //当page1在展示时执行
        if(this.event.wheelDelta>=120&&x>0&&roll1.offsetTop%window.innerHeight==0)
        {//当向上滚动，且不是第一张在展示时，且offsetTop%innerHeight为0即上一个运动完成时，执行该命令
            x--;
            bufferMove_change(-x * window.innerHeight);
        }
        if(this.event.wheelDelta<=-120&&x<5&&roll1.offsetTop%window.innerHeight==0)
        {
            x++;
            bufferMove_change(-x * window.innerHeight);
        }


        //buttons
        if (x == 0) {
            dot1.src = "./image/on.png"; //切换图片
            dot2.src = "./image/off.png";
            dot3.src = "./image/off.png";
            dot4.src = "./image/off.png";
            dot5.src = "./image/off.png";
            dot6.src = "./image/off.png";
        }
        if (x == 1) {
            dot2.src = "./image/on.png"; //切换图片
            dot1.src = "./image/off.png";
            dot3.src = "./image/off.png";
            dot4.src = "./image/off.png";
            dot5.src = "./image/off.png";
            dot6.src = "./image/off.png";
        }
        if (x == 2) {
            dot3.src = "./image/on.png"; //切换图片
            dot2.src = "./image/off.png";
            dot1.src = "./image/off.png";
            dot4.src = "./image/off.png";
            dot5.src = "./image/off.png";
            dot6.src = "./image/off.png";
        }
        if (x == 3) {
            dot4.src = "./image/on.png"; //切换图片
            dot2.src = "./image/off.png";
            dot3.src = "./image/off.png";
            dot1.src = "./image/off.png";
            dot5.src = "./image/off.png";
            dot6.src = "./image/off.png";
        }
        if (x == 4) {
            dot5.src = "./image/on.png"; //切换图片
            dot2.src = "./image/off.png";
            dot3.src = "./image/off.png";
            dot4.src = "./image/off.png";
            dot1.src = "./image/off.png";
            dot6.src = "./image/off.png";
        }
        if (x == 5) {
            dot6.src = "./image/on.png"; //切换图片
            dot2.src = "./image/off.png";
            dot3.src = "./image/off.png";
            dot4.src = "./image/off.png";
            dot5.src = "./image/off.png";
            dot1.src = "./image/off.png";
        }
    }

}
)


//转化成position:relative再用top值改变，解决没有offsetMarginTop的问题
dot1.onclick = function () {
    x = 0;
    bufferMove_change(-x * window.innerHeight) //原来用pageHeight，但当网页缩放时未改变

}
dot2.onclick = function () {
    x = 1;
    bufferMove_change(-x * window.innerHeight)

}
dot3.onclick = function () {
    x = 2;
    bufferMove_change(-x * window.innerHeight)

}
dot4.onclick = function () {
    x = 3;
    bufferMove_change(-x * window.innerHeight)

}
dot5.onclick = function () {
    x = 4;
    bufferMove_change(-x * window.innerHeight)

}
dot6.onclick = function () {
    x = 5;
    bufferMove_change(-x * window.innerHeight)

}
buttons.onclick = function () {
    if (x == 0) {
        dot1.src = "./image/on.png"; //切换图片
        dot2.src = "./image/off.png";
        dot3.src = "./image/off.png";
        dot4.src = "./image/off.png";
        dot5.src = "./image/off.png";
        dot6.src = "./image/off.png";
    }
    if (x == 1) {
        dot2.src = "./image/on.png"; //切换图片
        dot1.src = "./image/off.png";
        dot3.src = "./image/off.png";
        dot4.src = "./image/off.png";
        dot5.src = "./image/off.png";
        dot6.src = "./image/off.png";
    }
    if (x == 2) {
        dot3.src = "./image/on.png"; //切换图片
        dot2.src = "./image/off.png";
        dot1.src = "./image/off.png";
        dot4.src = "./image/off.png";
        dot5.src = "./image/off.png";
        dot6.src = "./image/off.png";
    }
    if (x == 3) {
        dot4.src = "./image/on.png"; //切换图片
        dot2.src = "./image/off.png";
        dot3.src = "./image/off.png";
        dot1.src = "./image/off.png";
        dot5.src = "./image/off.png";
        dot6.src = "./image/off.png";
    }
    if (x == 4) {
        dot5.src = "./image/on.png"; //切换图片
        dot2.src = "./image/off.png";
        dot3.src = "./image/off.png";
        dot4.src = "./image/off.png";
        dot1.src = "./image/off.png";
        dot6.src = "./image/off.png";
    }
    if (x == 5) {
        dot6.src = "./image/on.png"; //切换图片
        dot2.src = "./image/off.png";
        dot3.src = "./image/off.png";
        dot4.src = "./image/off.png";
        dot5.src = "./image/off.png";
        dot1.src = "./image/off.png";
    }
}


dot1.onmouseover = function () {
    dot1.style.cursor = "pointer";
}
dot2.onmouseover = function () {
    dot2.style.cursor = "pointer";
}
dot3.onmouseover = function () {
    dot3.style.cursor = "pointer";
}
dot4.onmouseover = function () {
    dot4.style.cursor = "pointer";
}
dot5.onmouseover = function () {
    dot5.style.cursor = "pointer";
}
dot6.onmouseover = function () {
    dot6.style.cursor = "pointer";
}




function bufferMove_pencil(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    //offsetTop获取的是不带单位数字，style.top获取的是带单位的字符串，字符串再加上单位就会出错，运算时只能用数字

    ele.timer = setInterval(function () {

        var speed = (iTarget - ele.offsetWidth) / 6;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetWidth != iTarget) {
            ele.style.width = ele.offsetWidth + speed + "px";
        }
    }, 10);
}



//page2
for(i=0;i<bottom2_a.length;i++)
{
    bottom2_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom2_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
pencil1.onmouseover = function () {
    /*
    picture2_1.style.width = (window.innerWidth - 95) * 9 / 33 + "px";
    picture2_2.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_3.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_4.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    */
    bufferMove_pencil(picture2_1, parseInt((window.innerWidth - 95) * 9 / 33));
    pencil1_block.style.color = "#F39E38";
    pencil1_block.style.backgroundColor = "white";
}
pencil1.onmouseleave = function () {
    /*
    picture2_1.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_2.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_3.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_4.style.width = (window.innerWidth - 95) / 4 + "px";
    */
    bufferMove_pencil(picture2_1, parseInt((window.innerWidth - 95) / 4));
    pencil1_block.style.color = "white";
    pencil1_block.style.backgroundColor = "";

}

pencil2.onmouseover = function () {
    /*
    picture2_2.style.width = (window.innerWidth - 95) * 9 / 33 + "px";
    picture2_1.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_3.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_4.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    */
    bufferMove_pencil(picture2_2, parseInt((window.innerWidth - 95) * 9 / 33));//取整去除抖动问题
    pencil2_block.style.color = "#EB6B64";
    pencil2_block.style.backgroundColor = "white";
}
pencil2.onmouseleave = function () {
    /*
    picture2_1.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_2.style.width = (pageWidth - 95) / 4 + "px";
    picture2_3.style.width = (pageWidth - 95) / 4 + "px";
    picture2_4.style.width = (pageWidth - 95) / 4 + "px";
    bufferMove_pencil(picture2_2,(pageWidth - 95) / 4);
    */
    bufferMove_pencil(picture2_2, parseInt((window.innerWidth - 95) / 4));
    pencil2_block.style.color = "white";
    pencil2_block.style.backgroundColor = "";

}

pencil3.onmouseover = function () {
    /*
    picture2_3.style.width = (window.innerWidth - 95) * 9 / 33 + "px";
    picture2_1.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_2.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_4.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    */
    bufferMove_pencil(picture2_3, parseInt((window.innerWidth - 95) * 9 / 33));
    pencil3_block.style.color = "#71BDE4";
    pencil3_block.style.backgroundColor = "white";

}
pencil3.onmouseleave = function () {
    /*
    picture2_1.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_2.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_3.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_4.style.width = (window.innerWidth - 95) / 4 + "px";
    */
    bufferMove_pencil(picture2_3, parseInt((window.innerWidth - 95) / 4));
    pencil3_block.style.color = "white";
    pencil3_block.style.backgroundColor = "";
}

pencil4.onmouseover = function () {
    /*
    picture2_4.style.width = (window.innerWidth - 95) * 9 / 33 + "px";
    picture2_1.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_2.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    picture2_3.style.width = (window.innerWidth - 95) * 8 / 33 + "px";
    */
    bufferMove_pencil(picture2_4, parseInt((window.innerWidth - 95) * 9 / 33));
    pencil4_block.style.color = "#81C043";
    pencil4_block.style.backgroundColor = "white";
}
pencil4.onmouseleave = function () {
    /*
    picture2_1.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_2.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_3.style.width = (window.innerWidth - 95) / 4 + "px";
    picture2_4.style.width = (window.innerWidth - 95) / 4 + "px";
    */
    bufferMove_pencil(picture2_4, parseInt((window.innerWidth - 95) / 4));
    pencil4_block.style.color = "white";
    pencil4_block.style.backgroundColor = "";
}

weibo2.onmouseover = function () {
    weibo2.src = "./image/weibo_on.png";
}
weibo2.onmouseleave = function () {
    weibo2.src = "./image/weibo_off.png";
}
weixin2.onmouseover = function () {
    weixin2.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode2, 35);
    QRcode2.style.padding = 10 + "px";

}
weixin2.onmouseleave = function () {
    weixin2.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode2, 0);
    QRcode2.style.padding = 0 + "px";

}


function bufferMove_drops(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    //offsetTop获取的是不带单位数字，style.top获取的是带单位的字符串，字符串再加上单位就会出错，运算时只能用数字

    ele.timer = setInterval(function () {

        var speed = (iTarget - ele.offsetHeight) / 12;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetHeight != iTarget) {
            ele.style.height = ele.offsetHeight + speed + "px";
        }
    }, 10);
}

function bufferMove_backgroundPic(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    ele.timer = setInterval(function () {
        var speed = (iTarget - ele.offsetHeight) / 12;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetHeight != iTarget) {
            ele.style.height = ele.offsetHeight + speed + "px";
        }
    }, 10);
}
//page3
for(i=0;i<bottom3_a.length;i++)
{
    bottom3_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom3_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
weibo3.onmouseover = function () {
    weibo3.src = "./image/weibo_on.png";
}
weibo3.onmouseleave = function () {
    weibo3.src = "./image/weibo_off.png";
}
weixin3.onmouseover = function () {
    weixin3.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode3, 35);
    QRcode3.style.padding = 10 + "px";

}
weixin3.onmouseleave = function () {
    weixin3.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode3, 0);
    QRcode3.style.padding = 0 + "px";

}
page3_window1.onmouseover = function () {
    //pic3_1.style.height = 1.05 * window.innerHeight + "px";
    //page3_drop1_img.style.height=250+"px";
    bufferMove_drops(page3_drop1_img, 250);
    bufferMove_backgroundPic(pic3_1, parseInt(window.innerHeight * 1.05));


}
page3_window1.onmouseleave = function () {
    bufferMove_backgroundPic(pic3_1, parseInt(window.innerHeight));
    bufferMove_drops(page3_drop1_img, 300);


}
page3_window2.onmouseover = function () {
    //   pic3_2.style.height = 1.05 * window.innerHeight + "px";
    bufferMove_drops(page3_drop2_img, 250);
    bufferMove_backgroundPic(pic3_2, parseInt(window.innerHeight * 1.05));

}
page3_window2.onmouseleave = function () {
    // pic3_2.style.height = window.innerHeight + "px";
    bufferMove_drops(page3_drop2_img, 300);
    bufferMove_backgroundPic(pic3_2, parseInt(window.innerHeight));
}

page3_drop1.onmouseover = function () {
    page3_drop1_block.style.color = "#F39E38";
    page3_drop1_block.style.background = "white";
}
page3_drop1.onmouseleave = function () {
    page3_drop1_block.style.color = "white";
    page3_drop1_block.style.background = "";
}
page3_drop2.onmouseover = function () {
    page3_drop2_block.style.color = "#F39E38";
    page3_drop2_block.style.background = "white";
}
page3_drop2.onmouseleave = function () {
    page3_drop2_block.style.color = "white";
    page3_drop2_block.style.background = "";
}





//page4
for(i=0;i<bottom4_a.length;i++)
{
    bottom4_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom4_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
//直接挤就好了,而且没设置page4的宽度,只设了flex和direction
function bufferMove_page4_width(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    ele.timer = setInterval(function () {
        var speed = (iTarget - ele.offsetWidth) / 12;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetWidth != iTarget) {
            ele.style.width = ele.offsetWidth + speed + "px";
        }
    }, 10);
}
page4_window1.onmouseover = function () {
    //page4_window1.style.width = 2 / 5 * window.innerWidth + "px"
    bufferMove_page4_width(page4_window1,parseInt(2 / 5 * window.innerWidth));
}
page4_window1.onmouseleave = function () {
    bufferMove_page4_width(page4_window1,parseInt(1 / 4 * window.innerWidth));
}
page4_window2.onmouseover = function () {
    bufferMove_page4_width(page4_window2,parseInt(2 / 5 * window.innerWidth));
}
page4_window2.onmouseleave = function () {
    bufferMove_page4_width(page4_window2,parseInt(1 / 4 * window.innerWidth));
}
page4_window3.onmouseover = function () {
    bufferMove_page4_width(page4_window3,parseInt(2 / 5 * window.innerWidth));
}
page4_window3.onmouseleave = function () {
    bufferMove_page4_width(page4_window3,parseInt(1 / 4 * window.innerWidth));
}
page4_window4.onmouseover = function () {
    bufferMove_page4_width(page4_window4,parseInt(2 / 5 * window.innerWidth));
}
page4_window4.onmouseleave = function () {
    bufferMove_page4_width(page4_window4,parseInt(1 / 4 * window.innerWidth));
}

weibo4.onmouseover = function () {
    weibo4.src = "./image/weibo_on.png";
}
weibo4.onmouseleave = function () {
    weibo4.src = "./image/weibo_off.png";
}
weixin4.onmouseover = function () {
    weixin4.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode4, 35);
    QRcode4.style.padding = 10 + "px";

}
weixin4.onmouseleave = function () {
    weixin4.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode4, 0);
    QRcode4.style.padding = 0 + "px";
}






//page5
for(i=0;i<bottom5_a.length;i++)
{
    bottom5_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom5_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
function bufferMove_page5_width(ele, iTarget) {

    clearInterval(ele.timer); //为每个赋不同的timer解决冲突
    ele.timer = setInterval(function () {
        var speed = (iTarget - ele.offsetWidth) / 12;
        speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed); //避免速度值出现小数的状况，因为元素有关的像素值必须为整数
        if (ele.offsetWidth != iTarget) {
            ele.style.width = ele.offsetWidth + speed + "px";
        }
    }, 10);
}
weibo5.onmouseover = function () {
    weibo5.src = "./image/weibo_on.png";
}
weibo5.onmouseleave = function () {
    weibo5.src = "./image/weibo_off.png";
}
weixin5.onmouseover = function () {
    weixin5.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode5, 35);
    QRcode5.style.padding = 10 + "px";

}
weixin5.onmouseleave = function () {
    weixin5.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode5, 0);
    QRcode5.style.padding = 0 + "px";
}

pic5_1_block.onmouseover = function () {
    //pic5_1.style.width = 1.05 * pageWidth + "px";
    bufferMove_page5_width(pic5_1,1.05 * window.innerWidth);
    bufferMove_drops(page5drop1_img,250);
}
pic5_1_block.onmouseleave = function () {
    bufferMove_page5_width(pic5_1,window.innerWidth);
    bufferMove_drops(page5drop1_img,500);
}
pic5_2_block.onmouseover = function () {
    bufferMove_page5_width(pic5_2,1.05 * window.innerWidth);
    bufferMove_drops(page5drop2_img,180);
}
pic5_2_block.onmouseleave = function () {
    bufferMove_page5_width(pic5_2,window.innerWidth);
    bufferMove_drops(page5drop2_img,250);
}
page5drop1.onmouseover=function(){
    bufferMove_drops(page5drop1_img,250);
    page5drop1_block.style.color = "#EB6B64";
    page5drop1_block.style.background = "white";
}
page5drop1.onmouseleave=function(){
    page5drop1_block.style.color = "white";
    page5drop1_block.style.background = "";
}

page5drop2.onmouseover=function(){
    bufferMove_drops(page5drop2_img,180);
    page5drop2_block.style.color = "#71BDE4";
    page5drop2_block.style.background = "white";
    
}
page5drop2.onmouseleave=function(){
    page5drop2_block.style.color = "white";
    page5drop2_block.style.background = "";
}




//page6
for(i=0;i<elements_a.length;i++)
{
    elements_a[i].onmouseover=function(){
        this.style.textDecoration="underline";
    }
    elements_a[i].onmouseleave=function(){
        this.style.textDecoration="";
    }
}
for(i=0;i<bottom6_a.length;i++)
{
    bottom6_a[i].onmouseover=function(){
        this.style.color="white";//直接用this就行，用bottom_a[i]会出错
    }
    bottom6_a[i].onmouseleave=function(){
        this.style.color="";
    }
}
weibo6.onmouseover = function () {
    weibo6.src = "./image/weibo_on.png";

}
weibo6.onmouseleave = function () {
    weibo6.src = "./image/weibo_off.png";
}
weixin6.onmouseover = function () {
    weixin6.src = "./image/weixin_on.png";
    bufferMove_QRcode(QRcode6, 35);
    QRcode6.style.padding = 10 + "px";

}
weixin6.onmouseleave = function () {
    weixin6.src = "./image/weixin_off.png";
    bufferMove_QRcode(QRcode6, 0);
    QRcode6.style.padding = 0 + "px";
}
