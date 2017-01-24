define(function() {
    return function(url, callback) {
      $.ajax({
        type: 'GET',
        url: url,
        success: function(data) {
          callback(data);
        }
      })
    }
});
