//banner轮播图
//按钮轮播
var preBtn = document.querySelector('.left');
var nextBtn = document.querySelector('.right');
var banner01 = document.querySelectorAll('.banner01');
var index = 0;
var clearActive1 = function () {
    for (var i = 0; i < banner01.length; i++) {
        banner01[i].className = 'banner01';
        circles[i].className = 'circle';
    }
}
var goIndex = function () {
    clearActive1();
    circles[index].className = 'circle Flag';
    banner01[index].className = 'banner01 Flag';
}
var goNext = function () {
    if (index < 9) {
        index++;
    } else {
        index = 0;
    }

    goIndex();
}
var goPre = function () {
    if (index == 0) {
        index = 9;
    } else {
        index--;
    }

    goIndex();
}
nextBtn.addEventListener('click', function () {
    goNext();
});
preBtn.addEventListener('click', function () {
    goPre();
});
//焦点轮播
var circles = document.querySelectorAll('.circle');
for (var i = 0; i < circles.length; i++) {
    circles[i].onclick = function () {
        var circlesIndex = this.getAttribute('data-index');
        index = circlesIndex;
        goIndex();
    }
}
//自动轮播
var intervalId = setInterval(function () {
    goNext();
}, 3000)