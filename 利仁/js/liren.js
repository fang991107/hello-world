//nav二级菜单
var show = document.querySelectorAll('.show');
var subnav = document.querySelector('.subnav');
var subnav1 = document.querySelectorAll('.subnav1')
// console.log(subnav1);
for (var i = 0; i < subnav1.length; i++) {
    show[i].index = i;
    show[i].onmouseover = function () {
        for (var j = 0; j < show.length; j++) {
            subnav1[j].className = 'subnav1 active';
        }

        subnav.className = 'hide subnav';
        subnav1[this.index].className = 'hide subnav1';

        subnav.onmouseover = function () {
            this.className = 'hide subnav';
        }
        subnav.onmouseout = function () {
            this.className = 'subnav';
        }

    }
    show[i].onmouseout = function () {
        subnav.className = 'subnav';
    }


}

//中间轮播图
var newLLunbo = document.querySelector('.new-l-lunbo');
var lunboList = document.querySelector('.lunbo-list');
var flag1 = 0;
var interid1;
function autoplay1() {
    interid1 = setInterval(function () {
        flag1++;
        if (flag1 == lunboList.children.length) {
            // 拉回到top=0
            lunboList.style.top = 0;
            flag1 = 1;
        };

        // 移动当前的ul使图片进行移动
        var target = flag1 * (-20);
        moveAnimation(lunboList, target);
    }, 2000);
}
autoplay1();
lunboList.onmouseover = function () {
    clearInterval(interid1);

};
lunboList.onmouseout = function () {
    autoplay1();
};
function moveAnimation(ele, target) {
    clearInterval(ele.interId);
    ele.interId = setInterval(function () {
        if (ele.offsetTop == target) {
            clearInterval(ele.interId);
        } else {
            var slowStep = (target - ele.offsetTop) / 10;
            slowStep = slowStep < 0 ? Math.floor(slowStep) : Math.ceil(slowStep);
            ele.style.top = ele.offsetTop + slowStep + 'px';
        }
    }, 50);
}
//视频部分
var shipin = document.querySelector('#shipin');
var blockUI = document.querySelector('.blockUI');
var all = document.querySelector('.all');
var blockMsg = document.querySelector('.blockMsg');

shipin.onclick = function () {
    var videoEle = document.createElement('video');
    videoEle.src = 'images/amazfit.mp4';
    videoEle.autoplay = true;
    videoEle.controls = true;
    videoEle.loop = true;
    blockMsg.appendChild(videoEle);
    all.style.display = 'block';
    blockMsg.style.display = 'block';
    all.onclick = function () {
        blockMsg.removeChild(videoEle);
        all.style.display = 'none';
        blockMsg.style.display = 'none';
    }
}

//下部product
var lis = document.querySelectorAll('.footer1');
var product = document.querySelectorAll('.product_1');
// for (var j = 0; j < product.length; j++) {
// }

var clearActive = function () {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = 'footer1';
    }
}

lis[0].onclick = function () {
    clearActive();
    product[0].style.display = 'block';
    product[1].style.display = 'block';
    product[2].style.display = 'block';
    product[3].style.display = 'block';
    this.className = 'footer1 active1';
}
lis[1].onclick = function () {
    clearActive();
    product[3].style.display = 'none';
    this.className = 'footer1 active2';
}
lis[2].onclick = function () {
    clearActive();
    product[2].style.display = 'none';
    this.className = 'footer1 active3';
}
lis[3].onclick = function () {
    clearActive();
    product[1].style.display = 'none';
    this.className = 'footer1 active4';
}
lis[4].onclick = function () {
    clearActive();
    product[0].style.display = 'block';
    product[1].style.display = 'block';
    product[2].style.display = 'block';
    product[3].style.display = 'block';
    this.className = 'footer1 active1';
}
// 换一换
var change = document.querySelector('.Change');
change.onclick = function () {
    product[3].style.display = 'none';
}







