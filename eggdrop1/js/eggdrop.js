const ul = $(".slide-wrap>ul");
const lastImg = ul.children().last().clone();
ul.prepend(lastImg);
const firstImg = ul.children().eq(1).clone();
ul.append(firstImg);
const imgCount = ul.children().length;
const width = 1220;
ul.css("width",(width*imgCount)+"px");
let imgNo = 1;
ul.css("transform","translateX("+(imgNo*-1220)+"px");
let intervalId;

$(".prev").on("click",function(){
    if(imgNo != 0){
        clearInterval(intervalId);
        imgNo--;
        const move = -imgNo*width;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo == 0){ 
            imgNo = imgCount-2;
            setTimeout(function(){
                const move = -imgNo*width;
                ul.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        autoSlide();
    }
});

$(".next").on("click",function(){
    if(imgNo != imgCount-1){
        clearInterval(intervalId);
        imgNo++;
        const move = -imgNo*width;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo == imgCount-1){
            imgNo = 1;
            setTimeout(function(){
                const move = -imgNo*width;
                ul.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        autoSlide();
    }
});

function autoSlide(){
    intervalId = setInterval(function(){
        $(".next").click();
    },2.5*1000);
}
autoSlide();

$(".navi-ul").on("mouseover",function(){
    const subWrap = $(".sub-wrap");
    subWrap.css("display","block");
});
$(".navi").on("mouseleave",function(){
    const subWrap = $(".sub-wrap");
    subWrap.css("display","none");
});

// const ul = $(".slide-wrap>ul");
// const lastImg = ul.children().last().clone();
// ul.prepend(lastImg);
// const firstImg = ul.children().eq(1).clone();
// ul.append(firstImg);
// const imgCount = ul.children().length;
// const width = 1220;
// ul.css("width",(width*imgCount)+"px");
// let imgNo = 1;
// ul.css("transform","cu("+(imgNo*-1220)+"px");
// let intervalId;
/*
const menuUl = $(".menu-ul2");
const lastImg2 = menuUl.children().last().clone();
menuUl.prepend(lastImg2);
const firstImg2 = menuUl.children().last().clone();
menuUl.append(firstImg2);
const imgCount2 = menuUl.children().length;
const width2 = 500;
menuUl.css("width",(width2*imgCount2)+"px");
let imgNo2 = 1;
const menuUlAll = $(".menu-ul2>*")
menuUlAll.css("transform","transrateX(-300px)");
let intervalId2;


$(".prev2").on("click",function(){
    if(imgNo != 0){
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo2 == 0){ 
            imgNo2 = imgCount2-2;
            setTimeout(function(){
                const move = -imgNo2*width2;
                menuUl.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        autoSlide2();
    }
});

$(".next2").on("click",function(){
    if(imgNo2 != imgCount2-1){
        const move = -imgNo*width2;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo2 == imgCount2-1){
            imgNo2 = 1;
            setTimeout(function(){
                const move = -imgNo2*width2;
                menuUl.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        autoSlide2();
    }
});

function autoSlide2(){
    intervalId2 = setInterval(function(){
        $(".next2").click();
    },2.5*1000);
}
autoSlide2(); */

