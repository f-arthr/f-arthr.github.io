document.addEventListener("DOMContentLoaded", function() {
  determine_documents();
});

function determine_documents() {
  if (window.innerHeight < window.innerWidth) {
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = "desktop/style.css";
    document.getElementsByTagName('head')[0].appendChild(style);

    let script = document.createElement('script');
    script.src = 'desktop/script.js';
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = "mobile/style.css";
    document.getElementsByTagName('head')[0].appendChild(style);

    let script = document.createElement('script');
    script.src = 'mobile/script.js';
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
