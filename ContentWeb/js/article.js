$(function() {
	$('.article .second ul li').each(function() {
		if($(this).hasClass('on')) {
			$(this).find('div').show();
		}
	}).click(function() {
		if($(this).hasClass('on')) {
			$(this).removeClass('on').find('div').slideUp();
		} else {
			$(this).addClass('on').find('div').slideDown();
			$(this).siblings('.article .second ul li').removeClass('on').find('div').slideUp();
		}
	});
	$('.honorList ul li').click(function() {
		$(this).addClass('on').siblings('.honorList ul li').removeClass('on');
	});
	var jsons = {"上海":"width:23vw;left:62.1vw; top:23vw;","深圳":"left: 53.5vw;top: 39vw;","北京":"left: 53.5vw;top: 10vw;","长沙":"left: 49.5vw;top: 31vw;","包头":"left: 43.5vw;top: 11vw;","天津":"left: 55vw;top: 11.5vw;","杭州":"width: 25vw;left: 60.1vw;top: 26vw;","昆明":"left: 36.1vw;top: 35vw;","南昌":"width: 31vw;left: 55.1vw;top: 29vw;","合肥":"width: 29vw;left: 56.5vw;top: 24vw;","武汉":"width: 35vw;left: 51.5vw;top: 26vw;","福州":"width: 27vw;left: 59.5vw;top: 32vw;","南京":"width: 27vw;left: 59.5vw;top: 23vw;","重庆":"left: 41.5vw;top: 28.5vw;","西安":"left: 43.5vw;top: 20.5vw;","郑州":"left: 50.5vw;top: 19.5vw;","乌鲁木齐":"left:18vw; top:4vw;","成都":"left:37vw; top:27vw;","太原":"left:48.2vw; top:15vw;"};
	var objs = $('.contactBottom ul li.on');
	$('.map').show();
	$('.map >div').attr('style',jsons[objs.html()]);
	$('.map >div>span').html(objs.html());
	$('.map >div>div h2').html(objs.attr('data-title'));
	$('.map >div>div div').html(objs.attr('data-content'));
	$('.contactBottom ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.map >div').attr('style',jsons[$(this).html()]);
		$('.map').show();
		if($(window).width()>=800){
			$('body,html').animate({scrollTop:$('.map >div').offset().top-($(window).width()*0.06)},300)
		}
		$('.map >div>span').html($(this).html());
		$('.map >div>div h2').html($(this).attr('data-title'));
		$('.map >div>div div').html($(this).attr('data-content'));
	});
	//搜索
	$('#searchs').keydown(function(){
		if(event.keyCode==13)
	    {
	          $('#searchTitle').html($(this).val());  
	          $('#searchContent').html('<p class="null">- 暂无内容 -</p>');
	    }
	})
	$('span.btns').click(function(){
		if($(this).hasClass('on')){
				$(this).removeClass('on');
				$(this).closest('.left').animate({'left':'-9rem'},300)
		}else{
			$(this).addClass('on');
			if($(this).closest('.left').css('position') == 'fixed'){
				$(this).closest('.left').animate({'left':'1rem'},300);
			}else{
				$(this).closest('.left').animate({'left':'0'},300);
			}
		}
	});
	$('.teamTitle').hover(function(){
		$(this).addClass('on');
	});
	$('.articleTitle').hover(function(){
		$(this).addClass('on');
	});
})
function deleteNull(){
	$('#searchs').val('');  
	$('#searchTitle').html('');  
}

