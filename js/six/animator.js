/*
* 动画函数封装
*
* 动画函数单独封装到JS文件里面
* */
//动画函数添加回调函数
//回调函数原理：函数可以作为一个参数。见这个函数作为参数传到另一个函数里面，当那个函数执行完之后，在执行穿进去的这个函数，这个过程就叫做回调
function animate(obj, target, callback) {
    obj.style.left = obj.offsetLeft + 'px';
    console.log("target=====" + target);
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback)
                callback();
        } else {
            obj.style.left = (parseInt(obj.style.left) + (((target - obj.offsetLeft) / 10) > 0 ? Math.ceil((target - obj.offsetLeft) / 10) : Math.floor((target - obj.offsetLeft) / 10))) + 'px';
        }
    }, 10);
}

