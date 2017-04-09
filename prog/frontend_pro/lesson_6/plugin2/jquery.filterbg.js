(function($){

  $.fn.filterBg = function(options){

    var options = $.extend({
      filter: 'blur'
    }, options);

    var make = function(){

      var bgi = $(this).css('background-image');
      $('<div class="filter_bg_box">').appendTo( $(this).parent() );
      $('.filter_bg_box').css('background-image', bgi);

      // if( options.filter === 'blur' ){
      //   $('.filter_bg_box').css('filter', options.filter);
      // }else{
      //   $('.filter_bg_box').addClass('filter_bg_box--gs');
      // }
      

    }

    return this.each(make);

  }

}(jQuery))
