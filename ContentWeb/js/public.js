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
	$('.streamer').addClass('on');
	if($(window).width()>800){
		$('#menu >ul>li').hover(function(){
		$(this).addClass("open");
		},function(){
			$(this).removeClass("open");
		});
	}
	//二级导航初始化
	publicObj.navtab();
	/***html默认px初始化***/
	publicObj.resize();
	$(window).resize(function() {
		publicObj.resize();
	});
	
	//logo初始化
	publicObj.wap()?$('.header .nav>ul>li').eq(3).before('<li class="logo"><a href="/"><img src="../../Contentweb/images/logo.png" /></a></li>'):'';
	if($('.teamTitle').length>0 && $('body,html').scrollTop()>$('.teamTitle').offset().top-($(window).height()*0.5)){
		$('.teamTitle').addClass('on');
	}
	if($('.articleTitle').length>0 && $('body,html').scrollTop()>$('.articleTitle').offset().top-($(window).height()*0.5)){
		$('.articleTitle').addClass('on');
	}
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
		    			//$('.article .content>.left').css({"position":"fixed","top":"6vw","bottom":"auto","max-height":"87vh","overflow-y":"auto"})
		    		}else{
		    			if($('.article .content>.left .teams').length==1){
	    					var hh = $(window).height()-$('.navbar-header').height()*1.3;
	    					$('.article .content>.left .teams').css({"max-height":hh+'px',"overflow-y":"auto","margin-top":"0"});
	    				}
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'1rem'})
		    			}else{
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'-12rem'})
		    			}
		    		}
		    	}else if($('body,html').scrollTop()>$('.footer').offset().top-($(window).height()-$('.footer').height()+($(window).width()*0.15))){
		    		if($(window).width()>800){
//		    			if($('.article .content>.left').height()>($(window).height()-$('.footer').innerHeight()-(($(window).width()/32)*5))){
//		    				$('.article .content>.left').css({"position":"absolute","bottom":0,"top":"auto"})
//		    			}else{
//		    				$('.article .content>.left').css({"position":"fixed","top":"6vw","bottom":"auto"})
//		    			}
		    		}else{
		    			if($('.article .content>.left .teams').length==1){
	    					var hh = $(window).height()-$('.navbar-header').height()*1.3;
	    					$('.article .content>.left .teams').css({"max-height":hh+'px',"overflow-y":"auto","margin-top":"0"});
	    				}
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'1rem'})
		    			}else{
		    				$('.article .content>.left').css({"position":"fixed","top":"6rem","bottom":"auto",'left':'-12rem'})
		    			}
		    		}
		    	}else{
		    		if($(window).width()>800){
		    			//$('.article .content>.left').scrollTop(0)
		    			//$('.article .content>.left').removeAttr('style');
		    		}else{
		    			if($('.article .content>.left .teams').length==1){
		    				var hh = $(window).height()-$('.teamLeft').offset().top;
	    					$('.article .content>.left .teams').css({"max-height":hh+'px',"overflow-y":"auto","margin-top":"0"});
	    				}
		    			if($('.article .content>.left span.btns').hasClass('on')){
		    				$('.article .content>.left').css({"position":"absolute","top":"0","bottom":"auto",'left':'0'})
		    			}else{
		    				$('.article .content>.left').css({"position":"absolute","top":"0","bottom":"auto",'left':'-12rem'})
		    			}
		    		}
		    	}
			}
			if($('.teamTitle').length>0 && $('body,html').scrollTop()>$('.teamTitle').offset().top-($(window).height()*0.5)){
				$('.teamTitle').addClass('on');
			}
			if($('.articleTitle').length>0 && $('body,html').scrollTop()>$('.articleTitle').offset().top-($(window).height()*0.5)){
				$('.articleTitle').addClass('on');
			}
	    })
	    
	    //搜索
	    function getQueryString(name) { 
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURI(r[2]); 
		    return null; 
		} 
		if(getQueryString('value')!='' && getQueryString('value') != null && $('#searchs').length==1){
			$('#searchs').val(getQueryString('value'));
			$('#searchTitle').html(getQueryString('value'));  
	        $('#searchContent').html('<p class="null">- 暂无内容 -</p>');
		}
		/*$('#headsearch').keydown(function(){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e.keyCode==13)
		    {
		    	var locations = location.protocol+'//'+location.host;
		        location.href=locations+'/Search?value='+$(this).val();
		    }
		});*/
		$.ajax({
		    type:'get',
		    url:'/SearchInput',
            	    dataType: "json",
		    success:function(data){
				if(data.length>0){
				    arrs=data;
				}
		    }
		});
});
//搜索事件
if($(window).width()<800){
	$('.navbar-search').attr('href','/ArticleContent/search.html')
}
var notp=true;
function searchs(obj){
	notp=false;
	setTimeout(function(){
		notp=true;
	},250);
	$(obj).parent().css({'border-bottom':'1px solid #dddddd','width':'883.19px'});
	$('.navbar-white .navbar-nav').animate({'opacity':'0'},300);
	$(obj).parent().find('input').show().focus();
	$(obj).parent().find('span').show().animate({'opacity':'1'},300);
	$(obj).parent().find('input').css({'opacity':'1'})
	$(obj).parent().find('.searchlist').show().css({'opacity':'1'});
	$(obj).parent().find('i').css({'width':'12%'})
	$(obj).parent().find('.searchlist').html('');
}
function blurs(obj){
	setTimeout(function(){
		if(notp){
			$(obj).val('').css({'opacity':'0'});
			$(obj).parent().css({'border-bottom':'0 solid #dddddd','width':'38.4px'});
			$(obj).parent().find('i').css({'width':'38.4px'})
			$(obj).parent().find('.searchlist').show().css({'opacity':'0'});
			$('.navbar-white .navbar-nav').animate({'opacity':'1'},300);
			$(obj).parent().find('span').animate({'opacity':'0'},300,function(){
				$(this).hide()
			});
			$(obj).parent().find('.searchlist').html('');
		}else{
			notp=true;
		}
	},200)
}
function blur2(obj){
	setTimeout(function(){
		$(obj).parent().find('.searchlist').html('');
	},200)
}
var arrs=[];
function inputs(obj){
	$(obj).parent().find('.searchlist').html('');
    if($(obj).val()=='')return;
    $.each(arrs,function(){
	    if(this.indexOf($(obj).val())>=0){
	    	$(obj).parent().find('.searchlist').append('<p>'+this+'</p>');
	    }
    });
    $(obj).parent().find('.searchlist p').click(function(){
    	notp=false;
		/*$("#headsearch").val($(this).html());
		$("#headsearch").focus();
		$("#searchs").val($(this).html());
		$("#searchs").focus();
		setTimeout(function(){notp=true;},110);*/
		        location.href='/Search?value='+$(this).text();
    });
}
function headsearchDel(){
	notp=false;
	setTimeout(function(){notp=true;},110);
	$("#headsearch").val('');
	$("#headsearch").focus();
}
function theTop(){
	$('body,html').animate({
		scrollTop: 0
	}, 500)
}
//微信
function weixin(){
	var arrs = $(window).width()>800?['500px','278px']:['22rem','13rem'];
	layer.open({
	  type: 1,
	  title: false,
	  area:arrs,
	  content: $('#weixin').html()
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