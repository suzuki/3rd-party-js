/**
 * app.js
 */

var App = (function(window, undefined) {

  var App = {};

  function loadSupportingFiles(callback) {}
  function loadScript(url, callback) {}

  // widget samples...
  function getWidgetParams() {}
  function getRatingData(params, callback) {}
  function drawWidget() {}

  loadSupportingFiles(function() {
    var params = getWidgetParams();
    getRatingData(params, function() {
      drawWidget();
    });
  });

  // async loading <script>
  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.async = true;
    script.src = url;

    var entry = document.getElementByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);

    script.onload = script.onreadystatechange = function() {
      var rdyState = script.readyState;

      if (!rdyState || /complete|loaded/.test(script.readyState)) {
        callback();

        script.onload = null;
        script.onreadystatechange = null; // IE
      }
    };
  }

  return App;

})(window);
