/**
 * 3rd-party-cdn
 * app.js
 */

var YJM = (function(window, undefined) {
  "use strict";

  var YJM = {
      remoteUrl: 'http://3rd-party.local:8081/xdm.html'
  };

  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.async = true;
    script.src = url;
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);

    script.onload = script.onreadystatechange = function() {
      var rdyState = script.readyState;

      if (!rdyState || /complete|loaded/.test(script.readyState)) {
        callback();
        script.onload = null;
        script.onreadystatechange = null;
      }
    }
  }

  function setupEasyXDM() {
    YJM.easyXDM = easyXDM.noConflict('YJM');
    YJM.rpc = new YJM.easyXDM.Rpc(
      {
        remote: YJM.remoteUrl
      },
      {
        remote: {
          providerLog: {},
          dump: {}
        }
      }
    );
    loadScript('//3rd-party-cdn.local:8082/js/3rd-party-cdn/readpoint.js', function() {});
  }

  // load easyXDM and change namespace
  loadScript('//3rd-party-cdn.local:8082/js/easyxdm/easyXDM.js', setupEasyXDM);

  return YJM;

})(window);
