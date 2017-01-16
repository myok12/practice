define(function() {
  // Call me with no data to hide suggestion box
  // otherwise i will render "data", (show suggestions)
  return {
    showSuggestions: function(data) {
      $( 'li' ).remove();
      for (var i = 0; i < data.length; ++i) {
        $( 'ol' ).append( '<li>' + data[i] + '</li>');
      }
      $( 'ol' ).removeClass( "hide" );
    },
    hideSuggestions: function() {
      $( 'ol' ).addClass( "hide" );
    }
  }
});
