// JavaScript Document




$(window).scroll(function(){
	if ($(window).scrollTop()>5)
		{
			$('#menu').removeClass('nav1');
			$('#menu').addClass('nav2');
		}
	else
		{
			$('#menu').removeClass('nav2');
			$('#menu').addClass('nav1');
		}
	var chieudai=$('.ContentDV2').height();
	if ($(window).scrollTop() > 500) 
		{
			$('#MenuDV').removeClass('MenuDV1');
			$('#MenuDV').addClass('MenuDV2');
         }
	else
		{
			$('#MenuDV').addClass('MenuDV1');
			$('#MenuDV').removeClass('MenuDV2');
		}	
	if ($(window).scrollTop() > chieudai)
		{
			$('#MenuDV').addClass('MenuDV1');
			$('#MenuDV').removeClass('MenuDV2');
		}
		
	})

$('#Review').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
	autoplay:true,
	autoplaySpeed: 2000,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
			dots:false,
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$(document).ready(function(){
	var $pageItem = $(".pagination li")
	
	$pageItem.click(function(){
		console.log($(this).html().indexOf('Next'));
		if($(this).html().indexOf('Next') <= -1 && $(this).html().indexOf('Previous')<= -1)
		{
			
			$pageItem.removeClass("active");
			$(this).addClass("active");
		}
	})
})