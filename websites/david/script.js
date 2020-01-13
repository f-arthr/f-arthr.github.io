window.addEventListener('load', clock)
function clock() {
  let d = new Date()
  document.getElementById('clock').innerHTML = d.toLocaleTimeString();
  setTimeout(clock, 1000);
}

window.addEventListener('keypress', function(event){
  if (event.keyCode == 13) {
    search();
  }
})

var buttonSearch = document.getElementById('searchConfirm')
buttonSearch.addEventListener('click', search);
function search() {
  var valSearch = document.getElementById("search").value;
  var searchURL = "https://www.google.com/search?q=" + valSearch;
  window.location.href = searchURL;
}
