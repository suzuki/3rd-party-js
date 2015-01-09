/**
 * 3rd-party-cdn
 * readpoint.js
 */
(function() {
  'use strict';

  var readpoint = {a: 1, b: 2};

  var onSuccess = function(response) {
    console.log('success');
  };
  var onFailure = function(message) {
    console.log('failure');
  };

  YJM.rpc.dump(readpoint, onSuccess, onFailure);


}(YJM));
