$('.x1 .q1 li').click(function(){
	var i = $(this).index()
	console.log(i)
	$('.x1 .q1 li').css({background:'#fff',color:'#000'})
	$(this).css({background:'#E60012',color:'#fff'})
	$('.x1 .jsx').css({display:'none'})
	$('.x1 .jsx').eq(i).css({display:'block'})

	
})
$('.ibl li').click(function(){
	var j = $(this).index()
	// console.log(j)
	// console.log($('#ibr x5'))
	$('#ibr .x5').css({display:'none'})
	$('#ibr .x5').eq(j).css({display:'block'})
	$('#bar .hkd .hk').css({top:j*+'94'})
})
$('.x3 .q1 li').click(function(){
	var i = $(this).index()
	console.log(i)
	$('.x3 .q1 li').css({background:'#fff',color:'#000'})
	$(this).css({background:'#E60012',color:'#fff'})
	$('.x3 .jsx').css({display:'none'})
	$('.x3 .jsx').eq(i).css({display:'block'})
})
