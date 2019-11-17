var banner=document.getElementById("banner")
var banner_item=document.getElementById("banner").children;
var one1=document.getElementById("one1");
var two2=document.getElementById("two2");
var three3=document.getElementById("three3");
var x=0;
var image=document.getElementById("image")
/* one1.onclick=function(){
    x=0;
    banner.style.marginleft=-x*1700+"px";
}
two2.onclick=function(){
    x=1;
    banner.style.marginleft=-x*1700+"px";
    console.log('点击了点2')
}
three3.onclick=function(){
    x=2;
    banner.style.marginleft=-x*1700+"px";
    console.log('点击了点3')
} */

one1.onclick=function(){
    x=0;
    banner.style.marginLeft=-x*1700+"px";//marginLeft中L为大写
    time=0;
} 
two2.onclick=function(){
    x=1;
    time=0;
} 
three3.onclick=function(){
    x=2;
    banner.style.marginLeft=-x*1700+"px";
    time=0;
} 

var goNext = function(){//自动返回
    if(x == 2){
        x = 0;
    }else{
        x++;
    }
    banner.style.marginLeft=-x*1700+"px";
    
}
var time=0;//定时器
setInterval(function(){
    time++;
    if(time == 20){//一定是==
        goNext();
        time=0;
    }
},100)

function changeImage()
{
	element=document.getElementById('image')
	if (element.src.match("1.png"))
	{
		element.src="./2.png";
	}
	else
	{
		element.src="./1.png";
	}
}
