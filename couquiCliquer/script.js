var nbrCouqui = 0;
window.addEventListener('load', initial);
function initial(){
	if( navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
	 	var le_couqui = document.getElementById('imgCouqui');
		le_couqui.addEventListener('touchend', displayNbr);
  }
 else {
	 	var le_couqui = document.getElementById('imgCouqui');
	 	le_couqui.addEventListener('click', displayNbr);
  }

	var closeButton = document.getElementById('closeWarning');
	closeButton.addEventListener('click', closeWarning);

	if (document.body.clientWidth < document.body.clientHeight) {
		document.getElementById("turnScreen").style.display = "block";
		document.getElementById("screenSizeOk").style.display = "none";
	}else {
		document.getElementById("turnScreen").style.display = "none";
		document.getElementById("screenSizeOk").style.display = "block";
	}
}

function displayNbr(){
	window.nbrCouqui = window.nbrCouqui+1;
	document.getElementById('nbrCouqui').innerHTML = window.nbrCouqui;
	changePlur();
}

function changePlur() {
  if (window.nbrCouqui > 1) {
    document.getElementById('motCouqui').innerHTML = "couquis";
  } else {
    document.getElementById('motCouqui').innerHTML = "couqui";
  }
}

function closeWarning(){
	document.getElementById('warning').style.visibility='hidden';
}
