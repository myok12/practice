define(function() {

  return function(fun) {
    $('#btnMax').click(function() {
      console.log('searchOn');
      $( '#btnFilter' ).prop( "disabled", true );
      $('#filter').val('Type your filter');
      $('.searchMin').hide();
      $('.searchMax').show();
    });

    $('#btnMin').click(function() {
      console.log('searchOff');
      $('.searchMin').show();
      $('.searchMax').hide();
    });

    $( '#filter' ).focus(function() {
      if ($( '#filter' ).val() === 'Type your filter') {
        $( '#filter' ).val( '' );
      }
    });

    $('#filter').on('keydown', function(val) {
      if (val.which == 13) filterList(fun);
    });

    $('#filter').on('input', function() {
      console.log('searchInput');
      if($('#filter').val() === '') {
        $( '#btnFilter' ).prop( "disabled", true );
      } else {
        $( '#btnFilter' ).prop( "disabled", false );
      }
    });

    $('#btnFilter').click(function() {
      filterList(fun);
    });
  }

  function filterList(fun) {
    console.log('filter list click');
    fun.filter()
  }

});
