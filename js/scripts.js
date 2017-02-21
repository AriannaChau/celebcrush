$(document).ready(function() {
  $('form#celebcrush').submit(function(event) {
    var sexpref = $('select#gender').val();

    if (sexpref === female) {
      $('#Mila').show();
    }

    event.preventDefault();
  })
})
