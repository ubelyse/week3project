$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing1").toggle();
      $("#walrus-hidden1").toggle();

      $("#walrus-showing2").toggle();
      $("#walrus-hidden2").toggle();

      $("#walrus-showing3").toggle();
      $("#walrus-hidden3").toggle();
    })
  });
  
  $("form#contactform").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});