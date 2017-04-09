(function($){

  $.fn.scrollPlugin = function( options ){
    var options = $.extend( {
      speed: 400
    }, options );

    var make = function(){
      $(this).click(function(e){
        e.preventDefault();
        var s = $(this).attr('href');
        var top = $(s).offset().top;
        $('body, html').animate({
          scrollTop: top
        }, options.speed)
      })
    }

    return this.each( make );

  }

}(jQuery))
