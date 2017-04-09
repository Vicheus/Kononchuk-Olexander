// function x(  ){
//   var a = 0;
//   return function( start, step ){
//     a = start
//     a += step;
//     console.log( a );
//   }
// }
//
//
// var y = x();
// y()
// y()
// y()
// y()
//
//
//
//
// function take(gen, x){
//   var resArr = [];
//   for (var i = 0; i < x; i++) {
//     gen();
//     resArr.push( gen() )
//   }
// }
//
//
//
//
//
//
// for (var variable in object) {
//   console.log( variable );
// }
//
//
//
// arr.map(function(x){
//
// })

(function(){
    let slide = $('.slide');
    let pointContainer = $('.points');
    let w = $('.slider_container').width();
    let slides = $('.slides');
    $('[data-content=1]').css({
        'z-index': 30,
        'display': 'block'
    });

    slide.width( w );
    slides.width( w * slide.length );

    let id = 1;
    slide.each(function () {
        $(this).css('background-image', 'url("img/' + id + '.jpg")');
        $(this).data('data-img_id', id);
        pointContainer.append('<div data-point_id=' + (id++) + ' class="point">');
    });

    $('.slide:last-child').prependTo('.slides');
    slides.css('left', -w);

    $('.point:first-child').addClass('active');
    let points = $('.point');

    function showImage() {
        let currentId = $(this).attr('data-point_id');
        let activeId = $('.active').attr('data-point_id');
        if (currentId > activeId) {
            let count = Math.abs(currentId - activeId);
            for (let i = 0; i < count; i++) {
                slides.animate({
                    "margin-left": -w
                }, 100, function () {
                    $('.slide:first-child').appendTo('.slides');
                    slides.css('margin-left', 0);
                });
            }
            points.removeClass('active');
            $(this).addClass('active');
        }
        if (currentId < activeId) {
            let count = Math.abs(currentId - activeId);
            for (let i = 0; i < count; i++) {
                slides.animate({
                    "margin-left": w
                }, 100, function () {
                    $('.slide:last-child').prependTo('.slides');
                    slides.css('margin-left', 0);
                });
            }
            points.removeClass('active');
            $(this).addClass('active');
        }
        $('.content_block__li').each(function () {
            $(this).css({
                'z-index': 0,
                'display': 'none'
            });
        });
        let showContent = $('[data-content=' + currentId + ']');
        console.log(showContent);
        showContent.css({
            'z-index': 30,
            'display': 'block'
        });
    }

    points.click(showImage);

    function next() {
        slides.animate({
            "margin-left": -w
        }, 400, function () {
            $('.slide:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        });
        let activeId = $('.active').attr('data-point_id');
        points.removeClass('active');
        let nextId;
        (activeId < 4) ? nextId = parseInt(activeId) + 1 : nextId = 1;
        let currentElement = $("div[data-point_id=" + nextId + "]");
        currentElement.addClass('active');
        $('[data-content=' + activeId + ']').css({
            'z-index': 0,
            'display': 'none'
        });
        $('[data-content=' + nextId + ']').css({
            'z-index': 30,
            'display': 'block'
        });
    }

    $('#nextSlide').click(next);

    function prev() {
        slides.animate({
            "margin-left": w
        }, 400, function () {
            $('.slide:last-child').prependTo('.slides');
            slides.css('margin-left', 0);
        });
        let activeId = $('.active').attr('data-point_id');
        points.removeClass('active');
        let prevId;
        (activeId > 1) ? prevId = parseInt(activeId) - 1 : prevId = 4;
        let currentElement = $("div[data-point_id=" + prevId + "]");
        currentElement.addClass('active');
        $('[data-content=' + activeId + ']').css({
            'z-index': 0,
            'display': 'none'
        });
        $('[data-content=' + prevId + ']').css({
            'z-index': 30,
            'display': 'block'
        });
    }

    $('#prevSlide').click(prev);

}());




















/////////////////////////////
