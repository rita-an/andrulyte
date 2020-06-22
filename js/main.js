//random positioning of the circles:

var circles = [];
var circlesPos = [];

$('.project').each(function(){
  circles.push($(this));
});

function randomPos(){
  for (var i = 0; i < circles.length; i++){
    var distance = $('.project').width();
    var width = $('#circle_container').innerWidth();
    var height = $('#circle_container').innerHeight();
    var x = Math.random() * (width - distance*2)
    var y = Math.random() * (height - distance*2)
    circles[i].css('left', x + 'px');
    circles[i].css('top', y + 'px');

  }
}

// button showtext:

function showText(){
  $('#info').toggleClass('showText');
  $('#circle_container').toggleClass('small_circles');
  $('#container').toggleClass('small');
  $('#close').toggle();
}

// individual colours

function individual(){
  var color = $('#col').html();
  $('#info').css('background-color', color);
  $('#back').children().hover(function(){
    $(this).css('color', color);
  }, function(){
    $(this).css('color', 'black');
  });
  $('#info_project').children().hover(function(){
    $(this).css('color', color);
  }, function(){
    $(this).css('color', 'black');
  });
}

// not possible to select a:visited in jquery?

// function colorOnStart(id, color){
//   $('.project_link:visited' + id).css('background-color', color +';');
//   $(id).hover(function(){
//     $(this).css('background-color', color);
//   }, function(){
//     $(this).css('background-color', 'white');
//   });
// }

$(document).ready(function(){
  randomPos();
  individual();
});
