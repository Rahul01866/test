
$(window).on("load",function(){
	
	$(".preloader").fadeOut("slow");
	
})

$(document).ready(function(){
	
	$(window).on("scroll", function(){
		
		if($(this).scrollTop() > 90){
			$(".navbar").addClass("navbar-shrink");
		}else{
			$(".navbar").removeClass("navbar-shrink");
		}
		
	});
	
	const videoSrc = $("#player_01").attr("src");
	
	$(".video-play-btn,.video-popup").on("click", function(){
		
		if($(".video-popup").hasClass("open")){
			
			$(".video-popup").removeClass("open");
			$("#player_01").attr("src","");
			
		}else{
			$(".video-popup").addClass("open");
			
			if($("#player_01").attr("src")==''){
				$("#player_01").attr("src",videoSrc);
			}
		}
		
	});
	
	$('.feature-carousel').owlCarousel({
		
		loop:true,
		autoplay:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
			
		}
		
		
	});
	
	$('.screenshots-carousel').owlCarousel({
		
		loop:true,
		autoplay:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:4
			}
			
		}
		
		
	});
	
	$('.testimonial-carousel').owlCarousel({
		
		loop:true,
		autoplay:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
			
		}
		
		
	});
	
	$('.team-carousel').owlCarousel({
		
		loop:true,
		autoplay:true,
		margin:0,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
			
		}
		
		
	});
	
	$.scrollIt({
		
		topOffset: -50
		
	});
	
	$(".nav-link").on("click", function(){
		
		$(".navbar-collapse").collapse("hide");
		
	});
	
	function toggleTheme(){
		updateIcon();
	}
	toggleTheme();
	
	$(".toggle-theme").on("click", function(){
		
		$("body").toggleClass("dark");
		if($("body").hasClass("dark")){
			
			localStorage.setItem("rahul-theme","dark");
			
		}else{
			
			localStorage.setItem("rahul-theme","light");
			
		}
		updateIcon();
		
	})
	
	function updateIcon(){
		
		if($("body").hasClass("dark")){
			
			$(".toggle-theme i").removeClass("fa-moon");
			$(".toggle-theme i").addClass("fa-sun")
			
		}else{
			
			$(".toggle-theme i").removeClass("fa-sun");
			$(".toggle-theme i").addClass("fa-moon")
			
		}
		
	}
	
});










