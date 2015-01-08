/**
 * 3rd-party xdm-provider.js
 */

var YJ = {};

$(function() {
  "use strict";

  YJ.easyXDM = easyXDM.noConflict('YJ');

  var socket = new YJ.easyXDM.Socket({
    onMessage: function(message, origin) {
      console.log("I'm provider !");
      console.log("Recieved: ", message, " from origin: ", origin);
    }
  });

  socket.postMessage("Hello 2nd !");
  socket.postMessage(document.cookie);

});
