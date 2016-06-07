$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height < 42) {
    $('#rides-for-everyone').show();
  }
  else if (height < 50) {
    $('#rides-for-everyone').show();
    $('#rides-for-50-or-taller').show();
  }
  else if (height < 69) {
    $('#rides-for-everyone').show();
    $('#rides-for-50-or-taller').show();
    $('#tallest').show();
  }
    else if (height >= 70) {
      $('#rides-for-everyone').show();
      $('#rides-for-50-or-taller').show();
      $('#tallest').show();
  }
});
