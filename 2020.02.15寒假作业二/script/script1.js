window.onload = function () {
    //alert('游戏规则：用键盘左右上下键移动挡板，反弹小球，破坏所有砖块即为游戏胜利，倘若挡板未接到小球则为游戏失败');
    var blocks = document.getElementById('blocks');
    var block = document.getElementsByTagName('div');
    var board = document.getElementById('board');
    var point= document.getElementById('point');
    var difficulty=document.getElementById('difficulty');
    var i = 0;
    xTimer = null;
    yTimer = null;
    for (i = 0; i < block.length; i++) {

    };
    //offsetWidth包括了边框而width不包括;left不被margin影响而offsetLeft会被margin影响

    //木板
    document.onkeydown = function (ev) {
        var oEvent = ev || event;
        //alert(oEvent.keyCode);
        //左：37  右：39  上：38  下：40
        if (oEvent.keyCode == 37 && xTimer == null && board.offsetLeft > 0) { //当xTimer==null时开启定时器，避免定时器多开
            xTimer = setInterval(function () { //javascript中也可以隐式的使用变量，就是不用声明，直接使用。而且，千万注意，javascript把隐式声明的变量总是当成全局变量来使用的。
                board.style.left = board.offsetLeft - 5 + 'px';
                if (board.offsetLeft < 0) {
                    board.style.left = 0 + 'px'; //当offsetLeft值为负时直接令它为0
                }
            }, 10)
        }
        if (oEvent.keyCode == 39 && xTimer == null && board.offsetLeft < 960) {
            xTimer = setInterval(function () {
                board.style.left = board.offsetLeft + 5 + 'px';
                if (board.offsetLeft > 960) {
                    board.style.left = 960 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 10)
        }
        if (oEvent.keyCode == 38 && yTimer == null && board.offsetTop >= 300) {
            yTimer = setInterval(function () {
                board.style.top = board.offsetTop - 2 + 'px';
                if (board.offsetTop <= 300) {
                    board.style.top = 300 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 10)
        }
        if (oEvent.keyCode == 40 && yTimer == null && board.offsetTop <= 600) {
            yTimer = setInterval(function () {
                board.style.top = board.offsetTop + 2 + 'px';
                if (board.offsetTop >= 600) {
                    board.style.top = 600 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 10)
        }
    };
    document.onkeyup = function (ev) {
        var oEvent = ev || event;
        if (oEvent.keyCode == 37) {
            clearInterval(xTimer);
            xTimer = null;
        } 
        if (oEvent.keyCode == 39) {
            clearInterval(xTimer);
            xTimer = null;
            
        }
        if(oEvent.keyCode==38){
            clearInterval(yTimer);
            yTimer=null;
        } 
        if(oEvent.keyCode==40)
        {
            clearInterval(yTimer);
            yTimer=null;
        }
    }


    //小球
    var ball=document.getElementById('ball');
    xSpeed=6;
    ySpeed=2;
    timerBall=setInterval(function(){
        ball.style.left=ball.offsetLeft+xSpeed+'px';
        ball.style.top=ball.offsetTop-ySpeed+'px';
        if(ball.offsetLeft<=0||ball.offsetLeft>=1030)
        {
            xSpeed=-xSpeed;
        }
        if(ball.offsetTop<=44)
        {
            ySpeed=-ySpeed;
        }
        if((ball.offsetTop>=board.offsetTop-6)&&(ball.offsetTop<=board.offsetTop)&&(ball.offsetLeft>=board.offsetLeft)&&(ball.offsetLeft<=board.offsetLeft+82))
        {
            ySpeed=-ySpeed;//可以通过判断ySpeed的正负实现只反弹一次
            console.log('改');
        }
        if(ball.offsetTop>=600)
        {
            alert('游戏结束');
            clearInterval(timerBall);
            clearInterval(xTimer);
            clearInterval(yTimer);
        }
        point.innerHTML="'得分：'+point";
    },10)
    

};