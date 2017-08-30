$(document).ready(function(){
		$.get('test-notes.html', function(data){
			$('.box').append(data);
		 $('.boxright_build').click(function(){  
		 			var deg = 0;
					setInterval(function(){
                        if (deg < 180)  {
                            var val = 'rotateX(' + deg + 'deg)'
                            $('.flipper').css({transform: val});
                            deg = deg + 7.2;
                        }
					}, 10);
					
					setTimeout(function () {
						var deg = 0;
						setInterval(function(){
							if (deg < 180)  {
								var val = 'rotateX(' + deg + 'deg)'
								$('.flipper_a').css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
					}, 250);
					
					setTimeout(function () {
						var deg = 0;
						setInterval(function(){
							if (deg < 180)  {
								var val = 'rotateX(' + deg + 'deg)'
								$('.flipper_b').css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
					}, 500);
					
					setTimeout(function () {
						var deg = 0;
						setInterval(function(){
							if (deg < 180)  {
								var val = 'rotateX(' + deg + 'deg)'
								$('.flipper_c').css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
					}, 750);
					
					setTimeout(function () {
						var deg = 0;
						setInterval(function(){
							if (deg < 180)  {
								var val = 'rotateX(' + deg + 'deg)'
								$('.flipper_d').css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
					}, 1000);
					$('.boxright_build').click(function(){
								location.reload();
								});
			
		$('.boxrightanswer').click(function(){
				if  ($(this).parent().find('p').hasClass('wronganswer') == true) {
						$(this).parent().find('.wronganswer_back').css({'font-size':'40px','background-color':'#0a1e39'});
						var deg = 180;
       					obj = $(this).parent().find('div');
						setInterval(function(){
							if (deg < 360)  {
								var val = 'rotateX(' + deg + 'deg)'
								$(obj[1]).css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
				}
				if  ($(this).parent().find('p').hasClass('correctanswer') == true) {
						$('.boxrightanswer').parent().find('.wronganswer_back').css({'font-size':'40px','background-color':'#0a1e39','border-color':'#666'});
						$('.boxrightanswer').parent().find('.correctanswer_back').css({'font-size':'40px','background-color':'#2b78e4'});
						var deg = 180;
						setInterval(function(){
							if (deg < 360)  {
								var val = 'rotateX(' + deg + 'deg)'
								$('.flipper_a').css({transform: val});
								$('.flipper_b').css({transform: val});
								$('.flipper_c').css({transform: val});
								$('.flipper_d').css({transform: val});
								deg = deg + 7.2;
							}
						}, 10);
					}
				})	
			});
		});
	});