// $('button').append('<a href="###">sdfsdf</a>');
// $('<a href="###">sdfsdf</a>').appendTo('button');

// $('button').html('<h1>sfsd</h1>');
// $('button').text('<h1>sfsd</h1>');

// var img = $('button').attr('data-img');
// $('button').attr('data-img', 'img1');

// $('button').css('background-color', '#ff0000');


// var images = ['1.jpg', '2.jpg', '3.jpg'];
// $('button').each(function(i){
//   console.log( i );
// })


var images = ['work-1.jpg', 'work-2.jpg', 'work-3.jpg'];
var currImg = 0;

for (var i = 0; i < images.length; i++) {
  $('.dots').append('<div data-img="'+i+'" class="dot">')
}
$('.img_block').css('background-image', 'url("img/'+images[currImg]+'")');
$('.dot:first-child').addClass('active');
$('.dot').click(function(){
  $('.dot').removeClass('active');
  $(this).addClass('active');
  currImg = $(this).attr('data-img');
  $('.img_block').css('background-image', 'url("img/'+images[currImg]+'")');
})





// !!!!!!!!!!!!!!!
