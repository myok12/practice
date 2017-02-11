define(function() {
  return function(callbalck) {
    $( '#btnMax' ).click(function() {
      //$( '#btnFilter' ).prop( 'disabled', true );
      $( '.searchMin' ).hide();
      $( '.searchMax' ).show();
    });

    $( '#btnMin' ).click(function() {
      $( '.searchMin' ).show();
      $( '.searchMax' ).hide();
    });

    $( '#filter' ).focus(function() {
      //if ($( '#filter' ).val() === 'Type your filter') {
      //  $( '#filter' ).val( '' );
      //}
    });

    $( '#filter' ).on( 'keydown' , function(val) {
      if (val.which == 13) callbalck($( '#filter' ).val());
    });

    $( '#filter' ).on( 'input' , function() {
      if($( '#filter' ).val() === '') {
        $( '#btnFilter' ).prop( 'disabled' , true );
      } else {
        $( '#btnFilter' ).prop( 'disabled' , false );
      }
    });

    $( '#btnFilter' ).click(function() {
      callbalck($( '#filter' ).val());
    });
  }
});
