window.addEventListener("load", function() {
    /*
    *   在ES6中类灭有 变量提升，所以必须限定一类，才能通过实例化
    *   类里面的共有的属性和方法一定要加this使用
    *   this问题：
    *       constructor里面的this指向的是  创建的实例对象
    *       方法中的this指向不清楚，只有在调用的时候才清楚，this指向调用者
    *
    *
    * */
    var currentIndex = 0;

    class Tab {
        constructor(id) {
            this.tab = document.querySelector(id);
            this.lis = this.tab.querySelectorAll("li");
            this.secs = this.tab.querySelectorAll("section");
            this.init();
        }

        init() {
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].addEventListener("click", function() {
                    currentIndex = this.index;
                    tab.toggle(this.index);
                    console.log(this.index);
                });
            }
            for (let i = 0; i < this.secs.length; i++) {
                this.secs[i].index = i;
            }
        }

        toggle(index) {
            for (let i = 0; i < this.lis.length; i++) {
                this.secs[i].className = "";
                this.lis[i].className = "";
                if (index == i) {
                    this.lis[i].className = "liactive";
                    this.secs[i].className = "conactive";
                }
            }
        }

        add() {

        }

        remove() {

        }

        edit() {

        }
    }

    let tab = new Tab("#tab");

    function Star(uname, pass) {
        this.uname = name;
        this.pass = pass;

    }
    var ldh = new Star("ldh", "ldh");
    console.log(ldh);
    console.log(Star);
});