// var btns = document.getElementsByTagName('button');
// console.log( btns );
// var btn = document.getElementById('btn');
// console.log( btn );
// console.log( btn1 );
//
//
// function foo(){
//   alert('Clicker');
// }


// btn1.onclick = function(){
//   alert('Clicked')
// }


// btn1.addEventListener('click', function(event){
//   console.log( event );
// })

// link.addEventListener('click', function(e){
//   e.preventDefault()
// })


function Circle(){
  var width;
  var height;
  var top, left;
  var bgc;
  var figure;

  function setSize(){
    if( newWidth.value && newHeight.value ){
      if (newHeight.value !== newWidth.value)
      width = newWidth.value;
      height = newWidth.value;
    }else{
      width = 50;
      height = 50;
    }
  }

  function setCoordinates(e){
    top = ( e.offsetY - (height/2) )+'px';
    left = ( e.offsetX - (width/2) )+'px';
  }

  function setColor(){
    bgc = newColor.value;
  }

  function setFigure(){
    var figures = document.getElementsByName('figure');
    for (var i = 0; i < figures.length; i++) {
      if( figures[i].checked ){
        figure = figures[i].value;
      }
    }
  }

  function isClickedOnFigure(e) {
      var figures = document.getElementsByName('figure');
      for (var i = 0; i < figures.length; i++){
          if (figures[i].value === e.target.className) {
            var res = true;
            break;
          }else {
            res = false;
          }
      }

      return res;
  }

  function hex2rgb(c) {
      if (c[0] === '#') c = c.substr(1);
      var r = parseInt(c.slice(0,2), 16),
          g = parseInt(c.slice(2,4), 16),
          b = parseInt(c.slice(4,6), 16);
      return [r, g, b];
  }

  function figureColorIn(figureColor, r, g, b) {
      var color = hex2rgb(figureColor),
          res;
      (color[2] >= b) ? res = true : res = false;
      (color[1] >= g) ? res = true : res = false;
      (color[0] >= r) ? res = true : res = false;

      return res;
  }

  this.create = function(e){
    if( !isClickedOnFigure(e) ){
      setSize();
      setCoordinates(e);
      setColor();
      setFigure();
      var circle = document.createElement('div');
      area.appendChild(circle);
      circle.className = figure;
      circle.style.width = width+'px';
      circle.style.height = height+'px';
      circle.style.top = top;
      circle.style.left = left;
      circle.style.backgroundColor = bgc;
      if (figureColorIn(bgc, 200, 200, 200)) {
          circle.style.border = "1px solid #0000FF";
      }
    }
  }

}

var c = new Circle();
area.addEventListener('click', c.create);





// !!!!!!!!!!!!
