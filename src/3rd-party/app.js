/**
 * 3rd-party app.js
 */
$(function() {
  "use strict";

  var url = 'http://3rd-party.local:8081/api.php';

  $.ajax({
    type: 'POST',
    url: url,
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    dataType: 'json',
    data: {id: 1, name: 'hoge'}
  })
  .done(function(data){
    console.log('--- success ---');
    console.log(data);
  })
  .fail(function(jqxhr, status) {
    console.log('--- fail ---');
    console.log(jqxhr);
    console.log(status);
  });


});
