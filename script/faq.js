$(function(){
	// �� div.area_name �[�W hover �� click �ƥ�
	// �P�ɧ�S�̤��� div.area_intro ���ð_��
	$('#faq_list ul.each_q li div.question').hover(function(){
		$(this).addClass('question_on');
	}, function(){
		$(this).removeClass('question_on');
	}).click(function(){
		// ���I����D�ɡA�Y���׬O���îɫh��ܥ��A�P�����è䥦�w�g�i�}������
		// �Ϥ��h����
		var $area_intro = $(this).next('div.ans');
			if(!$area_intro.is(':visible')){
				$('#faq_list ul li div.ans:visible').slideUp();
			}
		$area_intro.slideToggle();
	}).siblings().addClass('ans').hide();
});


