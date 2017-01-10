requirejs(['ajaxGet','load','filter', 'sort','records'] , function(ajaxGet, load, filter, sort, records) {
  $(function() {
    var phoneBookData = [];

    var render = function(objList) {

      console.log('updateRecordsAAA');
    var updateRecords = function(objRecord) {
      console.log('updateRecords');
      $('li').remove();
      $( "#phoneBook" ).hide();
      $("#phoneBookTemplate").tmpl( objRecord )
        .appendTo( "#phoneBook" );
      $('#phoneBook').slideDown( 3000, function() {
          document.getElementById("loader").style.display = "none";
        });
    }
    updateRecords(objList);

      records(function(myThis) {

        var file = {};
        if (myThis.type === 'letterImage') {
          file = {src: ['assets/sound/letter/'+myThis.number+'-letter.mp3']};
        } else {
          file = {src: ['assets/sound/noun/'+myThis.number+'-name.mp3']};
        }
        var sound = new Howl(file);
        sound.play();
      });

    };


/*
 * Auto load data
 */
    ajaxGet('json/data.json', function(phoneBookDataA) {
      phoneBookData = phoneBookDataA;
      render( phoneBookData );
    });
/*
 *
 */
    load(function() {
      document.getElementById("loader").style.display = "inline";
      ajaxGet('json/data.json', function(phoneBookDataFromServer) {
        phoneBookData = phoneBookDataFromServer;
        render( phoneBookData );
      })
    });
/*
 *
 */
    filter(function(filterString) {
      var filterList = _.filter(phoneBookData, function(name) {
        if (name.name.indexOf(filterString) > -1) return true;
      });
      render( _.sortBy(filterList, 'name'));
    });

/*
 *
 */
    sort(function(sortBy) {
      console.log('sortByAcs',sortBy);
        if (sortBy.asc) {
          render( _.sortBy(phoneBookData, 'name') );
        } else {
          render( _.sortBy(phoneBookData, 'name').reverse());
        }
    });
  });
});
