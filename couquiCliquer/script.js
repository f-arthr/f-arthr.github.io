var nbrCouqui = 0;
var mode = "solo"
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

		document.getElementById("playMode").style.display = "none";
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

	var changeMode = document.getElementById('btnChangeMode');
	changeMode.addEventListener('click', editMode);
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

function editMode(){
	if (window.mode == "solo"){
		window.mode = "multiplayer2"
		document.getElementById("btnChangeMode").innerHTML = "Switch to <u>3 players</u>";
	}else if (window.mode == "multiplayer2") {
		window.mode = "multiplayer3"
		document.getElementById("btnChangeMode").innerHTML = "Switch to <u>Farmyard</u>";
	}else if (window.mode == "multiplayer3") {
		window.mode = "farmyard"
		document.getElementById("btnChangeMode").innerHTML = "Switch to <u>Solo</u>";
	}else if (window.mode == "farmyard") {
		window.mode = "solo"
		document.getElementById("btnChangeMode").innerHTML = "Switch to <u>2 players</u>";
	}
}

function keyIsPressed(){
	if (window.mode == "multiplayer2"){
		if (event.keyCode == 32) {
			document.getElementById('imgCouqui').click()
		}
	}else if (window.mode == "multiplayer3") {
		if (event.keyCode == 87) {
			document.getElementById('imgCouqui').click()
		}else if (event.keyCode == 78) {
			document.getElementById('imgCouqui').click()
		}
	}else if (window.mode == "farmyard") {
		document.getElementById('imgCouqui').click()
	}
}
