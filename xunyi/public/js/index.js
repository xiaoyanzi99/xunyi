$('#bannerul li:eq(0)').clone().appendTo('#bannerul')
var liW = $('#bannerul li:eq(0)').width();

var W = liW * $('#bannerul li').length

$('#bannerul').css({width:W})


var i = 0
var run
function auto(){
	run = setInterval(function(){
		i++;
		hexin()
		
	},3000)
}
	
auto()
$('#prev').click(function(){
	i--
	hexin()

})
$('#next').click(function(){
	i++
	hexin()

})
$('.xiaoyuandian li').mouseover(function(){
	i=$(this).index()
	hexin()
})
$('#banner').mouseover(function(){
	clearInterval(run)
	$('#prev,#next').show()
}).mouseout(function(){
	auto()
	$('#prev,#next').hide()
})
function hexin(){
	if(i==-1){
		$('#bannerul').css({left:-liW * ($('#bannerul li').length-1)})
		// i=$('#bannerul li').length
		i=$('#bannerul li').length-2
	}
	if(i>=$('#bannerul li').length){
		$('#bannerul').css({left:0})
		i=1
	}
	if(i==$('#bannerul li').length-1){
		$('.xiaoyuandian li').eq(0).css({background:'#E60012'}).siblings().css({background:'#fff'})
	}
	$('.xiaoyuandian li').eq(i).css({background:'#E60012'}).siblings().css({background:'#fff'})
	console.log(i)
	$('#bannerul').stop().animate({left:-i*liW},700)
}