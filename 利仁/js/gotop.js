//回到顶部
var gotop = document.querySelector(".gotop");
var gotops = document.querySelector("#gotops");
var sale=document.querySelector('.sale');
var goTop=document.querySelector('.goTop');
//固定出现
window.onscroll = function(){
    if(window.pageYOffset >= 200){
        goTop.style.marginTop='0px';        
    }else if(window.pageYOffset < 200){
        goTop.style.marginTop='93px'; 
    }
}

//回到顶部
gotops.onclick = function(){
    scroll(0,0);
}