define(function() {
  return function() {
    setEvents();
  }

  function setEvents() {
    $('#btnMax').click(function() {
      showSearch();
    });

    $('#btnMin').click(function() {
      hideSearch();
    });

    $( '#filter' ).focus(function() {
      if ($( '#filter' ).val() === 'Type your filter') {
        $( '#filter' ).val( '' );
      }
    });

    $('#filter').change(function() {
      onFilterChange();
    });

    $('#filter').on('input', function() {
      onFilterInput();
    });

    $('#btnFilter').click(function() {
      filterList();
    });
  }

  function onFilterInput() {
    console.log('searchInput');
    if($('#filter').val() === '') {
      $( '#btnFilter' ).prop( "disabled", true );
    } else {
      $( '#btnFilter' ).prop( "disabled", false );
    }
  }

  function onFilterChange() {
    console.log('searchChange');
    if($('#filter').val() === '') {
      $( '#btnFilter' ).prop( "disabled", true );
    } else {
      $( "#btnFilter" ).prop( "disabled", false );
    }
  }

  function filterList() {
    console.log('filter list click');
  }

  function showSearch() {
    console.log('searchOn');
    $( '#btnFilter' ).prop( "disabled", true );
    $('#filter').val('Type your filter');
    $('.searchMin').hide();
    $('.searchMax').show();
  }

  function hideSearch() {
    console.log('searchOff');
    $('.searchMin').show();
    $('.searchMax').hide();
  }
});
