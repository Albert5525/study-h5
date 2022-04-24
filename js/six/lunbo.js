window.addEventListener("load", function () {
    /*
    * 节流阀
    *
    * 防止轮播图按钮连续点击造成播放过快
    * 节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发
    * 核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数
    * 开始设置一个变量var flag=true
    * if(flag){flag=false;do something} 关闭水龙头
    * 利用回调函数 动画执行完毕，flag=true  打开水龙头
    * */


    var index = 0;//定义变量用来存储小圆圈的下标
    var lunbotimer;//定义变量用来存储定时器对象
    var time = 5000;//定时器间隔的时间
    var focus_left = document.querySelector(".focus-left");
    var focus_right = document.querySelector(".focus-right");
    // var span = document.querySelector("span");
    var lunbo_container = document.querySelector(".lunbo_container");
    var ul = lunbo_container.querySelector("ul");
    var ol = lunbo_container.querySelector("ol");
    ul.style.width = ul.children[0].offsetWidth * ul.children.length + 'px';


    //动态生成小圆圈并添加事件
    for (let i = 0; i < ul.children.length; i++) {
        var htmlliElement = document.createElement('li');
        htmlliElement.addEventListener("click", function () {
            addClass(ol.children, "current", i);
            index = i;
            animate(ul, -721 * i);
        })
        ol.appendChild(htmlliElement);
    }
    //给第一个小圆圈添加颜色
    addClass(ol.children, "current", 0);


    //给ul添加鼠标经过与离开事件（鼠标经过自动播放停止，鼠标离开自动播放）
    ul.addEventListener("mouseenter", function () {
        focus_left.style.display = 'block';
        focus_left.style.zIndex = 9;
        focus_right.style.display = 'block';
        focus_right.style.zIndex = 9;
        clearInterval(lunbotimer);
    });
    ul.addEventListener("mouseleave", function () {
        focus_left.style.display = 'none';
        focus_right.style.display = 'none';
        startLunboTimer(time);
    })


    //给左右按钮添加点击事件
    focus_left.addEventListener("click", function () {
        moveImg(-1);
    });
    focus_right.addEventListener("click", function () {
        moveImg(1);
    })

    //调用定时器
    startLunboTimer(time);


    //启动定时器的方法
    function startLunboTimer(time) {
        console.log("startTimer====" + index);
        //以防万一，再启动定时器之前先清除一下定时器
        clearInterval(lunbotimer);
        lunbotimer = setInterval(function () {
            moveImg(1);
        }, time);
    }


    //给一组元素中的一个元素添加特定的样式
    function addClass(list, className, addIndex) {
        for (let i = 0; i < list.length; i++) {
            list[i].className = '';
        }
        list[addIndex].className = className;
    }

    //左右移动图片的方法，如果是-1则向左移动，如果是1则向右移动
    function moveImg(move) {
        index += 1 * move;
        console.log("index += 1 * move;====" + index);
        if (index > ul.children.length - 1) {
            index = 0;
        }
        if (index < 0) {
            index = ul.children.length - 1;
        }
        addClass(ol.children, "current", index);
        animate(ul, -721 * index);

    }
})