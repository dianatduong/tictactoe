// require jQuery
var $ = require('jquery');

$(document).ready(function() {
  var player = 1;
  var playerTwo = $('.playerTwo')
  $('.square').click(function() {
    if (player == 1) {
      $(this).addClass('playerOne')
      if (playerTwo) {
        $('.playerTwo').removeClass('playerOne')
      }
    }
    if ($(this).hasClass('playerOne')) {
      $(this).html('<div><i class="fa fa-times" aria-hidden="true"></i></div>')
      player = 0;
    } else {
      $(this).addClass('playerTwo')
      $(this).html('<div><i class="fa fa-circle-o" aria-hidden="true"></i></div>')
      player = 1;
    }
  })
  $('#reset-btn').click(function() {
    $('.square').empty()
    $('.square').removeClass('playerOne')
    $('.square').removeClass('playerTwo')
    player = 1;
  })
})