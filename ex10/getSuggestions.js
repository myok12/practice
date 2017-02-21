define(function() {
  return function (url, callback) {
    $.ajax({
      url: url, 
      method: 'GET',
      error: function(error) { alert('an error' + error); },
      success: function(data) {
        callback(JSON.parse(data)); 
      }
    });
  }
});
