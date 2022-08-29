const menu = $(".about-menu>ul>li");
let clickIndex;
const header = $(".about-header");

menu.on("click", function(){
    clickIndex = menu.index(this);

    menu.css("color", "black");
    menu.eq(clickIndex).css("color", "#ea0029");
    menu.css("border-bottom", "none");
    menu.eq(clickIndex).css("border-bottom", "3px solid #ea0029");

    header.hide();
    header.eq(clickIndex).show();

    $(".about-content").hide();
    $(".about-content").eq(clickIndex).show();
});

menu.eq(0).click();
header.eq(0).show();

menu.on("mouseenter", function(){
    const index = menu.index(this);

    menu.eq(index).css("color", "#ea0029");
    menu.eq(index).css("border-bottom", "3px solid #ea0029");
});

menu.on("mouseleave", function(){
    const index = menu.index(this);

    if(index != clickIndex){
        menu.eq(index).css("color", "black");
        menu.eq(index).css("border-bottom", "none");
    }
});