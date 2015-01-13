/**
 * yjm.test.js
 */
/* global YJM,QUnit */

QUnit.module('YJM', {
  setup: function() {
    'use strict';
  }
});

QUnit.test('YJM Namespace', function() {
  'use strict';

  QUnit.deepEqual(typeof YJM, 'object', 'YJM が object か？');
});
