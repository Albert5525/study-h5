window.onload = function () {
    var mask = document.querySelector(`.mask`);
    var big = document.querySelector(`.big`);
    var big_img = big.querySelector(`img`);
    var preview_img = document.querySelector(`.preview_img`);
    preview_img.addEventListener("mouseover", function (e) {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener("mouseleave", function (e) {
        mask.style.display = 'none';
        big.style.display = 'none';
        big_img.style.transform = "translate(0px,0px)";
    });
    var translateX = '0px';
    var translateY = '0px';

    //计算鼠标在盒子内的坐标
    preview_img.addEventListener("mousemove", function (e) {
        var left_min_x = preview_img.offsetLeft + mask.offsetWidth * 0.5;
        var left_max_x = preview_img.offsetLeft + preview_img.offsetWidth - mask.offsetWidth * 0.5;

        var top_min_y = preview_img.offsetTop + mask.offsetHeight * 0.5;
        var top_max_y = preview_img.offsetTop + preview_img.offsetHeight - mask.offsetHeight * 0.5;
        if ((e.pageX > left_min_x && e.pageX < left_max_x)) {
            mask.style.left = (e.pageX - preview_img.offsetLeft - mask.offsetWidth * 0.5) + 'px';
            translateX = (-(parseInt(mask.style.left) * (big_img.offsetWidth - big.offsetWidth)) / (left_max_x - left_min_x)) + 'px';


        }
        if (e.pageY > top_min_y && e.pageY < top_max_y) {
            mask.style.top = (e.pageY - preview_img.offsetTop - mask.offsetHeight * 0.5) + 'px';
            translateY = (-(parseInt(mask.style.top) * (big_img.offsetHeight - big.offsetHeight)) / (top_max_y - top_min_y)) + 'px';
        }
        big_img.style.transform = "translate(" + translateX + "," + translateY + ")";
    });
}