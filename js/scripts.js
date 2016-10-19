$(function() {
  $("#name form").submit(function(event) {
    var userInput = $("input#user").val();

    $(".user").text(userInput);

    $(".panel").show();
    $("#letter").show();

    event.preventDefault();
  });
});
