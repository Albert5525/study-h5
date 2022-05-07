window.addEventListener("load", function () {
    /*
    * 本地存储
    * 随着互联网的快速发展，给予王爷的应用越来越多，同时也变得越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案
    *
    * 本地存储特性
    * 1.数据存储在用户浏览器中
    * 2-prototype.设置，获取方便，甚至页面刷新不丢失数据
    * 3.容量较大，sessionStorage越5M，localStorage越20M
    * 4.只能存储字符串，可以将对象JSON.stringify()编码后存储
    *
    *
    * 1)window.sessionStorage
    *   1.生命周期为关闭浏览器窗口
    *   2-prototype.在同一个窗口(页面)下数据可以共享
    *   3.以键值对的形式存储使用
    * 存储数据：
    *   sessionStorage.setItem(key,value);
    * 获取数据：
    *   sessionStorage.getItem(key);
    * 删除数据：
    *   sessionStorage.removeItem(key);
    * 删除所有数据：
    *   sessionStorage.clear()
    *
    * 2-prototype)window.localStorage
    *   1.生命周期永久生效，除非手动关闭，否则关闭页面后也会存在
    *   2-prototype.可以多窗口(页面)共享(同一个浏览器可以共享)
    *   3.以键值对的形式存储使用
    * 存储数据：
    *   localStorage.setItem(key,val)
    * 获取数据：
    *   localStorage.getItem(key)
    * 删除数据：
    *   localStorage.removeItem(key)
    * */
    var username = document.querySelector("#username");
    var remember = document.querySelector("#remember");
    remember.checked = true;
    if (localStorage.getItem("username") != null) {
        username.value = localStorage.getItem("username");
    } else {
        username.value = "";
    }

    username.addEventListener("keyup",function (){
        console.log(this.value);
        if (remember.checked) {
            localStorage.setItem("username", username.value);
        }
    });
    remember.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("username", username.value);
        } else
            localStorage.removeItem("username");
    })


});