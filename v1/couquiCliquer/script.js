var nbrCouqui = 0;
var indent = 1;
var timeCooker = 10000;
var timeRobot = 1000;
var timeSpaceship = 200;
var nbrCooker = 0;
var nbrRobot = 0;
var nbrSpaceship = 0;
var mode = "solo";
var oldNbrCouqui = 0;
var couquiSec = 0;
var imageNbr = 0;
window.addEventListener('load', initial);

var bgPreload = new Map()

b0 = new Image()
b0.src = "background/0.png";
bgPreload.set("0", b0)
b1 = new Image()
b1.src = "background/1.png";
bgPreload.set("1", b1)
b2 = new Image()
b2.src = "background/2.png";
bgPreload.set("2", b2)
b3 = new Image()
b3.src = "background/3.png";
bgPreload.set("3", b3)
b4 = new Image()
b4.src = "background/4.png";
bgPreload.set("4", b4)
b5 = new Image()
b5.src = "background/5.png";
bgPreload.set("5", b5)
b6 = new Image()
b6.src = "background/6.png";
bgPreload.set("6", b6)
b7 = new Image()
b7.src = "background/7.png";
bgPreload.set("7", b7)
b8 = new Image()
b8.src = "background/8.png";
bgPreload.set("8", b8)
b9 = new Image()
b9.src = "background/9.png";
bgPreload.set("9", b9)
b10 = new Image()
b10.src = "background/10.png";
bgPreload.set("10", b10)
b11 = new Image()
b11.src = "background/11.png";
bgPreload.set("11", b11)
b12 = new Image()
b12.src = "background/12.png";
bgPreload.set("12", b12)
b13 = new Image()
b13.src = "background/13.png";
bgPreload.set("13", b13)
b14 = new Image()
b14.src = "background/14.png";
bgPreload.set("14", b14)
b15 = new Image()
b15.src = "background/15.png";
bgPreload.set("15", b15)
b16 = new Image()
b16.src = "background/16.png";
bgPreload.set("16", b16)
b17 = new Image()
b17.src = "background/17.png";
bgPreload.set("17", b17)
b18 = new Image()
b18.src = "background/18.png";
bgPreload.set("18", b18)
b19 = new Image()
b19.src = "background/19.png";
bgPreload.set("19", b19)
b20 = new Image()
b20.src = "background/20.png";
bgPreload.set("20", b20)
b21 = new Image()
b21.src = "background/21.png";
bgPreload.set("21", b21)
b22 = new Image()
b22.src = "background/22.png";
bgPreload.set("22", b22)
b23 = new Image()
b23.src = "background/23.png";
bgPreload.set("23", b23)
b24 = new Image()
b24.src = "background/24.png";
bgPreload.set("24", b24)
b25 = new Image()
b25.src = "background/25.png";
bgPreload.set("25", b25)
b26 = new Image()
b26.src = "background/26.png";
bgPreload.set("26", b26)
b27 = new Image()
b27.src = "background/27.png";
bgPreload.set("27", b27)
b28 = new Image()
b28.src = "background/28.png";
bgPreload.set("28", b28)
b29 = new Image()
b29.src = "background/29.png";
bgPreload.set("29", b29)
b30 = new Image()
b30.src = "background/30.png";
bgPreload.set("30", b30)
b31 = new Image()
b31.src = "background/31.png";
bgPreload.set("31", b31)
b32 = new Image()
b32.src = "background/32.png";
bgPreload.set("32", b32)
b33 = new Image()
b33.src = "background/33.png";
bgPreload.set("33", b33)
b34 = new Image()
b34.src = "background/34.png";
bgPreload.set("34", b34)
b35 = new Image()
b35.src = "background/35.png";
bgPreload.set("35", b35)
b36 = new Image()
b36.src = "background/36.png";
bgPreload.set("36", b36)
b37 = new Image()
b37.src = "background/37.png";
bgPreload.set("37", b37)
b38 = new Image()
b38.src = "background/38.png";
bgPreload.set("38", b38)
b39 = new Image()
b39.src = "background/39.png";
bgPreload.set("39", b39)

function initial() {
  if (navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    var le_roller = document.getElementById('roller');
    le_roller.addEventListener('touchend', buyRoller);

    var le_processor = document.getElementById('processor');
    le_processor.addEventListener('touchend', buyProcessor);

    var le_alien = document.getElementById('alien');
    le_alien.addEventListener('touchend', buyAlien);

    var le_cooker = document.getElementById('cooker');
    le_cooker.addEventListener('touchend', buyCooker);

    var le_robot = document.getElementById('robot');
    le_robot.addEventListener('touchend', buyRobot);

    var le_starship = document.getElementById('space-ship');
    le_starship.addEventListener('touchend', buySpaceship);

    var le_couqui = document.getElementById('iconDownload');
    le_couqui.addEventListener('touchend', downloadBackup);

    var le_couqui = document.getElementById('imgCouqui');
    le_couqui.addEventListener('touchend', addCouqui);

    document.getElementById("playMode").style.display = "none";
  } else {
    var le_roller = document.getElementById('roller');
    le_roller.addEventListener('click', buyRoller);

    var le_processor = document.getElementById('processor');
    le_processor.addEventListener('click', buyProcessor);

    var le_alien = document.getElementById('alien');
    le_alien.addEventListener('click', buyAlien);

    var le_cooker = document.getElementById('cooker');
    le_cooker.addEventListener('click', buyCooker);

    var le_robot = document.getElementById('robot');
    le_robot.addEventListener('click', buyRobot);

    var le_starship = document.getElementById('space-ship');
    le_starship.addEventListener('click', buySpaceship);

    var le_couqui = document.getElementById('iconDownload');
    le_couqui.addEventListener('click', downloadBackup);

    var le_couqui = document.getElementById('imgCouqui');
    le_couqui.addEventListener('click', addCouqui);
  }

  var closeButton = document.getElementById('closeWarning');
  closeButton.addEventListener('click', closeWarning);

  if (document.body.clientWidth < document.body.clientHeight) {
    document.getElementById("turnScreen").style.display = "block";
    document.getElementById("screenSizeOk").style.display = "none";
  } else {
    document.getElementById("turnScreen").style.display = "none";
    document.getElementById("screenSizeOk").style.display = "block";
  }

  var changeMode = document.getElementById('btnChangeMode');
  changeMode.addEventListener('click', editMode);

  defineCouquiSec = setInterval(function() {
    window.couquiSec = window.nbrCouqui - window.oldNbrCouqui;
    window.oldNbrCouqui = window.nbrCouqui;
    try {
      clearInterval(window.backgroundChanger);
    } catch (ReferenceError) {

    }
    if (window.couquiSec <= 100) {
      if (window.couquiSec == 0) {

      } else {
        changeBackground(1000/window.couquiSec);
      }
    } else {
      changeBackground(10);
    }
  }, 1000)

  colorItems = setInterval(function () {
    if (window.nbrCouqui < 50) {
      document.getElementById('imgRoller').style['filter'] = 'invert(50%)';
      document.getElementById('priRoller').style['filter'] = 'invert(50%)';
    } else {
      document.getElementById('imgRoller').style['filter'] = 'invert(100%)';
      document.getElementById('priRoller').style['filter'] = 'invert(0%)';
    }
    if (window.nbrCouqui < 250) {
      document.getElementById('imgProcessor').style['filter'] = 'invert(50%)';
      document.getElementById('imgCooker').style['filter'] = 'invert(50%)';
      document.getElementById('priProcessor').style['filter'] = 'invert(50%)';
      document.getElementById('priCooker').style['filter'] = 'invert(50%)';
    } else {
      document.getElementById('imgProcessor').style['filter'] = 'invert(100%)';
      document.getElementById('imgCooker').style['filter'] = 'invert(100%)';
      document.getElementById('priProcessor').style['filter'] = 'invert(0%)';
      document.getElementById('priCooker').style['filter'] = 'invert(0%)';
    }
    if (window.nbrCouqui < 1250) {
      document.getElementById('imgAlien').style['filter'] = 'invert(50%)';
      document.getElementById('priAlien').style['filter'] = 'invert(50%)';
    } else {
      document.getElementById('imgAlien').style['filter'] = 'invert(100%)';
      document.getElementById('priAlien').style['filter'] = 'invert(0%)';
    }
    if (window.nbrCouqui < 6250) {
      document.getElementById('imgRobot').style['filter'] = 'invert(50%)';
      document.getElementById('priRobot').style['filter'] = 'invert(50%)';
    } else {
      document.getElementById('imgRobot').style['filter'] = 'invert(100%)';
      document.getElementById('priRobot').style['filter'] = 'invert(0%)';
    }
    if (window.nbrCouqui < 31250) {
      document.getElementById('imgSpaceship').style['filter'] = 'invert(50%)';
      document.getElementById('priSpaceship').style['filter'] = 'invert(50%)';
    } else {
      document.getElementById('imgSpaceship').style['filter'] = 'invert(100%)';
      document.getElementById('priSpaceship').style['filter'] = 'invert(0%)';
    }
  }, 10);
}

function changeBackground(interval) {
  window.backgroundChanger = setInterval(function () {
    if (window.imageNbr == 39) {
      window.imageNbr = 0;
    } else {
      window.imageNbr = window.imageNbr + 1;
    }

    document.getElementById('bg').src = bgPreload.get(window.imageNbr.toString()).src;
  }, interval);
}

function addCouqui() {
  window.nbrCouqui = window.nbrCouqui + indent;
  displayNbr();
}

function displayNbr() {
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

function closeWarning() {
  document.getElementById('warning').style.visibility = 'hidden';
}

function editMode() {
  if (window.mode == "solo") {
    window.mode = "multiplayer2"
    document.getElementById("btnChangeMode").innerHTML = "Switch to <u>3 players</u>";
  } else if (window.mode == "multiplayer2") {
    window.mode = "multiplayer3"
    document.getElementById("btnChangeMode").innerHTML = "Switch to <u>Farmyard</u>";
  } else if (window.mode == "multiplayer3") {
    window.mode = "farmyard"
    document.getElementById("btnChangeMode").innerHTML = "Switch to <u>Solo</u>";
  } else if (window.mode == "farmyard") {
    window.mode = "solo"
    document.getElementById("btnChangeMode").innerHTML = "Switch to <u>2 players</u>";
  }
}

function keyIsPressed() {
  if (window.mode == "multiplayer2") {
    if (event.keyCode == 32) {
      document.getElementById('imgCouqui').click();
    }
  } else if (window.mode == "multiplayer3") {
    if (event.keyCode == 87) {
      document.getElementById('imgCouqui').click();
    } else if (event.keyCode == 78) {
      document.getElementById('imgCouqui').click();
    }
  } else if (window.mode == "farmyard") {
    document.getElementById('imgCouqui').click();
  }
}

function loadBackup() {
  var selectedFile = document.getElementById('file').files[0];
  var reader = new FileReader();
  reader.onload = function(event){
    var data = JSON.parse(reader.result);
    window.nbrCouqui = data.nbrCouqui;
    window.indent = data.indent;
    displayNbr();
  };
  reader.readAsText(selectedFile);
}

function downloadBackup() {
  var file = JSON.stringify({"nbrCouqui": window.nbrCouqui, "indent": window.indent, "nbrCooker": window.nbrCooker, "nbrRobot": window.nbrRobot, "nbrSpaceship": window.nbrSpaceship});

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(file));
  element.setAttribute('download', "data.json");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function buyRoller() {
  if (window.nbrCouqui >= 50) {
    window.nbrCouqui = window.nbrCouqui - 50;
    if (window.indent == 1) {
      window.indent = 2;
    } else {
      window.indent = window.indent + 2;
    }
    displayNbr();
  }
}

function buyProcessor() {
  if (window.nbrCouqui >= 250) {
    window.nbrCouqui = window.nbrCouqui - 250;
    if (window.indent == 1) {
      window.indent = 10;
    } else {
      window.indent = window.indent + 10;
    }
    displayNbr();
  }
}

function buyAlien() {
  if (window.nbrCouqui >= 1250) {
    window.nbrCouqui = window.nbrCouqui - 1250;
    if (window.indent == 1) {
      window.indent = 50;
    } else {
      window.indent = window.indent + 50;
    }
    window.indent = window.indent + 50;
    displayNbr();
  }
}

function buyCooker() {
  if (window.nbrCouqui >= 250) {
    window.nbrCouqui = window.nbrCouqui - 250;
    window.nbrCooker = window.nbrCooker + 1;
    window.timeCooker = window.timeCooker / window.nbrCooker;
    displayNbr();
    try {
      clearInterval(cookerFunction);
    } catch (ReferenceError) {

    }
    cookerFunction = setInterval(function() {
      window.nbrCouqui = window.nbrCouqui + 1
      displayNbr();
    }, window.timeCooker);
  }
}

function buyRobot() {
  if (window.nbrCouqui >= 1250) {
    window.nbrCouqui = window.nbrCouqui - 1250;
    window.nbrRobot = window.nbrRobot + 1;
    window.timeRobot = window.timeRobot / window.nbrRobot;
    displayNbr();
    try {
      clearInterval(robotFunction);
    } catch (ReferenceError) {

    }
    robotFunction = setInterval(function() {
      window.nbrCouqui = window.nbrCouqui + 1
      displayNbr();
    }, window.timeRobot);
  }
}

function buySpaceship() {
  if (window.nbrCouqui >= 31250) {
    window.nbrCouqui = window.nbrCouqui - 31250;
    window.nbrSpaceship = window.nbrSpaceship + 1;
    window.timeSpaceship = window.timeSpaceship / window.nbrSpaceship;
    displayNbr();
    try {
      clearInterval(spaceshipFunction);
    } catch (ReferenceError) {

    }
    spaceshipFunction = setInterval(function() {
      window.nbrCouqui = window.nbrCouqui + 1
      displayNbr();
    }, window.timeSpaceship);
  }
}
