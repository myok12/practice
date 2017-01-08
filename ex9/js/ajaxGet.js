define(function() {
    return function(url, callback) {
      //url = '';
      $.ajax({
        type: 'GET',
        url: url,
        statusCode: {
          404: function() {
            alert( "page not found" );
          }
        },
        error: function(fff){
            alert( "it is an error" + fff );
            console.log(fff);
        },
        success: function(data) {
          console.log('ajax', data);
          callback(data);
        }
      })
      console.log('ajaxAAS');
    }
});
