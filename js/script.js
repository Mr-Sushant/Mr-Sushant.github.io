$(window).on("load",function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter:"*",
		animationOptions:{
			duration:1005,
			easing:'linear',
			queue:false
		}
	});
})


$(document).ready(function(){
$('#slides').superslides({
	animation:'fade',
	play: 3000,
	pagination:false
});

	var typed = new Typed(".typed",{
		strings:["Undergraduate","XR Developer","Unity Developer","Software Enthusiast"],
		typeSpeed :70,
		loop : true,
		startDelay : 1000,
		showCursor : false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        6480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	        	items:4
	        }
	    }
})

	

	var skillsTopOffset = $(".SkillsSection").offset().top;

	$(window).scroll(function(){
		if(window.pageYOffset > skillsTopOffset - $(window).height()+240){
			$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
		}
	});

	$(".counter").each(function() {
		var element = $(this);
		var endVal = parseInt(element.text());

		element.countup(endVal);
	})


	$("[data-fancybox]").fancybox();

	$("#navigation li a").click(function(e){
		e.preventDefault();
		var targetEle = $(this).attr("href");
		var targetPos = $(targetEle).offset().top;
		$("html,body").animate({scrollTop: targetPos-50},"slow");
	});

	

});
