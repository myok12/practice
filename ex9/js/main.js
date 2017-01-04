require(['ajaxGet'], function(ajaxGet) {
  $(function() {
    var on;
    setEvents();
    on = {
      loadList: function() {
         ajaxGet('json/data.json', function(phoneBookData) {
            $('li').remove();
            $("#phoneBookTemplate").tmpl( phoneBookData )
              .appendTo( "#phoneBook" );
          });
      },
      searchInput: function() {
        console.log('searchInput');
        if($('#textSearch').val() === '') {
          $( "#btnFilter" ).prop( "disabled", true );
        } else {
          $( "#btnFilter" ).prop( "disabled", false );
        }
      },
      searchChange: function() {
        console.log('searchChange');
        if($('#textSearch').val() === '') {
          $( "#btnFilter" ).prop( "disabled", true );
        } else {
          $( "#btnFilter" ).prop( "disabled", false );
        }
      },
      filter: function() {
        console.log('filter click');
      },
      searchOn: function() {
        console.log('searchOn');
        // Search off
        $( "#btnFilter" ).prop( "disabled", true );
        $('#textSearch').show();
        $('#btnFilter').show();
        $('#btnSearchOff').show();
        $('#btnSearchOn').hide();
      },
      searchOff: function() {
        console.log('searchOff');
        // Search off
        $('#textSearch').hide();
        $('#btnFilter').hide();
        $('#btnSearchOff').hide();
        $('#btnSearchOn').show();
      },
      asc: function() {
        console.log('asc');
        $('#btnASC').hide();
        $('#btnDESC').show();
      },
      desc: function() {
        console.log('desc');
        $('#btnASC').show();
        $('#btnDESC').hide();
      }
    };

    function setEvents() {
      $('#btnReloadList').click(function() {
        on.loadList();
      });

      $('#btnSearchOn').click(function() {
          on.searchOn();
      });

      $('#btnSearchOff').click(function() {
          on.searchOff();
      });

      $('#textSearch').change(function() {
        on.searchChange();
      });

      $('#textSearch').on('input', function() {
        on.searchInput();
      });

      $('#btnFilter').click(function() {
        on.filter();
      });

      $('#btnASC').click(function() {
        on.asc();
      });

      $('#btnDESC').click(function() {
        on.desc();
      });
    }
  });
});
