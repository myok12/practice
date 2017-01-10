requirejs(['ajaxGet','load','filter', 'sort','records'] , function(ajaxGet, load, filter, sort, records) {
  $(function() {
    var phoneBookData = [];

    var render = function(objList) {
      records(function(myThis) {

        updateRecords(objList);
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
