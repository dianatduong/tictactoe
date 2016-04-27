$(function() {
  var player = 1;
  var count = 0;
  $('.square').click(function() {
    if (count == 9) {
      $('.square').empty()
      count = 0;
      player = 1;
    }
    count++
    if (player == 1) {
      $(this).append('<div class="clicked"><i class="fa fa-times" aria-hidden="true"></i></div>')
      player = 0;
    } else {
      $(this).append('<div><i class="fa fa-circle-o" aria-hidden="true"></i></div>')
      player = 1;
    }
  })
  $('#reset-btn').click(function() {
    $('.square').empty()
    count = 0;
  })
})