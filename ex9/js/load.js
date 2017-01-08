requirejs(['ajaxGet'], function(ajaxGet) {
  return function() {
  console.log('load');//  $('#btnReloadList').click(function() {
      //ajaxGet();
   // });
  }
/*
  ajaxGet('json/data.json', function(phoneBookData) {
    $('li').remove();
    $("#phoneBookTemplate").tmpl( phoneBookData )
      .appendTo( "#phoneBook" );
  });*/

});
