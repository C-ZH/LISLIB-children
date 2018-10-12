$(function(){
	// 幫 div.area_name 加上 hover 及 click 事件
	// 同時把兄弟元素 div.area_intro 隱藏起來
	$('#area_list ul.each_area li div.area_name').hover(function(){
		$(this).addClass('area_name_on');
	}, function(){
		$(this).removeClass('area_name_on');
	}).click(function(){
		// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
		// 反之則隱藏
		var $area_intro = $(this).next('div.area_intro');
			if(!$area_intro.is(':visible')){
				$('#area_list ul li div.area_intro:visible').slideUp();
			}
		$area_intro.slideToggle();
	}).siblings().addClass('area_intro').hide();
});


