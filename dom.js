/**
 * dom.js
 */

App.dom = (function(window, undefined) {
  var document = window.document;
  var dom = {};

  dom.get = function(selector) {
    return selector.charAt(0) === '#' ?
      document.getElementById(selector) :
      document.getElementByTagName(selector);
  };

  return dom;
})(window);
