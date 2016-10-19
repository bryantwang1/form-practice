$(function() {
  $("#name form").submit(function(event) {
    var userInput = $("input#user").val();

    $(".user").text(userInput);

    $(".panel").show();
    $("#letter").show();

    event.preventDefault();
  });

  $("#sayForm form").submit(function(event) {
    var userInput = $("input#userSays").val();

    $("form").after(userInput.toUpperCase());

    event.preventDefault();
  });
});
