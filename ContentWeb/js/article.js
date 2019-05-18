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
	var jsons = {"上海":"width:441.59px;left:1192.32px; top:441.59px;",
	"深圳":"left: 1027.2px;top: 748.8px;",
	"北京":"left: 1027.2px;top: 192px;",
	"长沙":"left: 950.4px;top: 595.19px;",
	"包头":"left: 835.19px;top: 211.2px;",
	"天津":"left: 1056px;top: 220.79px;",
	"杭州":"width: 480px;left: 1153.92px;top: 499.2px;",
	"昆明":"left: 693.12px;top: 672px;",
	"南昌":"width: 595.19px;left: 1057.92px;top: 556.8px;",
	"合肥":"width: 556.8px;left: 1084.8px;top: 276.8px;",
	"武汉":"width: 672px;left: 988.8px;top: 499.2px;",
	"福州":"width: 518.4px;left: 1142.39px;top: 614.4px;",
	"南京":"width: 518.4px;left: 1142.39px;top: 441.59px;",
	"重庆":"left: 796.8px;top: 547.19px;",
	"西安":"left: 835.19px;top: 393.59px;",
	"郑州":"left: 969.59px;top: 374.4px;",
	"乌鲁木齐":"left:345.59px; top:76.8px;",
	"成都":"left:710.4px; top:518.4px;"
	,"太原":"left:925.44px; top:288px;"};
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
				$(this).closest('.left').animate({'left':'-11rem'},300)
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

