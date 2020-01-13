let darkmode_enabled = false;
let text_is_serif = true;

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById('darkmode-logo').addEventListener('click', darkmode_enable)
   document.getElementById('text-logo').addEventListener('click', change_text_serif)
   document.getElementById('text-box').addEventListener('keydown', new_char)

   setInterval(function () {
     if (document.getElementById('textarea').children.length == 0) {
       var div = document.createElement("div");
       div.innerHTML = "<br>"
       document.getElementById('textarea').appendChild(div);
     } else if (document.getElementById('textarea').children[0].outerHTML == "<br>") {
       document.getElementById('textarea').children[0].outerHTML = "<div>"
       document.getElementById('textarea').children[0].innerHTML = "<br>"
     }
   }, 10);
});

function darkmode_enable() {
  if (!darkmode_enabled) {
    document.getElementById('body').style['background-color'] = '#212121';
    document.getElementsByClassName('sheet')[0].style['background-color'] = '#181818';
    document.getElementsByClassName('sheet')[0].style['box-shadow'] = '1vw 1vw 2vw #040404';
    document.getElementById('textarea').style['color'] = '#ffffff';
    document.getElementById('darkmode-logo').style['fill'] = '#ffffff';
    document.getElementById('darkmode-logo').style['stroke'] = '#ffffff';
    document.getElementById('text-logo').style['stroke'] = '#ffffff';

    darkmode_enabled = true;
  } else {
    document.getElementById('body').style['background-color'] = '#ebe6e6';
    document.getElementsByClassName('sheet')[0].style['background-color'] = '#f3f3f3';
    document.getElementsByClassName('sheet')[0].style['box-shadow'] = '1vw 1vw 2vw #888888';
    document.getElementById('textarea').style['color'] = '#000000';
    document.getElementById('darkmode-logo').style['fill'] = '#000000';
    document.getElementById('darkmode-logo').style['stroke'] = '#000000';
    document.getElementById('text-logo').style['stroke'] = '#000000';

    darkmode_enabled = false;
  }
}

function change_text_serif() {
  if (text_is_serif) {
    var stroke = document.getElementById('text-logo').style['stroke'];
    document.getElementById('text-logo').innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="' + stroke + '" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="4 4 20 4"></polyline></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>';
    document.getElementById('textarea').style['font-family'] = '"Open Sans", sans-serif';
    text_is_serif = false;
  } else {
    var stroke = document.getElementById('text-logo').style['stroke'];
    document.getElementById('text-logo').innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="' + stroke + '" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>'
    document.getElementById('textarea').style['font-family'] = '"Bitter", serif';
    text_is_serif = true;
  }
}

function new_char(e) {
  setTimeout(function () {
    if (e.key == '#') {
      document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].style["font-weight"] = "bold";
      document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].style["font-size"] = "2em";
      document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].textContent = document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].textContent.replace('#', '')
    } else if (e.key == 'Enter') {
      document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].style["font-weight"] = "normal";
      document.getElementById('textarea').children[document.getElementById('textarea').children.length - 1].style["font-size"] = "1em";
    }
  }, 100);
}
