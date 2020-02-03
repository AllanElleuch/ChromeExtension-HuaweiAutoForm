$("#inputName").keyup(function(e) {
  var size = e.currentTarget.value.length;

  $("#spanName")
    .first()
    .text(`${size}/64`);
});

$("#inputIntroduction").keyup(function(e) {
  var size = e.currentTarget.value.length;

  $("#spanIntroduction")
    .first()
    .text(`${size}/8000`);
});

$("#inputBriefIntroduction").keyup(function(e) {
  var size = e.currentTarget.value.length;

  $("#spanBriefIntro")
    .first()
    .text(`${size}/80`);
});
