/**
 * 2nd-party app.js
 */
$(function() {
  "use strict";

  //var url = 'http://2nd-party.local:8080/api.php';
  var url = 'http://3rd-party.local:8081/api.php';

  $.ajax({
    type: 'POST',
    url: url,
    //crossDomain: true,
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
