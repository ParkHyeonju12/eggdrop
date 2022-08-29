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

//헤더 호버시 내려오는 함수
$(".navi-ul").on("mouseover",function(){
    const subWrap = $(".sub-wrap");
    subWrap.css("display","block");
});
$(".navi").on("mouseleave",function(){
    const subWrap = $(".sub-wrap");
    subWrap.css("display","none");
});

//메뉴 슬라이드 
setInterval(fnSlide, 3000);
function fnSlide() {
  $(".menu-ul2").animate({ "margin-left": "-500px" }, 1200, function () {
    $(".menu-ul2").css({ "margin-left": "-8px" });
    $(".menu-ul2>li:first-child").insertAfter(".menu-ul2>li:last-child");
  });
};