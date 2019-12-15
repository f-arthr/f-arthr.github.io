var nbrCouqui = 0;
window.addEventListener('load', initial);
function initial(){
	var le_couqui = document.getElementById('imgCouqui');
	le_couqui.addEventListener('click', displayNbr);

	var closeButton = document.getElementById('closeWarning');
	closeButton.addEventListener('click', closeWarning);
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
