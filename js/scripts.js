$(function() {
  $("#name form").submit(function(event) {
    var userInput = $("input#user").val();

    $(".user").text(userInput);

    $("#letter").show();

    event.preventDefault();
  });
});
