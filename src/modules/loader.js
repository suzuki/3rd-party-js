/**
 * YJM.loader.js
 */
/* -- JSHint -- */
/* global YJM,easyXDM */

(function(window, exports) {
  'use strict';

  function loadScript(url, callback) {
    var script = window.document.createElement('script');
    script.async = true;
    script.src = url;
    var entry = window.document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);

    script.onload = script.onreadystatechange = function() {
      var rdyState = script.readyState;

      if (!rdyState || /complete|loaded/.test(script.readyState)) {
        callback();
        script.onload = null;
        script.onreadystatechange = null;
      }
    };
  }

  function setupEasyXDM() {
    exports.easyXDM = easyXDM.noConflict('YJM');
  }
  // load easyXDM and change namespace
  loadScript('//3rd-party-cdn.local:8082/js/easyxdm/easyXDM.js', setupEasyXDM);

}(this, YJM));
