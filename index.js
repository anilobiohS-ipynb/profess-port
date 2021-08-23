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