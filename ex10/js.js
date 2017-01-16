requirejs(['render','getSuggestions'], function(render,getSuggestions) {
  
  var toggleSuggestions = _.debounce(function() {
    if ($( '.input' ).val() === '') {
      // User deleted all input so we hide suggestions
      render.hideSuggestions();
    } else {
      // User need same suggestions so lets get same and show it
      var q = $( '.input' ).val();
      getSuggestions('http://localhost:8000/?q=' + q, render.showSuggestions);
    }
  }, 500); 

  $(function() {
    $( '.input' ).on('input', function() { 
      toggleSuggestions();
    });
  });
});
