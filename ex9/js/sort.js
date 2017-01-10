define(function() {
  return function(sortList) {
    $('#btnASC').click(function() {
      console.log('asc');
      $('#btnASC').hide();
      $('#btnDESC').show();
      sortList({asc: true});
    });

    $('#btnDESC').click(function() {
      console.log('desc');
      $('#btnASC').show();
      $('#btnDESC').hide();
      sortList({asc: false});
    });
  };
});
