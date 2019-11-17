
var banner_item=document.getElementById("banner").children;
var prev=document.getElementById("prev");
var prev=document.getElementById("next");
var x=0;
next.onclick=function(){
    x++;
    for(var i=0;i<banner_item.length;i++){
        banner_item[i].style.display="none";
    }
    banner_item[x].style.display="block";
}
