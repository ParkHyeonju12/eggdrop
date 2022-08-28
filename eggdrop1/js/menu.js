const menu = $(".menu-menu>ul>li");
let clickIndex;
menu.on("click", function(){
    clickIndex = menu.index(this);

    menu.css("color", "black");
    menu.eq(clickIndex).css("color", "#ea0029");
    menu.css("border-bottom", "none");
    menu.eq(clickIndex).css("border-bottom", "3px solid #ea0029");

    $(".menu-content").hide();
    $(".menu-content").eq(clickIndex).show();
});
menu.eq(0).click();

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

const content = $(".menu-content-wrap>.menu-content>ul>li");
content.on("mouseenter", function(){
    const index = content.index(this);
    content.eq(index).css("color", "#ea0029");
});
content.on("mouseleave", function(){
    const index = content.index(this);
    content.eq(index).css("color", "black");
});