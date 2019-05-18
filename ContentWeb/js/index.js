function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return r[2]; 
    return null; 
} 
$(function() {
	if(getQueryString('ishome')!='true'){
		$('body').css('overflow','hidden');
		$('.backs .a').animate({'opacity':'1'},1000);
		setTimeout(function(){
			$('.backs .b').animate({'opacity':'1'},1000);
			$('.backs .c').animate({'opacity':'1'},1000);
		},1000)
		setTimeout(function(){
			$('.backs').animate({'opacity':'0'},2000,function(){
				$('.backs').hide();
				$('body').removeAttr('style');
			});
		},3000)
	}else{
		$('.backs').hide();
	}
	var indexbanner = new Swiper('#indexbanner', {
		loop: true, // 循环模式选项
		autoplay: {
		    delay: 5000,
		    stopOnLastSlide: false,
		    disableOnInteraction: true,
	    },
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination.a',
			clickable :true,
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next.b',
			prevEl: '.swiper-button-prev.a',
		},
	});
	//业务领域点击
	$('#businessDetails ul li').click(function(){
		var obj = this;
		if(!$(obj).hasClass('liHover')){
			$('#businessDetails ul li.txtShow').remove();
			$('#businessDetails ul li').removeClass('liHover');
				$(obj).addClass('liHover');
				var index_ = $(obj).index('#businessDetails ul li')+1;
//					var indexs = index_%4 == 0?4:index_%4;
//					indexs = 4-indexs;
//					var list_ = index_+ indexs-1;
//					if(list_ > $('#businessDetails ul li').length-1){
//						list_ = $('#businessDetails ul li').length-1;
//					}
				$('#businessDetails ul li').eq(3).after("<li class='txtShow' data-index='"+index_+"'><div class='content'><h2>项目简介</h2><div>"+$(this).find('div').html()+"</div><a>查看更多<i class='iconfont' >&#xe636;</i></a></div><div class='right' ><span onclick='zmove(this)' ><i class='iconfont' >&#xe630;</i></span><span onclick='ymove(this)'> <i class='iconfont' >&#xe604;</i></span></div></li>");
				
		}else{
			$(obj).removeClass('liHover');
				$('#businessDetails ul li.txtShow').remove();
		}
	});
	//新闻切换
	$('.newsNav span').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
	$('.title').each(function(){
		if($(window).width()>800){
			$(this).find('div').eq(1).css({'width':'230.39px'});
		}else{
			$(this).find('div').eq(1).css({'width':'12rem'});
		}
	});
});
$(window).scroll(function(){
	$('.title').each(function(){
		if($('body,html').scrollTop()+$(window).height()>$(this).offset().top){
			$(this).find('div').eq(1).removeAttr('style');
		}
	})
})
function zmove(obj){
	var _index = Number($(obj).closest('.txtShow').attr('data-index'));
	_index=_index-2;
	if(_index>=4){
		_index=_index+1;
	}
	if(_index==-1){
		_index=8;
	}
	$('#businessDetails ul li').eq(_index).click();
}
function ymove(obj){
	var _index = Number($(obj).closest('.txtShow').attr('data-index'));
	if(_index==8){
		_index=0;
	}
	if(_index>=4 && _index<8){
		_index=_index+1;
	}
	$('#businessDetails ul li').eq(_index).click();
}