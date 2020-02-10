// var data = JSON.parse(websites.json);
// window.nbrCouqui = data.nbrCouqui;
// window.indent = data.indent;

let data;

loadJSON();
createLink();

function loadJSON() {
  let string_data = `[
    {
      "name": "Reactor",
      "description": "A program for ecobalancing a reaction equation",
      "runUrl": "https://Reactor.farthr.repl.run",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/Reactor"
    },
    {
      "name": "QAIck",
      "description": "QAIck is a module to make and, optionnaly, test a simple artificial intelligence ",
      "runUrl": "https://QAIck.farthr.repl.run",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/QAIck"
    },
    {
      "name": "Couqui Cliquer",
      "description": "Official counterfeiting of the game Cookie Clicker (https://orteil.dashnet.org/cookieclicker/) Used to train me in JavaScript",
      "runUrl": "websites/couqui-cliquer/couquiCliquer.html",
      "imageUrl": "https://66.media.tumblr.com/df204ee7a0af51f5b84ca9d8061624ff/tumblr_nuxnvxvibP1txeruoo2_r2_500.gifv",
      "repoUrl": "https://github.com/f-arthr/Couqui-Cliquer"
    },
    {
      "name": "Caier",
      "description": "Caier, a BEAUTIFUL and PRACTICAL notebook",
      "runUrl": "websites/caier/caier.html",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/Caier"
    },
    {
      "name": "David",
      "description": "David is a personalized homepage for myself",
      "runUrl": "websites/david/newtab.html",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/David-Homepage"
    },
    {
      "name": "NSI",
      "description": " Codes réalisés en cours d'NSI 1e",
      "runUrl": "",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/NSI"
    },
    {
      "name": "Is It Respect Your Privacy?",
      "description": "This program is simply a set of conditions. It gives you some initial information, but it maybe wrongs. Please, read the privacy policy...",
      "runUrl": "https://isitrespectyourprivacy.farthr.repl.run/",
      "imageUrl": "",
      "repoUrl": "https://github.com/vintonproject/IsItRespectYourPrivacy"
    },
    {
      "name": "Tic-Tac-Toe",
      "description": "Belongs to the NSI repo",
      "runUrl": "https://NSI.farthr.repl.run/",
      "imageUrl": "",
      "repoUrl": "https://github.com/f-arthr/NSI/blob/master/Python/tictactoe.py"
    }
  ]`

  data = JSON.parse(string_data);
}

function createWebsiteLink(name, description, runUrl, imageUrl, repoUrl) {
  let content = `<div class="website-article">
    <img src="` + imageUrl + `">
    <div class="content-website-article">
      <h2>` + name + `</h2>
      <p>` + description + `</p>
      <div class="buttons">`
  if (runUrl != "") {
    content += `<div class="button">
            <a target="_blank" href="` + runUrl + `"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg></a>
          </div>`
  }
  content += `<div class="button">
          <a target="_blank" href="` + repoUrl + `"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
          </svg></a>
        </div>
      </div>
    </div>
  </div>`

  return content;
}

function createLink() {
  let number_of_row = Math.ceil(data.length / 2);

  let element = 0;

  for (var i = 0; i < number_of_row; i++) {
    let row = document.createElement('div');
    row.className = 'row';

    try {
      row.innerHTML += createWebsiteLink(data[element].name, data[element].description, data[element].runUrl, data[element].imageUrl, data[element].repoUrl);
      element += 1;
      row.innerHTML += createWebsiteLink(data[element].name, data[element].description, data[element].runUrl, data[element].imageUrl, data[element].repoUrl);
      element += 1;
    } catch (TypeError) {
      try {
        row.innerHTML += createWebsiteLink(data[element].name, data[element].description, data[element].runUrl, data[element].imageUrl, data[element].repoUrl);
      } catch (TypeError) {
      }
    }

    document.getElementById('section').appendChild(row);
  }
}
