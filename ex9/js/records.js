define(function() {
  return function(callback) {
    $( '.letterImage' ).on( 'click' , function(elementID) {
      console.log('testing',elementID);
      console.log('testing',$(this).attr('alt'));
      callback({
        number: $(this).attr('alt'),
        type: 'letterImage'
      });
    });
    $( '.nounImage' ).on( 'click' , function(elementID) {
      console.log('testing',elementID);
      console.log('testing',$(this).attr('alt'));
      callback({
        number: $(this).attr('alt'),
        type: 'nounImage'
      });
    });
  };
});
