$(function(){
	$('.article .second ul li').each(function(){
		if($(this).hasClass('on')){
			$(this).find('div').show();
		}
	}).click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on').find('div').slideUp();
		}else{
			$(this).addClass('on').find('div').slideDown();
			$(this).siblings('.article .second ul li').removeClass('on').find('div').slideUp();
		}
	})
})
