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
  }, 500) ,
  showSuggestions: function(data) {
    $( 'li' ).remove();
    for (var i = 0; i < data.length; ++i) {
      $( 'ol' ).append( '<li>' + data[i] + '</li>');
    }
    $( 'ol' ).removeClass( "hide" );
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
        if (data.length >= 1) {
          callback(JSON.parse(data)); 
        } else {
          search.hideSuggestions();
        }       
      }
    });
  }
};

$(function() {
  $( '.input' ).on('input', function() { 
    search.toggleSuggestions();
  });
});
