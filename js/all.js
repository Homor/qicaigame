 var _w1;
function mscreen()
{
	var _width=$(document).width();
	_w1=_width;
	if(_width>1024){
		_w2=0;
		$("#indexpro").slide({titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:true,autoPage:true,vis:4,scroll:5,trigger:"click",interTime:4500});

		$("#banner1").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,delayTime:1500,interTime:4000,trigger:"click"});
	}else{
		$("#indexpro").unbind();
		$('.hd').hide();

		var mySwiper = new Swiper('#banner_swiper', {
	loop: true,
	autoplay:5000,
	slidesPerView : 1,
	pagination : '.swiper-pagination',
	autoplayDisableOnInteraction : false,
	onSlideNextEnd: function(args) {
	}
})
	}
}
mscreen();

$(window).resize(function(){
	var _width=$(document).width();
	if(_w1!=_width){
		window.location.reload();
	}	
})


	// 获取网页滚动过的宽度、高度
	function getScrollPos () {
		var pos = {x: 0, y: 0};
		pos.x = document.documentElement.scrollLeft || document.body.scrollLeft;
		pos.y = document.documentElement.scrollTop || document.body.scrollTop;
		return pos;
	}

	function videoShow () {
		var scrollPos = getScrollPos();
		// 浏览器的宽度高度
		var clientWidth = window.screen.width;
		var clientHeight = window.screen.height;
		$('.video_box').css({
			left: (clientWidth)/2 + scrollPos.x + 'px',
			top: (clientHeight)/2 + scrollPos.y + 'px'
		});
	}
	
	
	//判断屏幕大小

		var _width=$(document).width();
		if(_width<=1024){
			//首页游戏列表取高度
			
				var _height=0;				
				$('.tempWrap li').each(function(index, element) {
					_thisHeight=$(this).height();					
					_height=(_thisHeight>_height)?_thisHeight:_height;
				});
				$('.tempWrap li').height(_height);
				$('.indexpro .bd').css('height',_height*2);	
			
			
     

			$('.nav_list').click(function(){
			if($('.nav').css('display')=='none')
			{
		     $('.nav').css('display','block');
			}else{
			
			  $('.nav').css('display','none');
			}
			
		})

		$('header nav a').click(function(){
			if($(this).find('i'))
			{
				if($(this).find('i').hasClass('on'))
				{
				$(this).find('i').removeClass('on');
				}else{
				$(this).find('i').addClass('on');
				}
			}
		})
	
	$('.index_more').click(function(){
		var _bd=$(this).parent().find('.bd');
		if(_bd.hasClass('on')){
        _bd.css('height',_height);
		_bd.removeClass('on');
		$(this).find('p').text('更多游戏')
		}else{
		_bd.css('height','auto');
		_bd.addClass('on');
		$(this).find('p').text('收起')
		}
		
		})
}