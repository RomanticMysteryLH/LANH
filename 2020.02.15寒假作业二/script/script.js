window.onload = function () {
    var blocks = document.getElementById('blocks');
    var block = blocks.getElementsByTagName('div');
    var board = document.getElementById('board');
    var userPoint = document.getElementById('point');
    var difficulty = document.getElementById('difficulty');
    var low = document.getElementById('low');
    var middle = document.getElementById('middle');
    var high = document.getElementById('high');
    var restart = document.getElementById('restart');
    var i = 0;
    var state = 1; //1为off,0为on,2为结束，3为暂停
    var startTip = document.getElementById('startTip');
    var countNumbers = document.getElementById('count');
    var countNum = countNumbers.getElementsByTagName('p');
    xTimer = null;
    yTimer = null;
    point = 0;
    blocks.number = block.length;
    var myAudio=document.getElementById('audioPlayer');
    var winAudio=document.getElementById('win');
    var loseAudio=document.getElementById('lose');
    var endTip=document.getElementById('endTip');
    var winTip=document.getElementById('winTip');
    var windowHeight=window.innerHeight;
    var myBody=document.getElementsByTagName('body');
    if(windowHeight>1080)
    {
        myBody[0].style.zoom=110+'%';
    }
    if(windowHeight>=900&&windowHeight<=1080)
    {
        myBody[0].style.zoom=100+'%';
    }
    if(windowHeight<900&&windowHeight>=820)
    {
        myBody[0].style.zoom=90+'%' ;
    }
    if(windowHeight<820&&windowHeight>=750)
    {
        myBody[0].style.zoom=80+'%';
    }
    if(windowHeight<750)
    {
        myBody[0].style.zoom=70+'%';
    }
    alert('游戏规则：用键盘上、下、左、右键移动挡板，反弹小球，破坏所有砖块即为游戏胜利，倘若挡板未接到小球则为游戏失败。');
    alert('请选择难度:低:基础分0；中：基础分20；高：基础分40。');
    //offsetWidth包括了边框而width不包括;left不被margin影响而offsetLeft会被margin影响
    //alert(myAudio.paused);
    //木板
    document.onkeydown = function (ev) {
        var oEvent = ev || event;
        //alert(oEvent.keyCode);
        //左：37  右：39  上：38  下：40   esc:27

        if (oEvent.keyCode == 37 && xTimer == null && board.offsetLeft > 0) { //当xTimer==null时开启定时器，避免定时器多开
            xTimer = setInterval(function () { //javascript中也可以隐式的使用变量，就是不用声明，直接使用。而且，千万注意，javascript把隐式声明的变量总是当成全局变量来使用的。
                board.style.left = board.offsetLeft - 7 + 'px';
                if (board.offsetLeft < 0) {
                    board.style.left = 0 + 'px'; //当offsetLeft值为负时直接令它为0
                }
            }, 15)
        }
        if (oEvent.keyCode == 39 && xTimer == null && board.offsetLeft < 960) {
            xTimer = setInterval(function () {
                board.style.left = board.offsetLeft + 7 + 'px';
                if (board.offsetLeft > 960) {
                    board.style.left = 960 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 15)
        }

        if (oEvent.keyCode == 38 && yTimer == null && board.offsetTop >= 300) {
            yTimer = setInterval(function () {
                board.style.top = board.offsetTop - 2 + 'px';
                if (board.offsetTop <= 400) {
                    board.style.top = 400 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 15)
        }
        if (oEvent.keyCode == 40 && yTimer == null && board.offsetTop <= 600) {
            yTimer = setInterval(function () {
                board.style.top = board.offsetTop + 2 + 'px';
                if (board.offsetTop >= 600) {
                    board.style.top = 600 + 'px'; //一定要加单位否则无法正确赋值
                }
            }, 15)
        }
        //esc暂停
        if (oEvent.keyCode == 27 && state == 0) {
                alert('暂停中，点击确定按钮继续');
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
        if (oEvent.keyCode == 38) {
            clearInterval(yTimer);
            yTimer = null;
        }
        if (oEvent.keyCode == 40) {
            clearInterval(yTimer);
            yTimer = null;
        }
    }

    //小球
    var ball = document.getElementById('ball');
    var x = Math.round(Math.random() * 9); //获取0到9的随机数，0和9的概率小1/2
    if (x <= 4) {
        xSpeed = Math.round(Math.random() * 3) + 2
    } else if (x >= 5) {
        xSpeed = -Math.round(Math.random() * 3) - 2;
    }
    ySpeed = Math.round(Math.random() * 2) + 2;

    function start() {
        timerBall = setInterval(function () {
            ball.style.left = ball.offsetLeft + xSpeed + 'px';
            ball.style.top = ball.offsetTop - ySpeed + 'px';
            if (ball.offsetLeft <= 0 || ball.offsetLeft >= 1030) {
                xSpeed = -xSpeed;
            }
            if (ball.offsetTop <= 2) {
                ySpeed = -ySpeed;
            }
            if ( /*木板反弹*/ (ball.offsetTop >= board.offsetTop - 6) && (ball.offsetTop <= board.offsetTop) && (ball.offsetLeft >= board.offsetLeft) && (ball.offsetLeft <= board.offsetLeft + 82) && (ySpeed < 0)
                /*ball.offsetTop >= board.offsetTop - 6*/
            ) {
                ySpeed = -ySpeed;
                console.log('改');
            }
            if (ball.offsetTop >= 600 && state != 1) {
                clearInterval(timerBall);
                clearInterval(xTimer);
                clearInterval(yTimer);
                if(myAudio.paused==false)//当背景音乐不被暂停时才转换音效，false不加引号
                {
                    
                    myAudio.pause();
                    loseAudio.play();
                }
                endTip.style.display='block';
                state = 2;

            }
            //砖块
            for (i = 0; i < block.length; i++) { //ball的左边距加ball的半宽度为小球撞击的横向范围
                if ((i + 1) % 8 == 0 && block[i].style.visibility != "hidden") { //最右边的两个木板由于i+1%8=0,无法正确计算右边距，需要单独计算
                    if (ball.offsetLeft >= i % 8 * 132 - 5 && ball.offsetLeft <= 8 * 132 - 5 && ball.offsetTop >= 27 * parseInt(i / 8) && ball.offsetTop <= 27 * (parseInt(i / 8) + 1)) {
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        ySpeed = -ySpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                    } else if (ball.offsetLeft >= i % 8 * 132 - 10 && ball.offsetLeft <= 8 * 132 - 10 && ball.offsetTop >= 27 * parseInt(i / 8) - 5 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 5) {
                        //小球右边碰撞
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        xSpeed = -xSpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                    } else if (ball.offsetLeft >= i % 8 * 132 && ball.offsetLeft <= 8 * 132 && ball.offsetTop >= 27 * parseInt(i / 8) - 5 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 5) {
                        //小球左边碰撞
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        xSpeed = -xSpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                    } else if (ball.offsetLeft >= i % 8 * 132 - 5 && ball.offsetLeft <= 8 * 132 - 5 && ball.offsetTop >= 27 * parseInt(i / 8) - 10 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 10) {
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        ySpeed = -ySpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                    }
                }

                if ((i + 1) % 8 != 0 && block[i].style.visibility != "hidden") {
                    if (ball.offsetLeft >= i % 8 * 132 - 5 && ball.offsetLeft <= (i + 1) % 8 * 132 - 5 && ball.offsetTop >= 27 * parseInt(i / 8) && ball.offsetTop <= 27 * (parseInt(i / 8) + 1)) {
                        //小球上方碰撞
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        ySpeed = -ySpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                        console.log('上');
                    } else if (ball.offsetLeft >= i % 8 * 132 - 10 && ball.offsetLeft <= (i + 1) % 8 * 132 - 10 && ball.offsetTop >= 27 * parseInt(i / 8) - 5 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 5) {
                        //小球右边碰撞
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        xSpeed = -xSpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                        console.log('木板');
                        console.log('右');
                        console.log('下一步');
                    } else if (ball.offsetLeft >= i % 8 * 132 && ball.offsetLeft <= (i + 1) % 8 * 132 && ball.offsetTop >= 27 * parseInt(i / 8) - 5 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 5) {
                        //小球左边碰撞
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        xSpeed = -xSpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                        console.log('左')
                    } else if (ball.offsetLeft >= i % 8 * 132 - 5 && ball.offsetLeft <= (i + 1) % 8 * 132 - 5 && ball.offsetTop >= 27 * parseInt(i / 8) - 10 && ball.offsetTop <= 27 * (parseInt(i / 8) + 1) - 10) {
                        block[i].style.visibility = "hidden"; //visibility属性能够保留位置
                        ySpeed = -ySpeed;
                        point = point + 10;
                        blocks.number = blocks.number - 1;
                    }
                    //不加else if可能两个同时触发
                    /*console.log('木板');
                    console.log('ball.offsetLeft='+ball.offsetLeft);
                    console.log('i % 8 * 132-5='+(i % 8 * 132-5));
                    console.log('(i + 1) % 8 * 132-5='+((i + 1) % 8 * 132-5));
                    console.log('ball.offsetTop='+ball.offsetTop);
                    console.log('27 * (parseInt(i / 8) + 1)='+27 * (parseInt(i / 8) + 1));
                    console.log(i+1);
                    console.log(point);
                    console.log('下一步');*/
                }
            }
            //console.log('剩余：' + blocks.number);
            if (blocks.number == 0) {
                if(myAudio.paused==false)
                {
                    myAudio.pause();
                    winAudio.play();
                }
                winTip.innerHTML="敲墙成功，得分："+point;
                winTip.style.display='block';
                clearInterval(timerBall);
                clearInterval(xTimer);
                clearInterval(yTimer);

            }
            userPoint.innerHTML = "得分：" + point;
        }, 15)
    }

    function count() {
        var j = 1;
        countNum[0].style.display = 'block';
        count = setInterval(function () {
            if (j != countNum.length) {
                countNum[j].style.display = 'block';
            }
            if (j != 0) {
                countNum[j - 1].style.display = 'none';
            }
            j = j + 1;
            if (j > countNum.length) {
                clearInterval(count);
            }
        }, 1000)
    }

    low.onclick = function () {

        if (state == 1) {
            if (x <= 4) {
                xSpeed = Math.round(Math.random() * 3) + 2
            } else if (x >= 5) {
                xSpeed = -Math.round(Math.random() * 3) - 2;
            }
            startTip.style.display = 'none';
            count();
            ySpeed = Math.round(Math.random() * 2) + 2;
            setTimeout(start, 3000);
            difficulty.innerHTML = "难度：看看剧情~";
            state = 0;
            userPoint.innerHTML = "得分：" + point;
        }


    }
    middle.onclick = function () {

        if (state == 1) {
            if (x <= 4) {
                xSpeed = Math.round(Math.random() * 3) + 4
            } else if (x >= 5) {
                xSpeed = -Math.round(Math.random() * 3) - 4;
            }
            startTip.style.display = 'none';
            count();
            ySpeed = Math.round(Math.random() * 2) + 3;
            setTimeout(start, 3000);
            difficulty.innerHTML = "难度：想流点汗😥";
            point = 20;
            state = 0;
            userPoint.innerHTML = "得分：" + point;
        }

    }
    high.onclick = function () {
        if (state == 1) {
            if (x <= 4) {
                xSpeed = Math.round(Math.random() * 3) + 6
            } else if (x >= 5) {
                xSpeed = -Math.round(Math.random() * 3) - 6;
            }
            startTip.style.display = 'none';
            count();
            ySpeed = Math.round(Math.random() * 2) + 4;
            setTimeout(start, 3000); //setTimeout中函数需要去括号或加引号
            difficulty.innerHTML = "难度：死而无憾+_+";
            point = 40;
            state = 0;
            userPoint.innerHTML = "得分：" + point;
        }
    }



    //按钮
    restart.onclick = function () {
        location.reload();
    }

};
//version 1.0 首个版本
//version 1.05 修改了界面颜色
//version 1.1 加入版本号,加入了游戏名称：‘敲墙师傅’；修改了死亡后点击任意难度能复活的bug；增加了按钮、box的阴影;更改了砖块厚度
//version 2.0 增加了挡板的上下移动；修复了挡板移动中反弹小球判断不成功的问题，增加开始游戏提示；更新了难度名称
//version 2.1 增加了游戏开始延迟和倒计时功能;增加了挡板的阴影
//version 2.2 添加了bgm，提升了挡板的移动速度，删除了暂停功能
//version 2.3 通过弹窗实现暂停功能
//version 2.4 载入时根据窗口大小调整缩放