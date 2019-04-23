$(function() {
	if($(window).width() >= 800) {
		var theUA = window.navigator.userAgent.toLowerCase();
		if((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
			var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
			if(ieVersion < 9) {
				alert('您的浏览器版本太低！ 推荐使用:谷歌,火狐,其他双核极速模式如果你的使用的是双核浏览器,请切换到极速模式访问');
			}
		}

	}
	$('#menu >ul>li').hover(function(){
		$(this).addClass("open");
	},function(){
		$(this).removeClass("open");
	});
	//二级导航初始化
	publicObj.navtab();
	/***html默认px初始化***/
	publicObj.resize();
	$(window).resize(function() {
		publicObj.resize();
	});
	
	//logo初始化
	publicObj.wap()?$('.header .nav>ul>li').eq(3).before('<li class="logo"><a href="/"><img src="../../Contentweb/images/logo.png" /></a></li>'):'';
	
	//導航wap
	var articleTop = $('.article .content>.left').length>0?$('.article .content>.left').offset().top-($(window).width()*0.05):0;
	    $('.wapbtn').click(function(){
	    	if($(this).hasClass('on')){
	    		$(this).removeClass('on');
	    		$(this).closest('.header').find('.nav').animate({'opacity':'0'},300,function(){
	    			$(this).hide();
	    		});
	    	}else{
	    		$(this).addClass('on');
	    		$(this).closest('.header').find('.nav').show().animate({'opacity':'1'},300);
	    	}
	    })
	    $(window).scroll(function(){
	    	if($(window).width()>800){
	    		if($('body,html').scrollTop() > $('body').height() / 3) {
					$('.theTop').addClass('show');
				} else {
					$('.theTop').removeClass('show');
				}
	    	}else{
	    		if($('body,html').scrollTop() ==0) {
					$('.theTop').removeClass('show');
				} else {
					$('.theTop').addClass('show');
				}
	    	}
	    	if($('body').height()>$(window).height()*2){
	    		if($('body,html').scrollTop() > articleTop && $('body,html').scrollTop()<$('.footer').offset().top-($(window).height()-$('.footer').height()+($(window).width()*0.15))){
		    		if($(window).width()>800){
		    			$('.article .content>.left').css({"position":"fixed","top":"6vw","bottom":"auto"})
		    		}else{
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'1rem'})
		    			}else{
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'-9rem'})
		    			}
		    		}
		    	}else if($('body,html').scrollTop()>$('.footer').offset().top-($(window).height()-$('.footer').height()+($(window).width()*0.15))){
		    		if($(window).width()>800){
		    			if($('.article .content>.left').height()>($(window).height()-$('.footer').innerHeight()-(($(window).width()/32)*5))){
		    				$('.article .content>.left').css({"position":"absolute","bottom":0,"top":"auto"})
		    			}else{
		    				$('.article .content>.left').css({"position":"fixed","top":"6vw","bottom":"auto"})
		    			}
		    		}else{
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'1rem'})
		    			}else{
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'-9rem'})
		    			}
		    		}
		    	}else{
		    		if($(window).width()>800){
		    			$('.article .content>.left').removeAttr('style');
		    		}else{
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"absolute","top":"0","bottom":"auto",'left':'0'})
		    			}else{
		    				$('.article .content>.left').css({"position":"absolute","top":"0","bottom":"auto",'left':'-9rem'})
		    			}
		    		}
		    	}
	    	}
	    })
});
function theTop(){
	$('body,html').animate({
		scrollTop: 0
	}, 500)
}
//微信
function weixin(){
	var arrs = $(window).width()>800?['15vw','17.5vw']:['17rem','20rem'];
	layer.open({
	  type: 1,
	  title: false,
	  area:arrs,
	  content: '<div class="wxfx"><h2>关注微信公众号</h2><p><img src="../../ContentWeb/images/weixin.jpg" /></p></div>'
	});
}

var publicObj = {
	//文档高度
	getDT: function() {
		var scrollTop = 0,
			bodyScrollTop = 0,
			documentScrollTop = 0;
		if(document.body) {
			bodyScrollTop = document.body.scrollTop;
		}
		if(document.documentElement) {
			documentScrollTop = document.documentElement.scrollTop;
		}
		scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
		return scrollTop;
	},
	//可视窗口高度
	getWH: function() {
		var windowHeight = 0;
		if(document.compatMode == "CSS1Compat") {
			windowHeight = document.documentElement.clientHeight;
		} else {
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	},
	//滚动条滚动高度
	getSH: function() {
		var scrollHeight = 0,
			bodyScrollHeight = 0,
			documentScrollHeight = 0;
		if(document.body) {
			bodyScrollHeight = document.body.scrollHeight;
		}

		if(document.documentElement) {
			documentScrollHeight = document.documentElement.scrollHeight;
		}
		scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		return scrollHeight;
	},
	resize: function() {
		document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 32 + "px";
	},
	wap: function() {
		return $(window).width() > 800;
	},
	navtab: function() {
		//二级导航
		if(this.wap()) {
			$('.nav ul li').hover(function() {
				var len = $(this).find('div ul').length;
				var h = $(this).find('div ul').eq(0).height() + parseInt($(this).find('div ul li a').eq(0).css('margin-top'));
				$(this).find('div').height(len * h).css({
					'opacity': '1',
					'padding': '0 0'
				});
			}, function() {
				$(this).find('div').height(0).css({
					'opacity': '0',
					'padding': '0 0'
				});
			})
		} else {
			$('.nav ul li').each(function() {
				$(this).find('div').length > 0 ? $(this).addClass('tab').find('div').before('<i class="iconfont">&#xe604;</i>') : '';
			})
			$('.nav ul li.tab>i').click(function() {
				if(!$(this).hasClass('on')) {
					$('.nav ul li.tab a i').removeClass('on');
					$('.nav ul li div').slideUp()
					$(this).addClass('on');
					$(this).parent().find('div').slideDown();
				} else {
					$(this).removeClass('on');
					$(this).parent().find('div').slideUp();
				}
			})
		}

	},
	language: function(obj) {
		//中英文切换
		alert(obj);
	},
	//退出登录
	out:function(){
		location.reload();
	}
};