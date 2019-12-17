//后三个轮播图
//后两个轮播图存在bug：当点击向右按钮到最后一张或下个循环的第一张时，再按向左按钮，会出现空白页；向左同理。
var roll=document.getElementById("roll");
var button_left=document.getElementById("button-left");
var button_right=document.getElementById("button-right");
var x=10;//1600/160=10故初始值为10
var roll2=document.getElementById("roll2");
var button_left2=document.getElementById("button-left2");
var button_right2=document.getElementById("button-right2");
var i=0;
var roll3=document.getElementById("roll3");
var button_left3=document.getElementById("button-left3");
var button_right3=document.getElementById("button-right3");
var j=0;

button_left.onclick=function(){
      x=x-1;
      roll.style.marginLeft=-x*160+"px";
      if(x<=-0)
      x=10;
      console.log('点击了左')
      console.log(x)
}
button_right.onclick=function(){
      x=x+1;
      roll.style.marginLeft=-x*160+"px";//突然就行了，需要使用getElementById,并且在html中添加id
      console.log('点击了右');
      if(x>=20)
      x=10;
      console.log(x);
}


button_left2.onclick=function(){
      i=i-1;
      roll2.style.marginLeft=-i*1120+"px";
      console.log('点击了点1');
      if(i<=0)
      i=4;
}
button_right2.onclick=function(){
      i=i+1;
      roll2.style.marginLeft=-i*1120+"px";
      if(i>=3)
      i=-1;
}


button_left3.onclick=function(){
      j=j-1;
      roll3.style.marginLeft=-j*1120+"px";
      if(j<=0)
      j=3;
}
button_right3.onclick=function(){
      j=j+1;
      roll3.style.marginLeft=-j*1120+"px";
      if(j>=2)
      j=-1;
}


//黑色块轮播

var part1=document.getElementById("part1");
var part2=document.getElementById("part2");
var part3=document.getElementById("part3");
var part4=document.getElementById("part4");
var part5=document.getElementById("part5");
var part6=document.getElementById("part6");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
var p5=document.getElementById("p5");
var p6=document.getElementById("p6");
/*var part=newAray()
part[1]=document.getElementById('part1');
part[2]=document.getElementById('part2');
part[3]=document.getElementById('part3');
part[4]=document.getElementById('part4');
part[5]=document.getElementById('part5');
part[6]=document.getElementById('part6');
*/
p1.onclick=function(){
      //控制右边部分

      part1.style.display="block";//记得加上引号
      part2.style.display="none";
      part3.style.display="none";
      part4.style.display="none";
      part5.style.display="none";
      part6.style.display="none";
     //控制左边部分
      p1.style.textDecoration="underline";//控制左边的文字下划线
      
      p2.style.textDecoration="none";
      p3.style.textDecoration="none";
      p4.style.textDecoration="none";
      p5.style.textDecoration="none";
      p6.style.textDecoration="none";
      p1.style.margin=5+"px";
      p2.style.margin=0+"px";
      p3.style.margin=0+"px";
      p4.style.margin=0+"px";
      p5.style.margin=0+"px";
      p6.style.margin=0+"px";
  }
p2.onclick=function(){
    part2.style.display="block";//记得加上引号
    part1.style.display="none";
    part3.style.display="none";
    part4.style.display="none";
    part5.style.display="none";
    part6.style.display="none";

    p2.style.textDecoration="underline";
    
    p1.style.textDecoration="none";
    p3.style.textDecoration="none";
    p4.style.textDecoration="none";
    p5.style.textDecoration="none";
    p6.style.textDecoration="none";
    p2.style.margin=5+"px";
    p1.style.margin=0+"px";
    p3.style.margin=0+"px";
    p4.style.margin=0+"px";
    p5.style.margin=0+"px";
    p6.style.margin=0+"px";
}

p3.onclick=function(){
      part3.style.display="block";//记得加上引号
      part1.style.display="none";
      part2.style.display="none";
      part4.style.display="none";
      part5.style.display="none";
      part6.style.display="none";
      p3.style.textDecoration="underline";
      p2.style.textDecoration="none";
      p1.style.textDecoration="none";
      p4.style.textDecoration="none";
      p5.style.textDecoration="none";
      p6.style.textDecoration="none";
      p3.style.margin=5+"px";
      p2.style.margin=0+"px";
      p1.style.margin=0+"px";
      p4.style.margin=0+"px";
      p5.style.margin=0+"px";
      p6.style.margin=0+"px";
}

p4.onclick=function(){
      part4.style.display="block";//记得加上引号
      part1.style.display="none";
      part2.style.display="none";
      part3.style.display="none";
      part5.style.display="none";
      part6.style.display="none";
      p4.style.textDecoration="underline";
      p2.style.textDecoration="none";
      p3.style.textDecoration="none";
      p1.style.textDecoration="none";
      p5.style.textDecoration="none";
      p6.style.textDecoration="none";
      p4.style.margin=5+"px";
      p1.style.margin=0+"px";
      p2.style.margin=0+"px";
      p3.style.margin=0+"px";
      p5.style.margin=0+"px";
      p6.style.margin=0+"px";
}

p5.onclick=function(){
      part5.style.display="block";//记得加上引号
      part1.style.display="none";
      part3.style.display="none";
      part4.style.display="none";
      part2.style.display="none";
      part6.style.display="none";
      p5.style.textDecoration="underline";
      p2.style.textDecoration="none";
      p3.style.textDecoration="none";
      p4.style.textDecoration="none";
      p1.style.textDecoration="none";
      p6.style.textDecoration="none";
      p5.style.margin=5+"px";
      p1.style.margin=0+"px";
      p3.style.margin=0+"px";
      p4.style.margin=0+"px";
      p2.style.margin=0+"px";
      p6.style.margin=0+"px";
  }

  p6.onclick=function(){
      part6.style.display="block";//记得加上引号
      part1.style.display="none";
      part3.style.display="none";
      part4.style.display="none";
      part5.style.display="none";
      part2.style.display="none";
      p6.style.textDecoration="underline";
      p2.style.textDecoration="none";
      p3.style.textDecoration="none";
      p4.style.textDecoration="none";
      p5.style.textDecoration="none";
      p1.style.textDecoration="none";
      p6.style.margin=5+"px";
      p1.style.margin=0+"px";
      p3.style.margin=0+"px";
      p4.style.margin=0+"px";
      p5.style.margin=0+"px";
      p2.style.margin=0+"px";
  }


  //Visual Studio工作负载 小盒子展开
//小盒子展开后无法收回
  var a1=document.getElementById('a1');
  var a2=document.getElementById('a2');
  var a3=document.getElementById('a3');
  var a4=document.getElementById('a4');
  var a1_button=document.getElementById("a1-button");
  var a2_button=document.getElementById("a2-button");
  var a3_button=document.getElementById("a3-button");
  var a4_button=document.getElementById("a4-button");
  var b1=document.getElementById('b1');
  var b2=document.getElementById('b2');
  var b3=document.getElementById('b3');
  var b1_button=document.getElementById("b1-button");
  var b2_button=document.getElementById("b2-button");
  var b3_button=document.getElementById("b3-button");
  var c1=document.getElementById('c1');
  var c2=document.getElementById('c2');
  var c3=document.getElementById('c3');
  var c4=document.getElementById('c4');
  var c1_button=document.getElementById("c1-button");
  var c2_button=document.getElementById("c2-button");
  var c3_button=document.getElementById("c3-button");
  var c4_button=document.getElementById("c4-button");
  
  window.onload=function(){
        this.a1.style.display="none";
        this.a2.style.display="none";
        this.a3.style.display="none";
        this.a4.style.display="none";
        this.b1.style.display="none";
        this.b2.style.display="none";
        this.b3.style.display="none";
        this.c1.style.display="none";
        this.c2.style.display="none";
        this.c3.style.display="none";
        this.c4.style.display="none";
  }
  a1_button.onclick=function(){
        
        if(a1.style.display=="none")//注意要使用==，但还是出现了问题：点击第二次时才能展开
        {
        a1.style.display="block";
        a2.style.display="none";
        a3.style.display="none";
        a4.style.display="none";
        b1.style.display="none";
        b2.style.display="none";
        b3.style.display="none";
        c1.style.display="none";
        c2.style.display="none";
        c3.style.display="none";
        c4.style.display="none";
        }
        else{
              a1.style.display="none";
        }
        
  }
  a2_button.onclick=function(){
        if(a2.style.display=="none"){
      a2.style.display="block";
      a1.style.display="none";
      a3.style.display="none";
      a4.style.display="none";
      b1.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
        }
        else{
              a2.style.display="none";
      }
}
a3_button.onclick=function(){
      if(a3.style.display=="none"){
      a3.style.display="block";
      a2.style.display="none";
      a1.style.display="none";
      a4.style.display="none";
      b1.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else{
            a3.style.display="none";
      }
      
}
a4_button.onclick=function(){
      if(a4.style.display=="none"){
      a4.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b1.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else{
            a4.style.display="none";
      }
}

b1_button.onclick=function(){
      if(b1.style.display=="none"){
      b1.style.display="block";
      a1.style.display="none";
      a3.style.display="none";
      a4.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else{
      b1.style.display="none";
      }
}
b2_button.onclick=function(){
      if(b2.style.display=="none"){
      b2.style.display="block";
      a2.style.display="none";
      a1.style.display="none";
      a4.style.display="none";
      b1.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else
      b2.style.display="none";
}
b3_button.onclick=function(){
      if(b3.style.display=="none"){
      b3.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b2.style.display="none";
      b1.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else
      b3.style.display="none";
}
c1_button.onclick=function(){
      if(c1.style.display=="none"){
      c1.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b2.style.display="none";
      b1.style.display="none";
      b3.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else
      c1.style.display="none";
}
c2_button.onclick=function(){
      if(c2.style.display=="none"){
      c2.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b2.style.display="none";
      b1.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c3.style.display="none";
      c4.style.display="none";
      }
      else
      c2.style.display="none";
}
c3_button.onclick=function(){
      if(c3.style.display=="none"){
      c3.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b1.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c4.style.display="none";
      }
      else
      c3.style.display="none";
}
c4_button.onclick=function(){
      if(c4.style.display=="none"){
      c4.style.display="block";
      a2.style.display="none";
      a3.style.display="none";
      a1.style.display="none";
      b1.style.display="none";
      b2.style.display="none";
      b3.style.display="none";
      c1.style.display="none";
      c2.style.display="none";
      c3.style.display="none";
      }
      else
      c4.style.display="none";
}