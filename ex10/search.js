var search = {
  toggleSuggestions: _.debounce(function() {
      if ($( '.input' ).val() === '') {
        // User deleted all input so we hide suggestions
        search.hideSuggestions();
      } else {
        // User need same suggestions so lets get same and show it
        var query = $( '.input' ).val();
        search.getSuggestions(query , search.showSuggestions);
      }
    }, 500),
  showSuggestions: function(data) {
    // Call me with no data to hide suggestion box
    // otherwise i will render "data", (show suggestions)
    if (data.length >= 1) {
      $( 'li' ).remove();
      for (var i = 0; i < data.length; ++i) {
        $( 'ol' ).append( '<li>' + data[i] + '</li>');
      }
      $( 'ol' ).removeClass( "hide" );
    } else {
      search.hideSuggestions();
    }
  },
  hideSuggestions: function() {
    $( 'ol' ).addClass( "hide" );
  },
  getSuggestions: function(query, callback) {
    $.ajax({
      url: 'http://localhost:8000/?q=' + query, 
      method: 'GET',
      error: function(error) { alert('an error' + error); },
      success: function(data) {
        callback(JSON.parse(data)); 
      }
    });
  }
};

$(function() {
  $( '.input' ).on('input', function() { 
    search.toggleSuggestions();
  });
});
