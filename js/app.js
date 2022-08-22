$('li').click(function(){
    $('.hoverd').removeClass('active')
    $(this).children('div').addClass('active');
    setTimeout(() =>{
        let divData = $('.'+$(this).data("section")+"-section")[0].scrollIntoView();
    },10)
})

onload = () =>{
    document.documentElement.style.setProperty("--dark-color","#ddd")
    document.documentElement.style.setProperty("--dark-color-2","#fff")
    document.documentElement.style.setProperty("--white-color","#5d5d5d")
    document.documentElement.style.setProperty("--white-color-2","#000");
    localStorage.setItem("root",JSON.stringify({"dark_color":"#ddd","dark_color2":"#fff","white_color":"#000","white_color_2":"#000","display":"none"}))
    dark_light()
}

if(window.matchMedia("(max-width:767px)").matches){
    $('.li-items-portfolio').addClass("toggle");
    $('.navbar').removeClass("toggle")
    $('.portfolio-container').removeClass("toggle");
    $(".toggle-menu-porto").click(function(){
        $('.li-items-portfolio').toggleClass("toggle");
        $('.navbar').toggleClass("toggle")
        $('.portfolio-container').toggleClass("toggle");
    });
}else{
    $(".toggle-menu-porto").click(function(){
        $('.li-items-portfolio').toggleClass("toggle");
        $('.navbar').toggleClass("toggle")
        $('.portfolio-container').toggleClass("toggle")
    });
}
let root = JSON.parse(localStorage.getItem("root"))
function dark_light(){
    if(root){
        if(root.dark_color === "#202c37"){
            $('.dark').show()
            $('.light').hide()
        }
        if(root.dark_color === "#ddd"){
            $('.dark').hide()
            $('.light').show()
        }
        document.documentElement.style.setProperty("--dark-color",root.dark_color)
        document.documentElement.style.setProperty("--dark-color-2",root.dark_color2)
        document.documentElement.style.setProperty("--white-color",root.white_color)
        document.documentElement.style.setProperty("--white-color-2",root.white_color_2);
    }
}
dark_mode = (e) =>{
    $(e).next().show()
    $(e).hide()
    document.documentElement.style.setProperty("--dark-color","#ddd")
    document.documentElement.style.setProperty("--dark-color-2","#fff")
    document.documentElement.style.setProperty("--white-color","#5d5d5d")
    document.documentElement.style.setProperty("--white-color-2","#000");
    localStorage.setItem("root",JSON.stringify({"dark_color":"#ddd","dark_color2":"#fff","white_color":"#000","white_color_2":"#000","display":"none"}))
}
light_mode = (e) =>{
    $(e).prev().show()
    $(e).hide()
    document.documentElement.style.setProperty("--dark-color","#202c37")
    document.documentElement.style.setProperty("--dark-color-2","#2b3945")
    document.documentElement.style.setProperty("--white-color","#fff")
    document.documentElement.style.setProperty("--white-color-2","#fff")
    localStorage.setItem("root",JSON.stringify({"dark_color":"#202c37","dark_color2":"#2b3945","white_color":"#fff","white_color_2":"#fff","display":"none"}))
}
$(document).ready(function(){
    $("body").css("overflow","hidden")
    setTimeout(() => {
        $("body").css("overflow","visible");
        $(".loading").fadeOut()
    }, 2000);
})


$(document).on("scroll",function(){
    window.scrollY>=$('.home-section')[0].offsetTop ? $("li").children('div').removeClass('active') && $(".home").children('div').addClass('active')  : ""    
    window.scrollY>=$('.about-section')[0].offsetTop ? $("li").children('div').removeClass('active') && $(".about").children('div').addClass('active')  : ""    
    window.scrollY>=$('.skills-section')[0].offsetTop ? $("li").children('div').removeClass('active') && $(".skills").children('div').addClass('active')  : ""    
    window.scrollY>=$('.works-section')[0].offsetTop ? $("li").children('div').removeClass('active') && $(".works").children('div').addClass('active')  : ""    
    window.scrollY>=$('.contact-section')[0].offsetTop ? $("li").children('div').removeClass('active') && $(".contact").children('div').addClass('active')  : ""
    window.scrollY>=100 ? $('.scroll-top').fadeIn().addClass("out") : $('.scroll-top').fadeOut().removeClass("out");
})