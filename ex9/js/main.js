requirejs(['search', 'order', 'ajaxGet'], function(search, order, ajaxGet) {
  $(function() {
    $('#btnReloadList').click(function() {
      ajaxGet('json/data.json', function(phoneBookData) {
        $('li').remove();
        $("#phoneBookTemplate").tmpl( phoneBookData )
          .appendTo( "#phoneBook" );
      });
    });

    search();
    order();
  });
});
