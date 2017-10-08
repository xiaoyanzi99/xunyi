
// 选项切换

$(function(){

	// console.log('哈哈');

	$('.time-a ul li').click(function(){

		$('.time-a ul li').css('color','black');
		// $('.time-a ul li h5').css('color','black');
		$(this).css('color','red');
	


		// $(this).addClass("time-active");
		$('.time-a ul li').removeClass('time-active');
		// $('.time-a ul li').removeClass('time-active-a');

	})





// 倒计时开始

function run(){
	// var pricea = document.getElementsByClassName('price-aa');
	// console.log(pricea);
		// 当前时间
		var nowDate = new Date();
		// 端午节时间
		var futureDate = new Date('2018-1-1');

		// 计算时间戳的差值
		var time = futureDate.getTime() - nowDate.getTime();

		// 计算天数
		var day = Math.floor(time/1000/60/60/24);

		// 小时数
		var hour = Math.floor(time/1000/60/60)%24;

		// 分钟数
		var minute = Math.floor(time/1000/60)%60;
		// console.log(minute);

		// 秒数
		var second = Math.floor(time/1000)%60;

		// 拼接距离未来的时间差值
		var showTime = +day+'天'+hour+'小时'+minute+'分钟'+second+'秒';
		
		// 将拼接好的内容写入到h3标签内
		// $('.price-a p span').append("<h6></h6>")
		// pricea.innerHTML = showTime;
		
		$('.price-a p span').text(showTime)

	}


	// 页面刚加载进来调用一次函数，显示时间
	run();

	// 每个一秒钟调用函数重新获取时间
	setInterval(run,1000);


//倒计时结束


// value值的加减开始
	
	

	var a = $('#kong').val();
	// console.log(a);


// value值的加减结束



// 综合排序点击事件开始

	$('.comprehensive span').click(function(){
		$('.quanzhu ul span').removeClass('comprehensive-active');
		$(this).addClass('comprehensive-active');	
	});

	

// 综合排序点击事件结束


})






