$(function() {

var player = 1;

	$('.square').click(function(){
		if ( player == 1 ){
			$(this).append('<div><i class="fa fa-times" aria-hidden="true"></i></div>')
			player = 0;
		} 
		else {
			$(this).append('<div><i class="fa fa-circle-o" aria-hidden="true"></i></div>')
			player = 1;
		} 
	})

	$('#reset-btn').click(function(){
		$('.square').empty()
		player = 1;
	})
})