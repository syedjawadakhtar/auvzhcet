$(document).ready(function(){

  $('#footer_form').submit(function(e) {
    e.preventDefault();
    var name = $("input[name=name]").val();
    var phone = $("input[name=phone]").val();
    var email = $("input[name=email]").val();
    var message = $("textarea[name=message]").val();

    $.ajax({
        url: "contact.php",
        type: "POST",
        data: {
            name    : name,
            phone   : phone,
            email   : email,
            message : message
        },
        cache: false,
        success: function() {
            $('#success_message').css("display","block");
            $('#error_message').css("display","none");
            $('#footer_form').trigger("reset");
        },
        error: function() {
            $('#error_message').css("display","block");
            $('#success_message').css("display","none");
            $('#error_message').html("Sorry, it seems that my mail server is not responding. Please try again later!")
            $('#footer_form').trigger("reset");
        },
    });
  });
});