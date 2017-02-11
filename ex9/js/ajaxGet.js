define(function() {
    return function(url, callback) {
      //url = '';
      $.ajax({
        type: 'GET',
        url: url,
        error: function(fff){
            alert( "it is an error" + fff );
        },
        success: function(data) {
          callback(data);
        }
      })
    }
});
