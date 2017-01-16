define(function() {
  // Call me with no data to hide suggestion box
  // otherwise i will render "data", (show suggestions)
  return {
    showSuggestions: function(data) {
      if (data.length >= 1) {
        $( 'li' ).remove();
        for (var i = 0; i < data.length; ++i) {
          $( 'ol' ).append( '<li>' + data[i] + '</li>');
        }
        $( 'ol' ).removeClass( "hide" );
       } else {
        $( 'ol' ).addClass( "hide" );
       }
    },
    hideSuggestions: function() {
      $( 'ol' ).addClass( "hide" );
    }
  }
});
