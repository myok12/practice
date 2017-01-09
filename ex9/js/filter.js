define(function() {
  return function(filter) {
    $('#btnMax').click(function() {
      console.log('searchOn');
      $( '#btnFilter' ).prop( "disabled", true );
      //$('#filter').val('Type your filter');
      $('.searchMin').hide();
      $('.searchMax').show();
    });

    $('#btnMin').click(function() {
      console.log('searchOff');
      $('.searchMin').show();
      $('.searchMax').hide();
    });

    $( '#filter' ).focus(function() {
      //if ($( '#filter' ).val() === 'Type your filter') {
      //  $( '#filter' ).val( '' );
      //}
    });

    $('#filter').on('keydown', function(val) {
      if (val.which == 13) filter();
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
      filter();
    });
  }
});
