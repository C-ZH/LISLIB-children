$(function(){
	// �� div.area_name �[�W hover �� click �ƥ�
	// �P�ɧ�S�̤��� div.area_intro ���ð_��
	$('#area_list ul.each_area li div.area_name').hover(function(){
		$(this).addClass('area_name_on');
	}, function(){
		$(this).removeClass('area_name_on');
	}).click(function(){
		// ���I����D�ɡA�Y���׬O���îɫh��ܥ��A�P�����è䥦�w�g�i�}������
		// �Ϥ��h����
		var $area_intro = $(this).next('div.area_intro');
			if(!$area_intro.is(':visible')){
				$('#area_list ul li div.area_intro:visible').slideUp();
			}
		$area_intro.slideToggle();
	}).siblings().addClass('area_intro').hide();
});


