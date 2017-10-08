$(function(){
	
// 糖人教程选项卡

	// 默认第eq(n)选中
	$('.tang-new').eq(1).css({ color:'red' });
	$('.tang-list').eq(1).show();

	$('.tang-new').click(function(){

		// 获取当当前点击元素的索引
		var index = $(this).index();

		$('.tang-new').css({color:'#000'});
		$(this).css({ color:'red'});
		
		$('.tang-list').hide();
		$('.tang-list').eq(index).show();
	});


})