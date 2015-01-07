/**
 * 3rd-party easyXDM.js
 */

var YJ = {};

$(function() {
  "use strict";

  YJ.easyXDM = easyXDM.noConflict('YJ');

  var socket = new YJ.easyXDM.Socket({
    remote: 'http://3rd-party.local:8081/xdm.html',
    onMessage: function(message, origin) {
      console.log("Recieved: ", message, " from origin: ", origin);
    }
  });

});
