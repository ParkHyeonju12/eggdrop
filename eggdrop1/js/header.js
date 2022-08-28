$(".navi-ul").on("mouseover",function(){
  const subWrap = $(".sub-wrap");
  subWrap.css("display","block");
});
$(".navi").on("mouseleave",function(){
  const subWrap = $(".sub-wrap");
  subWrap.css("display","none");
});