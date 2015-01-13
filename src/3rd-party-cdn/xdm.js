/**
 * 3rd-party easyXDM.js
 */

var YJ = {
    remoteUrl: 'http://3rd-party.local:8081/xdm.html'
};

$(function() {
  "use strict";

  YJ.easyXDM = easyXDM.noConflict('YJ');
  var remoteUrl = 'http://3rd-party.local:8081/xdm.html';

  /*
  var socket = new YJ.easyXDM.Socket({
    remote: YJ.remoteUrl,
    onMessage: function(message, origin) {
      console.log("I'm consumer !");
      console.log("Recieved: ", message, " from origin: ", origin);
    }
  });
   */
  //socket.postMessage("Hello world");
  //socket.postMessage(document.cookie);


  var logger = function(str) {
    var d = document.createElement('div');
    d.textContent = str;
    var body = document.querySelector('body');
    body.appendChild(d);
  }

  var rpc = new YJ.easyXDM.Rpc(
    {
      remote: YJ.remoteUrl
    },
    {
      local: {
        consumerLog: function(message, onSuccess, onFailure) {
          try {
            //console.log("Consumer: I got a message:");
            //console.log(message);
            logger("Consumer: I got a message:");
            logger(JSON.stringify(message));
            onSuccess();
          } catch (exception) {
            onFailure();
          }
        }
      },
      remote: {
        providerLog: {}
      }
    }
  );

  function onSuccess(response) {
    console.log("Consumer: It success!!");
    console.log(response);
    logger("Consumer: It success!!");
    logger(JSON.stringify(response));
  }
  function onFailure() {
    console.log("Consumer: FAILURE");
    logger("Consumer: FAILURE");
  }

  //console.log(rpc.origin);
  rpc.providerLog('xxx', 'yyy', 'zzz', onSuccess, onFailure);

});
