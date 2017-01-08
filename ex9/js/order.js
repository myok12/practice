define(['ajaxGet'], function(ajaxGet) {
  return function(fun) {
    $('#btnASC').click(function() {
      console.log('asc');
      $('#btnASC').hide();
      $('#btnDESC').show();
      fun.sortByAsc();
    });

    $('#btnDESC').click(function() {
      console.log('desc');
      $('#btnASC').show();
      $('#btnDESC').hide();
      fun.sortByDesc()
    });
  }
});
