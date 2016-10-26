// 首页点击展开导航,当屏幕小于1024px的时候
	$('.nav_list').click(function(){
		if($('.nav').css('display')=='none')
		{
	     $('.nav').css('display','block');
		}else{
		
		  $('.nav').css('display','none');
		}
		
	})

	//实现小三角点击展开和收缩内容

		$('.hiding').parent().click(function(){
		var _hide=$(this).find('.hiding');
		if(_hide.hasClass("on"))
		{
			_hide.removeClass("on");
			_hide.parent().siblings('.p_content').css('display','none');
		}else{
			_hide.addClass('on');
			_hide.parent().siblings('.p_content').css('display','block');
		}

	})

		   // 点击二级导航变绿
      $('.catebox .catelist li').click(function(){
      		$(this).addClass('current').siblings().removeClass('current');
     });

    // 手机端判断苹果安卓、平板
    function version(){
   	var u = navigator.userAgent;
	var mobile=!!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端
	var ios=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var android= u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或uc浏览器
	var iPhone= u.indexOf('iPhone') > -1 ; //是否为iPhone或者QQHD浏览器
	var iPad=u.indexOf('iPad') > -1; //是否iPad
	if(iPad){return 1;}
	else if(ios){return 2;}
	else if(android){return 3;}else{
		return 4;
	}

   }
	 