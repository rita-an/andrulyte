// change image on onclick


//random positioning of the circles:

var circles = [];
var circlesPos = [];

$('.project').each(function(){
  circles.push($(this));
});

function randomPos(){
  for (var i = 0; i < circles.length; i++){
    var distance = 80;
    var width = $('#container').innerWidth();
    var height = $('#container').innerHeight();
    var x = Math.random() * (width - distance*2)
    var y = Math.random() * (height - distance*2)
    circles[i].css('left', x + 'px');
    circles[i].css('top', y + 'px');

  }
}

// function randomPos2(){
//   for (var i = 0; i < circles.length; i++){
//     var distance = 80;
//     var height = $('#container').innerHeight();
//     var x = Math.random() * ($('#container').innerWidth()- distance*2)
//     var y = Math.random() * (height - distance*2)
//
//     for (var j = 0; j < circles.length; i++){
//       var other = circles[i].offset();
//       var new = circlse[j].offset();
//
//     }
//
//
//   }
// }

// button showtext:

function showText(){
  $('.arrow_right').parent().toggleClass('showText');
  $('#container').toggleClass('small');
  randomPos();
}


$(document).ready(function(){
  randomPos();

});
