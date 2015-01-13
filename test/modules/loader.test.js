/**
 * loader.test.js
 */

/* -- JSHint config --*/
/* global YJM,QUnit,window */

QUnit.module('YJM loader Test');

QUnit.asyncTest('YJM loader', function() {
  'use strict';

  var scripts = window.document.getElementsByTagName('script');
  var expect_regex = /easyXDM\.js$/;
  var result = false;
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (expect_regex.test(script.src)) {
      result = true;
      break;
    }
  }
  QUnit.equal(result, true, '<script> が inject されたか？');

  QUnit.equal(typeof YJM.easyXDM, 'object', 'YJM.easyXDM が object か？');
});
