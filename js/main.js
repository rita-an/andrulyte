//random positioning of the circles:

var circles = [];

$('.project').each(function(){
  circles.push($(this));
});

function randomPos(w){
  for (var i = 0; i < circles.length; i++){
    var distance = 80;
    var height = $('#container').innerHeight();
    var x = Math.random() * (w - distance*2)
    var y = Math.random() * (height - distance*2)
    circles[i].css('left', x + 'px');
    circles[i].css('top', y + 'px');
  }
}

// button showtext:

function showText(){
  $('.arrow_right').parent().toggleClass('showText');
  $('#container').toggleClass('small');
  randomPos($('#container').innerWidth());
  // console.log(circles);

}

// hover circles:

$(document).ready(function(){
  // $('.project').hover(function(){
  //   $(this).css('background-color','green');
  //   $(this).children().css('display','inline');
  // }, function(){
  //   $(this).css('background-color','white');
  //   $(this).children().css('display','none');
  // });
  randomPos($('#container').innerWidth());

});
