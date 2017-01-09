define(function() {
  return function(asc,desc) {
    $('#btnASC').click(function() {
      console.log('asc');
      $('#btnASC').hide();
      $('#btnDESC').show();
      asc();
    });

    $('#btnDESC').click(function() {
      console.log('desc');
      $('#btnASC').show();
      $('#btnDESC').hide();
      desc();
    });
  };
});
