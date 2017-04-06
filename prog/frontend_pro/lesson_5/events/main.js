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

// var saveButton = document.getElementById('save');

function Figure() {
    var width;
    var height;
    var top, left;
    var bgc;
    var figure;
    var newFigure;
    var newWidth = document.getElementById('newWidth');
    var newHeight = document.getElementById('newHeight');
    var newColor = document.getElementById('newColor');
    var newEditorWidth = document.getElementById('newEditorWidth');
    var newEditorHeight = document.getElementById('newEditorHeight');
    var newEditorColor = document.getElementById('newEditorColor');

    function setSize() {
        if (newWidth.value) {
            if (newHeight.value !== newWidth.value) {
                width = newWidth.value;
                height = newWidth.value;
            } else {
                width = newWidth.value;
                height = newHeight.value;
            }
        } else {
            width = 50;
            height = 50;
        }
    }

    function setCoordinates(e) {
        top = ( e.offsetY - (height / 2) ) + 'px';
        left = ( e.offsetX - (width / 2) ) + 'px';
    }

    function setColor() {
        bgc = newColor.value;
    }

    function setFigure() {
        var figures = document.getElementsByName('figure');
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].checked) {
                figure = figures[i].value;
            }
        }
    }

    function setNewFigure() {
        var figures = document.getElementsByName('newFigure');
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].checked) {
                newFigure = figures[i].value;
            }
        }
    }

    function isClickedOnFigure(e) {
        var figures = document.getElementsByName('figure');
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].value === e.target.className) {
                var res = true;
                break;
            } else {
                res = false;
            }
        }

        return res;
    }

    function hex2rgb(c) {
        if (c[0] === '#') c = c.substr(1);
        var r = parseInt(c.slice(0, 2), 16),
            g = parseInt(c.slice(2, 4), 16),
            b = parseInt(c.slice(4, 6), 16);
        return [r, g, b];
    }

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    function figureColorIn(figureColor, r, g, b) {
        var color = hex2rgb(figureColor),
            res;
        (color[2] >= b) ? res = true : res = false;
        (color[1] >= g) ? res = true : res = false;
        (color[0] >= r) ? res = true : res = false;

        return res;
    }
    
    function unsetDataAttributes() {
        var figures = document.querySelectorAll('#area>div');
        for (var i = 0; i < figures.length; i++) {
            figures[i].dataset.id = '';
        }
    }

    this.create = function (e) {
        if (!isClickedOnFigure(e)) {
            setSize();
            setCoordinates(e);
            setColor();
            setFigure();
            var element = document.createElement('div');
            area.appendChild(element);
            element.className = figure;
            element.style.width = width + 'px';
            element.style.height = height + 'px';
            element.style.top = top;
            element.style.left = left;
            element.style.backgroundColor = bgc;
            if (figureColorIn(bgc, 200, 200, 200)) {
                element.style.border = "1px solid #0000FF";
            }
        }
    };

    this.getFigureProps = function (e) {
        if (isClickedOnFigure(e)) {
            e.preventDefault();
            newEditorWidth.value = parseFloat(e.target.style.width);
            newEditorHeight.value = parseFloat(e.target.style.height);
            newEditorColor.value = rgb2hex(e.target.style.backgroundColor);
            var newFigures = document.getElementsByName('newFigure');
            for (var i = 0; i < newFigures.length; i++) {
                (e.target.className === newFigures[i].value) ?
                    newFigures[i].checked = true :
                    newFigures[i].checked = false;
            }
        unsetDataAttributes();
        e.target.dataset.id = 'current';
        }
    }

    this.setNewValuesFromEditor = function (e) {
        setNewFigure();
        var currentElement = document.querySelector('[data-id = "current"]');
        currentElement.style.width = newEditorWidth.value + 'px';
        currentElement.style.height = newEditorWidth.value + 'px';
        currentElement.style.backgroundColor = newEditorColor.value;
        currentElement.className = newFigure;
        if (figureColorIn(newEditorColor.value, 200, 200, 200)) {
            currentElement.style.border = "1px solid #0000FF";
        }
    }

}


var c = new Figure();
area.addEventListener('click', c.create);
area.addEventListener('contextmenu', c.getFigureProps);
save.addEventListener('click', c.setNewValuesFromEditor);





// !!!!!!!!!!!!
