requirejs(['ajaxGet','load','search', 'order'] , function(ajaxGet, load, search, order) {
  $(function() {
    var fun = {
      data: {},
      load: function(){
         ajaxGet('json/data.json', function(phoneBookData) {
           fun.data =  phoneBookData;
          fun.print( fun.data );
        });
      },
      sortByAsc: function() {
          fun.print( _.sortBy(fun.data, 'name') );
      },
      sortByDesc: function() {
        fun.print( _.sortBy(fun.data, 'name').reverse());
      },
      filter: function() {
          var filterList = _.filter(fun.data, function(name) {
            if (name.name.indexOf($( '#filter' ).val()) > -1) return name;
          }
        );
        fun.print( _.sortBy(filterList, 'name').reverse());
      },
      print: function(objList) {
        $('li').remove();
        $("#phoneBookTemplate").tmpl( objList )
        .appendTo( "#phoneBook" );
      }
    }



    load(fun);
    search(fun);
    order(fun);
  });
});
