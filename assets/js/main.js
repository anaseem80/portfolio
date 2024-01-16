(function ($) {

    var windowOn = $(window);

    // testimonial Slider
    var testimonial = new Swiper(".sc-testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });

    // portfolio Slider
    var portfolio = new Swiper(".sc-portfolio-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });

    // project Slider
    var project = new Swiper(".sc-project-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // brand Slider
    var brand = new Swiper(".sc-brand-slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: {
            delay: 9000,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    });
    
    /*-- naseem scroll top scripts start --*/
    var naseemScrollTop = document.querySelector(".naseem-scroll-top");
    if (naseemScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".naseem-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                naseemScrollTop.classList.add("progress-done");
            } else {
                naseemScrollTop.classList.remove("progress-done");
            }
        });
        naseemScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }

    //  search bar
    $(".search-btn").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });

    $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("search-popup-overlay-open");
    });

    // Header Sticky  Js
    windowOn.on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#sc-header-sticky").removeClass("sc-header-sticky");
        } else {
            $("#sc-header-sticky").addClass("sc-header-sticky");
        }
    });

    jQuery(document).ready(function ($) {
        let autoPlayDelay = 1500;
        let options = {
            init: true,
            // Optional parameters
            loop: false,

            autoplay: {
                delay: autoPlayDelay,
            },
            slidesPerView: 4,
            spaceBetween: 30,

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };

        let mySwiper = new Swiper(".swiper-container", options);
        let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
        let widthParts = 100 / slidersCount;
        $(".swiper-counter .total").html(slidersCount);
        for (let i = 0; i < slidersCount; i++) {
            $(".swiper-progress-bar .progress-sections").append("<span></span>");
        }
        function initProgressBar() {
            let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
            calcProgress += autoPlayDelay;
            $(".swiper-progress-bar .progress").animate(
                {
                    width: "100%",
                },
                calcProgress,
                "linear"
            );
        }
        initProgressBar();

        mySwiper.on("slideChange", function () {
            let progress = $(".swiper-progress-bar .progress");

            $(".swiper-counter .current").html(this.activeIndex + 1);

            if (
                (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
                !progress.parent().is(".stopped")
            ) {
                progress.css("width", "0");
                if (this.activeIndex == 0) {
                    initProgressBar();
                }
            }

            if (progress.parent().is(".stopped")) {
                progress.animate(
                    {
                        width: Math.round(widthParts * (this.activeIndex + 1)) + "%",
                    },
                    this.params.speed,
                    "linear"
                );
            }
        });

        mySwiper.on("touchMove", function () {
            $(".swiper-progress-bar .progress").stop().parent().addClass("stopped");
        });
    });

    // modal js
    $('.modal-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

    /*-- Heading Animation --*/
    let sc_animation1 = gsap.utils.toArray(".sc-animation1");
    let homeStratup = gsap.timeline();
    let sc_animation2 = document.querySelector(".sc-animation2");
    let sc_animation3 = document.querySelector(".sc-animation3");

    let sc_animation4 = document.querySelector(".sc-animation4");
    let sc_animation5 = document.querySelector(".sc-animation5");
    let sc_animation6 = document.querySelector(".sc-animation6");

    gsap.set(sc_animation4, {
        opacity: 0,
        y: 50,
    });
    gsap.set(sc_animation5, {
        opacity: 0,
        y: 50,
    });
    gsap.set(sc_animation6, {
        opacity: 0,
        y: 50,
    });
    let sc_animation2_split = new SplitText(sc_animation2, { type: "chars" });
    let sc_animation3_split = new SplitText(sc_animation3, { type: "chars words" });
    homeStratup.from(sc_animation2_split.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
    homeStratup.from(sc_animation3_split.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
    homeStratup.to(sc_animation4, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5");
    homeStratup.to(sc_animation5, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");
    homeStratup.to(sc_animation6, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5");
    sc_animation1.forEach((headingAnimationLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingAnimationLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const headingSplitLine = new SplitText(headingAnimationLine, { type: "words" });
        gsap.set(headingAnimationLine, { perspective: 400 });
        headingSplitLine.split({ type: "words" });
        tl.from(headingSplitLine.words, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -50,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

    // Section Title Animation
    let splitTitleLines = gsap.utils.toArray(".sec-animation");
    splitTitleLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

    // 25. Title Animation
    let splitListLines = gsap.utils.toArray(".listing-animation");
    splitListLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

    //canvas sidebar
    var canva_expander = $("#canva_expander");
    if (canva_expander.length) {
        $("#canva_expander, #canva_close, #sc-overlay-bg2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

    $(".mobile-navbar-menu a").each(function () {
        var href = $(this).attr("href");
        if ((href = "#")) {
            $(this).addClass("hash");
        } else {
            $(this).removeClass("hash");
        }
    });

    $.fn.menumaker = function (options) {
        var mobile_menu = $(this),
            settings = $.extend(
                {
                    format: "dropdown",
                    sticky: false,
                },
                options
            );

        return this.each(function () {
            mobile_menu.find("li ul").parent().addClass("has-sub");
            var multiTg = function () {
                mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
                mobile_menu.find(".hash").parent().addClass("hash-has-sub");
                mobile_menu.find(".submenu-button").on("click", function () {
                    if ($(this).parent().siblings("li").hasClass("active")) {
                        $(this).parent().siblings("li").removeClass("active");
                        $(this).parent().siblings("li").find(".submenu-button").removeClass("submenu-opened");
                        $(this).parent().addClass("active");
                        $(this).addClass("submenu-opened");
                        if (
                            $(this).parent().siblings("li").find(".submenu-button").siblings("ul").hasClass("open-sub")
                        ) {
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .removeClass("open-sub")
                                .hide("fadeIn");
                            $(this).parent().siblings("li").find(".submenu-button").siblings("ul").hide("fadeIn");
                        } else {
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .addClass("open-sub")
                                .hide("fadeIn");
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .slideToggle()
                                .show("fadeIn");
                        }

                        if ($(this).siblings("ul").hasClass("open-sub")) {
                            $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").hide("fadeIn");
                            $(this).parent().removeClass("active");
                            $(this).removeClass("submenu-opened");
                        } else {
                            $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").slideToggle().show("fadeIn");
                        }
                    } else {
                        $(this).parent().addClass("active");
                        $(this).addClass("submenu-opened");
                        if ($(this).siblings("ul").hasClass("open-sub")) {
                            $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").hide("fadeIn");
                            $(this).parent().removeClass("active");
                            $(this).removeClass("submenu-opened");
                        } else {
                            $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").slideToggle().show("fadeIn");
                        }
                    }
                });
            };

            if (settings.format === "multitoggle") multiTg();
            else mobile_menu.addClass("dropdown");
            if (settings.sticky === true) mobile_menu.css("position", "fixed");
            var resizeFix = function () {
                if ($(window).width() > 991) {
                    mobile_menu.find("ul").show("fadeIn");
                    mobile_menu.find("ul.sub-menu").hide("fadeIn");
                }
            };
            resizeFix();
            return $(window).on("resize", resizeFix);
        });
    };

    // Sal Animation
    sal({
        threshold: 0.1,
        once: true,
    });
    
    $(document).ready(function () {
        $("#mobile-navbar-menu").menumaker({
            format: "multitoggle",
        });
    });

    $(document).ready(function () {
        // ========== odometer initialize==========
        $(".odometer").appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    });

    // video js
    var popupvideos = $(".popup-videos-button");
    if (popupvideos.length) {
        $(".popup-videos-button").magnificPopup({
            disableOn: 10,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    }

    // Smooth Scroll
    $(function() {
        $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

    // Select Box Style
    var servicesSelect = $(".select-services");
    if (servicesSelect.length) {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "Services":*/
        x = document.getElementsByClassName("select-services");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
            and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
      except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        document.addEventListener("click", closeAllSelect);
    }
    $(window).on("load", function () {
        // Animate loader off screen
        const preloader = $(".preloader");
        preloader.delay(600).fadeOut();
    });
})(jQuery);




function SendMail(e){
    var data = $('.project-form-box').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    // console.log(data)
    $(".submit-form-btn").attr("disabled", "true")
    $(".submit-form .loader").fadeIn()
    emailjs.send("service_vfq4wfm","template_lt6g24n",data).then(response =>{
        $(".submit-form .loader").fadeOut()
        $(".submit-form-btn").removeAttr("disabled")
        $(".form-input").each(function(){
            $(this).val("")
        })
        if(response.status == 200){
            toastr.success('Your email has been sent succesfully! 😍');
        }else{
            toastr.error('Something went wrong! 😰');
        }
    });
}


window.SmoothScrollOptions = {
	// Scrolling Core
	animationTime: 700, // [ms]
	stepSize: 80, // [px]

	// Acceleration
	accelerationDelta: 50, // 50
	accelerationMax: 3, // 3

	// Keyboard Settings
	keyboardSupport: true, // option
	arrowScroll: 50, // [px]

	// Pulse (less tweakable)
	// ratio of "tail" to "acceleration"
	pulseAlgorithm: true,
	pulseScale: 4,
	pulseNormalize: 1,

	// Other
	touchpadSupport: false, // ignore touchpad by default
	fixedBackground: true,
	excluded          : ''  
}


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector(".sc-header-section");
    let prevScrollPos = window.pageYOffset;
    function toggleNavbar() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
              navbar.classList.add('visible-nav');
              navbar.classList.remove('hidden-nav');
        } else {
            navbar.classList.add('hidden-nav');
            navbar.classList.remove('visible-nav');
        }
        
        prevScrollPos = currentScrollPos;
    }
  
    // Initial call to toggleNavbar
    // toggleNavbar();
  
    // Listen for scroll events
    window.addEventListener('scroll', toggleNavbar);
  });


  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
    $(".navbar").removeClass("shadow-sm");

    } else {
    $(".navbar").addClass("shadow-sm");
    }
});
