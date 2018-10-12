$(function(){
	// 幫 div.area_name 加上 hover 及 click 事件
	// 同時把兄弟元素 div.area_intro 隱藏起來
	$('#faq_list ul.each_q li div.question').hover(function(){
		$(this).addClass('question_on');
	}, function(){
		$(this).removeClass('question_on');
	}).click(function(){
		// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
		// 反之則隱藏
		var $area_intro = $(this).next('div.ans');
			if(!$area_intro.is(':visible')){
				$('#faq_list ul li div.ans:visible').slideUp();
			}
		$area_intro.slideToggle();
	}).siblings().addClass('ans').hide();
});


