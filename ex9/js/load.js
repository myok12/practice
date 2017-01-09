define(function() {
  return function(loadData) {
    $('#btnReloadList').click(function() {
      console.log('reload Clickd');
      loadData();
      $( '#btnReloadList' ).prop( 'value', 'Reload' );
      $( '#btnASC' ).prop( 'disabled', false );
      $( '#btnDESC' ).prop( 'disabled', false );
      $( '#btnMax' ).prop( 'disabled', false );
    });
  };
});
