$(function() {
  var player = 1;
  var count = 0;
  $('.square').click(function() {
  	count = 0;
    if (player == 1) {
      $(this).append('<div><i class="fa fa-times" aria-hidden="true"></i></div>')
      player = 0;
      count++
    } else {
      $(this).append('<div><i class="fa fa-circle-o" aria-hidden="true"></i></div>')
      player = 1;
      count++;
    }
    endGame()
  })
  $('#reset-btn').click(function() {
    $('.square').empty()
    $('.square').bind('click');
    player = 1;
   	count = 0;
  })

  function endGame() {
    if (count == 9) {
      $('.square').unbind('click')
    }
  }
})