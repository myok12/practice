define(['ajaxGet'], function(ajaxGet) {
  return function(fun) {
    $('#btnReloadList').click(function() {
      fun.load();
   });
  }
});
