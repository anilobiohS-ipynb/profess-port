var windowWidth = window.innerWidth;
var horizontalLength = document.querySelector(".element-wrapper").scrollWidth;

var distfromTop=document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distfromTop + horizontalLength - windowWidth;
document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

window.onscroll = function(){
	var scrollTop = window.pageYOffset;
	console.log(scrollTop);
	if(scrollTop>=distfromTop && scrollTop<=scrollDistance){
		document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distfromTop)+"px)";

	}
}

var mySwiper = new Swiper(".swiper-container", {
            // Optional parameters
            spaceBetween: 5,
            slidesPerView: 2,
            loop: false,
            freeMode: true,
            loopAdditionalSlides: 5,
            speed: 500,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 640px
                640: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    freeMode: false
                }
            }
        })