/**
 * Created by shura on 31.01.17.
 */
function resize()
{
    var img = document.getElementsByClassName('img_resize');
    if (img && img.style) {
        img.style.height = img.style.width;
    }
}

