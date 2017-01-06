define(function() {
  return function() {
    setEvents();
  }

  function setEvents() {
    $('#btnASC').click(function() {
      asc();
    });

    $('#btnDESC').click(function() {
      desc();
    });
  }

  function asc() {
    console.log('asc');
    $('#btnASC').hide();
    $('#btnDESC').show();
  }

  function desc() {
    console.log('desc');
    $('#btnASC').show();
    $('#btnDESC').hide();
  }
});
