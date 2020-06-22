var count = 0;



$(document).ready(function(){

  var images = [];

  //load the images:
  $.ajax({
    url: "get_imgs.php",
    type: "POST",
    dataType: "HTML",
    success: function( data ) {
      jQuery('.img_container').append(data);
      $('.images').each(function(){
        images.push($(this));
      });

      images[0].show();
      $('.img_count').text(count+1 + "/" + images.length);

      //change cursor:
      $('.img_container').mousemove(function(e){

        if(e.pageX < $('#container').width()/2){
          $('#prev').css('top', e.pageY + 10 + 'px');
          $('#prev').css('left', e.pageX + 10 + 'px');
          $('#prev').css('display','inline-block');
          $('#next').css('display','none');
        } else {
          $('#next').css('top', e.pageY + 10 + 'px');
          $('#next').css('left', e.pageX + 10 + 'px');
          $('#next').css('display','inline-block');
          $('#prev').css('display','none');
        }
      });
      $('.img_container').mouseout(function(){
        $('#next').css('display','none');
        $('#prev').css('display','none');
      });

      // change image on click:
      $('.img_container').click(function(e){

        if(e.pageX < $('#container').width()/2){
          count--;
        } else {
          count++;
          count %= images.length;
        }
        if(count < 0){
          count = images.length - 1;
        }

        images[count].show();
        $('.img_count').text(count+1 + "/" + images.length);

        for(var i=0; i<images.length; i++){
          if(i !== count){
            images[i].hide();
          }
        }
      });
    },
      error: function(jqXHR, data ) {
        alert ('Ajax request Failed.');
      }
  });

});
