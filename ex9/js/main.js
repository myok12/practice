requirejs(['ajaxGet','load','filter', 'sort'] , function(ajaxGet, load, filter, sort) {
  $(function() {
    var phoneBookData = {};
    var render = function(objList) {
      $('li').remove();
      $("#phoneBookTemplate").tmpl( objList )
      .appendTo( "#phoneBook" );

    // Remove li element from list
    $("li").on("click",function(elementID) {
      console.log('testing',elementID);
      $(this).remove();
    });


    };

    load(function() {
      ajaxGet('json/data.json', function(phoneBookDataA) {
        phoneBookData = phoneBookDataA;
        render( phoneBookData );
      })
    });

    filter(function() {
      var filterList = _.filter(phoneBookData, function(name) {
        if (name.name.indexOf($( '#filter' ).val()) > -1) return true;
      });
      render( _.sortBy(filterList, 'name'));
    });

    sort(function() {
        render( _.sortBy(phoneBookData, 'name') );
      }, function() {
        render( _.sortBy(phoneBookData, 'name').reverse());
    });
  });
});
