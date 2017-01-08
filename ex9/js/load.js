define(function() {
  return function(fun) {
    $('#btnReloadList').click(function() {
      fun.load();
   });
  }
});
