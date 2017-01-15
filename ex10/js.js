var fff = _.debounce(function() {
    if ($( '.input' ).val() === '') {
      $( "ol" ).addClass( "hide" );
    } else {  
      $( "ol" ).removeClass( "hide" );
    }
  }, 500) 
  
$( '.input' ).on('input', function() { fff(); });

