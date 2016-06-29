(function (window, document) {
  document.addEventListener("DOMContentLoaded", function (event) {

    var codes = document.querySelectorAll('.highlight');
    codes.forEach(function (code) {
      var runner = document.createElement('div')
      runner.className = "runner";

      var browserButton = document.createElement('button');
      browserButton.className = "button browser";
      browserButton.textContent = "Run in browser";

      var babelButton = document.createElement('button');
      babelButton.className = "button babel";
      babelButton.textContent = "Run with Babel";

      runner.appendChild(browserButton);
      runner.appendChild(babelButton);

      code.appendChild(runner);
    });
  });
})(window, document, undefined);
